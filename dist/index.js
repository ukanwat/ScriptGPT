"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./loadEnv");
const commander_1 = require("commander");
const generator_1 = require("./generator");
commander_1.program.description("scriptgpt CLI for code generation using OpenAI's GPT-4");
commander_1.program.command('generate')
    .description('Generate functions')
    // .requiredOption('-d, --description <type>', 'Function description')
    // .requiredOption('-i --inputs <values>', 'Comma-separated input values', (val: string) => val.split(','))
    // .requiredOption('-o --outputs <values>', 'Comma-separated output values', (val: string) => val.split(','))
    // .requiredOption('-f --file <path>', 'File path to save the generated function')
    .action(async (options) => {
        var generateAll = true;
        await (0, generator_1.generator)(generateAll);
    });
commander_1.program.parse(process.argv);
console.log('Current working directory:', process.cwd());
