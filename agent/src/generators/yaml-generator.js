const OpenAI = require('openai');
const { buildSystemPrompt } = require('../config/governance-loader');
const { validate } = require('../validators/yaml-validator');

let client = null;

function getClient() {
  if (!client) {
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return client;
}

async function generateYaml(userPrompt, platform, retries = 2) {
  const systemPrompt = buildSystemPrompt();

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      const response = await getClient().chat.completions.create({
        model: process.env.MODEL || 'gpt-4',
        temperature: parseFloat(process.env.TEMPERATURE || '0.1'), // low temp = consistent output
        max_tokens: parseInt(process.env.MAX_TOKENS || '4000'),
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
      });

      let yamlOutput = response.choices[0].message.content.trim();

      // Strip markdown code blocks if AI added them despite instructions
      yamlOutput = yamlOutput
        .replace(/^```ya?ml\n?/i, '')
        .replace(/^```\n?/, '')
        .replace(/\n?```$/, '')
        .trim();

      // Validate the output
      const validation = validate(yamlOutput, platform);

      if (validation.passed) {
        return { yaml: yamlOutput, validation, attempt };
      }

      // If validation failed and we have retries left, retry with error context
      if (attempt <= retries) {
        const errorFeedback = `The previous YAML had these issues:\n${validation.errors.join('\n')}\n\nFix all issues and regenerate.`;
        userPrompt = `${userPrompt}\n\n${errorFeedback}`;
      } else {
        // Return with warnings even if not perfect after retries
        return { yaml: yamlOutput, validation, attempt };
      }
    } catch (error) {
      if (attempt > retries) throw error;
    }
  }
}

module.exports = { generateYaml };
