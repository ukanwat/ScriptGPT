import { generateFunction } from "./generateFunction";
import fs from 'fs-extra';
import appRootPath from "app-root-path";


const fileName = 'gpt.json';


export async function generator(generateAll: boolean): Promise<void> {


    var isTypescript = fs.existsSync(appRootPath + '/tsconfig.json');//TODO: improve this check


    const filePath = appRootPath + `/${fileName}`;

    var generatedFunctions: string[] = [];

    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(data);


        for (const value of jsonData.functions) {
            if (generatedFunctions.includes(value.name)) {
                console.error(`Function with name '${value.name}' already exists. Please choose a different name.`);
            }


            var outputPath = appRootPath + '/generated/' + value.name + '.js';
            if (fs.existsSync(outputPath) && generateAll === false) {
                console.log(`Function with name '${value.name}' already exists.`);
                generatedFunctions.push(value.name);
                continue;
            }



            generateFunction(value.name, value.description, value.parameters.map((element: any) => JSON.stringify(element))
                , value.return, isTypescript);
            generatedFunctions.push(value.name);
            console.log(generatedFunctions)
        }




    } catch (error) {
        console.error('Error reading JSON file:', error);
    }


    console.log(generatedFunctions);
    var functionsFilePath = appRootPath + `/generated/functions.${isTypescript ? 'ts' : 'js'}`;

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
        await fs.writeFile(functionsFilePath, fullCode, { encoding: 'utf8' });
    } catch (error) {
        console.error('Error saving functions map to file:', error);
        throw error;
    }
}
