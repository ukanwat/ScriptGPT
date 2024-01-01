"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFunction = void 0;
const buildPromptString_1 = __importDefault(require("./utils/buildPromptString"));
const gptService_1 = __importDefault(require("./services/gptService"));
const fileSaver_1 = require("./services/fileSaver");
const generateFunction = async (functionName, description, parameters, returnType, isTypescript) => {
    const prompt = (0, buildPromptString_1.default)(description, parameters, returnType);
    try {
        console.log('Prompt sent to GPT-4:', prompt);
        const generatedCode = await (0, gptService_1.default)(prompt, functionName, isTypescript); // Pass only the prompt
        console.log('Generated Code:', generatedCode);
        await (0, fileSaver_1.saveFunctionToFile)(functionName, generatedCode, isTypescript);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error('An unexpected error occurred.');
        }
    }
};
exports.generateFunction = generateFunction;
