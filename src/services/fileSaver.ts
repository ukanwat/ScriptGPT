import fs from 'fs-extra';
import appRoot from 'app-root-path';
export const saveFunctionToFile = async (functionName: string, functionCode: string, isTypescript: boolean): Promise<void> => {

  var outputFolderPath = appRoot + '/generated';
  if (!fs.existsSync(outputFolderPath)) {
    fs.mkdirSync(outputFolderPath);
  }


  var filePath = appRoot + `/generated/${functionName}.${isTypescript ? 'ts' : 'js'}`;

  const fullCode = `// Auto-generated function\n export const ${functionName} = ${functionCode};\n`;// support for commonjs module system
  // import {functions} from './functions.js'\n 
  try {
    await fs.writeFile(filePath, fullCode, { encoding: 'utf8' });
    console.log(`Function saved successfully to ${filePath}`);
  } catch (error) {
    console.error('Error saving function to file:', error);
    throw error;
  }
};