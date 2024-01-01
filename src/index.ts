#! /usr/bin/env node

import './loadEnv';
import { program } from 'commander';
import { generateFunction } from './generateFunction';
import { generator } from './generator';

program.description("scriptgpt CLI for code generation using OpenAI's GPT-4");

program.command('generate')
  .description('Generate functions')
  .option('-a, --all', 'Generate all functions')
  // .requiredOption('-d, --description <type>', 'Function description')
  // .requiredOption('-i --inputs <values>', 'Comma-separated input values', (val: string) => val.split(','))
  // .requiredOption('-o --outputs <values>', 'Comma-separated output values', (val: string) => val.split(','))
  // .requiredOption('-f --file <path>', 'File path to save the generated function')
  .action(async (options) => {
    var generateAll = false;
    if (options.all) generateAll = true;
    await generator(generateAll);
  });

program.parse(process.argv);

console.log('Current working directory:', process.cwd());
