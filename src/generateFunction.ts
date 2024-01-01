import buildPromptString from './utils/buildPromptString';
import generateCodeWithGPT4 from './services/gptService';
import { testFunction } from './services/functionTester';
import { saveFunctionToFile } from './services/fileSaver';
import appRootPath from 'app-root-path';
import fs from 'fs-extra';
export const generateFunction = async (functionName: string, description: string, parameters: string[], returnType: string, isTypescript: boolean) => {




  const prompt = buildPromptString(description, parameters, returnType);
  try {
    console.log('Prompt sent to GPT-4:', prompt);
    const generatedCode = await generateCodeWithGPT4(prompt, functionName, isTypescript); // Pass only the prompt
    console.log('Generated Code:', generatedCode);


    await saveFunctionToFile(functionName, generatedCode, isTypescript);

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unexpected error occurred.');
    }
  }
};




