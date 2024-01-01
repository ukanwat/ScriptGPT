"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generator = void 0;
const generateFunction_1 = require("./generateFunction");
const fs_extra_1 = __importDefault(require("fs-extra"));
const app_root_path_1 = __importDefault(require("app-root-path"));
const fileName = 'gpt.json';
async function generator(generateAll) {
    var isTypescript = fs_extra_1.default.existsSync(app_root_path_1.default + '/tsconfig.json'); //TODO: improve this check
    const filePath = app_root_path_1.default + `/${fileName}`;
    var generatedFunctions = [];
    try {
        const data = fs_extra_1.default.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(data);
        for (const value of jsonData.functions) {
            if (generatedFunctions.includes(value.name)) {
                console.error(`Function with name '${value.name}' already exists. Please choose a different name.`);
            }
            var outputPath = app_root_path_1.default + '/generated/' + value.name + '.js';
            if (fs_extra_1.default.existsSync(outputPath) && generateAll === false) {
                console.log(`Function with name '${value.name}' already exists.`);
                generatedFunctions.push(value.name);
                continue;
            }
            (0, generateFunction_1.generateFunction)(value.name, value.description, value.parameters.map((element) => JSON.stringify(element)), value.return, isTypescript);
            generatedFunctions.push(value.name);
            console.log(generatedFunctions);
        }
    }
    catch (error) {
        console.error('Error reading JSON file:', error);
    }
    //      if (!fs.existsSync(appRootPath + '/functions.js')) {
    //     const functionsCode = `export var functions = {};\n`;
    //     await fs.writeFile(outputFolderPath + '/functions.js', functionsCode, { encoding: 'utf8' });
    //   }
    console.log(generatedFunctions);
    var functionsFilePath = app_root_path_1.default + `/generated/functions.js`;
    var fullCode = "";
    for (const val of generatedFunctions) {
        fullCode = fullCode + `import {${val}} from './${val}.${isTypescript ? 'ts' : 'js'}';\n`;
    }
    fullCode = fullCode + `export var functions = {\n`;
    for (const val of generatedFunctions) {
        fullCode = fullCode + `"${val}":${val},\n`;
    }
    fullCode = fullCode + `};`;
    console.log(fullCode);
    try {
        await fs_extra_1.default.writeFile(functionsFilePath, fullCode, { encoding: 'utf8' });
    }
    catch (error) {
        console.error('Error saving functions map to file:', error);
        throw error;
    }
}
exports.generator = generator;
