"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFunctionToFile = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const app_root_path_1 = __importDefault(require("app-root-path"));
const saveFunctionToFile = async (functionName, functionCode, isTypescript) => {
    var outputFolderPath = app_root_path_1.default + '/generated';
    if (!fs_extra_1.default.existsSync(outputFolderPath)) {
        fs_extra_1.default.mkdirSync(outputFolderPath);
    }
    var filePath = app_root_path_1.default + `/generated/${functionName}.${isTypescript ? 'ts' : 'js'}`;
    const fullCode = `// Auto-generated function\n export const ${functionName} = ${functionCode};\n`; // support for commonjs module system
    // import {functions} from './functions.js'\n 
    try {
        await fs_extra_1.default.writeFile(filePath, fullCode, { encoding: 'utf8' });
        console.log(`Function saved successfully to ${filePath}`);
    }
    catch (error) {
        console.error('Error saving function to file:', error);
        throw error;
    }
};
exports.saveFunctionToFile = saveFunctionToFile;
