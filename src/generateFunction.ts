import buildPromptString from './utils/buildPromptString';
import generateCodeWithGPT4 from './services/gptService';
import { testFunction } from './services/functionTester';
import { saveFunctionToFile } from './services/fileSaver';
import appRootPath from 'app-root-path';
import fs from 'fs-extra';
import chalk from 'chalk';
export const generateFunction = async (functionName: string, description: string, spec: any, isTypescript: boolean) => {




  const prompt = buildPromptString(description, spec);
  try {

    const generatedCode = await generateCodeWithGPT4(prompt, functionName, isTypescript); // Pass only the prompt
    console.log(`\`${functionName}\` code:\n`, chalk.blue(generatedCode));


    await saveFunctionToFile(functionName, generatedCode, isTypescript);

  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unexpected error occurred.');
    }
  }
};




