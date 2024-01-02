import fs from 'fs-extra';
import appRoot from 'app-root-path';
import { generatePath } from 'generator';
import chalk from 'chalk';
export const saveFunctionToFile = async (functionName: string, functionCode: string, isTypescript: boolean): Promise<void> => {




  var filePath = generatePath + `/${functionName}.${isTypescript ? 'ts' : 'js'}`;

  const fullCode = `//Auto-generated function\n${functionCode};\n`;// support for commonjs module system
  // import {functions} from './functions.js'\n 
  try {
    await fs.writeFile(filePath, fullCode, { encoding: 'utf8' });
    console.log(`Function saved successfully to: `, chalk.green(filePath));
  } catch (error) {
    console.error('Error saving function to file:', chalk.red(filePath));
    throw error;
  }
};