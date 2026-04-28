require('dotenv').config();
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { parseUserRequest, buildUserPrompt } = require('./config/input-parser');
const { generateYaml } = require('./generators/yaml-generator');

const OUTPUT_DIR = process.env.OUTPUT_DIR || './generated-pipelines';

function printBanner() {
  console.log(chalk.cyan('\n╔══════════════════════════════════════════════════╗'));
  console.log(chalk.cyan('║     Enterprise CI/CD YAML Agent                  ║'));
  console.log(chalk.cyan('║     Governed by copilot-enterprise-prompts        ║'));
  console.log(chalk.cyan('╚══════════════════════════════════════════════════╝\n'));
}

function printValidationResult(validation) {
  if (validation.passed) {
    console.log(chalk.green('\n✅ Validation PASSED - All governance standards met'));
  } else {
    console.log(chalk.red('\n❌ Validation FAILED'));
    validation.errors.forEach(e => console.log(chalk.red(`   • ${e}`)));
  }
  if (validation.warnings.length > 0) {
    console.log(chalk.yellow('\n⚠️  Warnings:'));
    validation.warnings.forEach(w => console.log(chalk.yellow(`   • ${w}`)));
  }
}

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'platform',
      message: 'Select CI/CD Platform:',
      choices: ['Azure DevOps', 'GitHub Actions'],
    },
    {
      type: 'list',
      name: 'language',
      message: 'Select Application Language:',
      choices: ['Node.js', 'Java', 'Python', 'Go', '.NET', 'React'],
    },
    {
      type: 'list',
      name: 'sastTool',
      message: 'Select SAST Security Tool:',
      choices: ['SonarQube', 'Snyk', 'CodeQL', 'Semgrep'],
    },
    {
      type: 'list',
      name: 'os',
      message: 'Select OS Agent/Runner:',
      choices: ['ubuntu-latest', 'windows-latest', 'macos-latest'],
    },
    {
      type: 'input',
      name: 'outputFile',
      message: 'Output filename (without extension):',
      default: (ans) => `${ans.language.toLowerCase().replace('.', '')}-${ans.platform.toLowerCase().replace(' ', '-')}-pipeline`,
    },
  ]);
  return answers;
}

async function run() {
  printBanner();

  // Check API key
  if (!process.env.OPENAI_API_KEY) {
    console.log(chalk.red('❌ OPENAI_API_KEY not set. Copy .env.example to .env and add your key.'));
    process.exit(1);
  }

  const answers = await promptUser();

  const userInput = `Generate ${answers.platform} pipeline for ${answers.language} with ${answers.sastTool} on ${answers.os}`;
  const parsed = parseUserRequest(userInput);
  const userPrompt = buildUserPrompt(parsed);

  console.log(chalk.blue('\n⚙️  Generating YAML pipeline...'));
  console.log(chalk.gray(`   Platform : ${answers.platform}`));
  console.log(chalk.gray(`   Language : ${answers.language}`));
  console.log(chalk.gray(`   SAST Tool: ${answers.sastTool}`));
  console.log(chalk.gray(`   OS       : ${answers.os}`));

  try {
    const { yaml, validation, attempt } = await generateYaml(userPrompt, parsed.platform);

    if (attempt > 1) {
      console.log(chalk.yellow(`\n⚠️  Required ${attempt} attempts to generate valid YAML`));
    }

    printValidationResult(validation);

    // Save output
    await fs.ensureDir(OUTPUT_DIR);
    const outputPath = path.join(OUTPUT_DIR, `${answers.outputFile}.yaml`);
    await fs.writeFile(outputPath, yaml, 'utf8');

    console.log(chalk.green(`\n✅ Pipeline saved to: ${outputPath}`));
    console.log(chalk.cyan('\n--- Generated YAML Preview (first 20 lines) ---'));
    console.log(chalk.white(yaml.split('\n').slice(0, 20).join('\n')));
    console.log(chalk.cyan('--- End Preview ---\n'));

  } catch (error) {
    console.log(chalk.red(`\n❌ Generation failed: ${error.message}`));
    process.exit(1);
  }
}

run();
