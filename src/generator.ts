import { generateFunction } from "./generateFunction";
import fs from 'fs-extra';
import appRootPath from "app-root-path";
import { cosmiconfig, cosmiconfigSync } from 'cosmiconfig';
import path from "path";
import { FunctionSpec } from "interfaces/FunctionSpec";








export let generatePath: string = appRootPath + '/generated';




// outputPath in config file is relative to the root of the project


export async function generator(generateAll: boolean): Promise<void> {









    var isTypescript = fs.existsSync(appRootPath + '/tsconfig.json');//TODO: improve this check

    ;

    var generatedFunctions: string[] = [];


    const explorerSync = cosmiconfigSync('scriptgpt', {
        searchPlaces: ['scriptgpt.config.json', 'package.json'],
    });

    const result = explorerSync.search();



    var config;
    console.log(result);

    if (result && result.config)
        config = result.config;
    else { console.error('No config file found'); return; }

    generatePath = config.outputPath ? path.join(appRootPath.path, config.outputPath) : generatePath;

    if (!fs.existsSync(generatePath)) {
        fs.mkdirSync(generatePath, { recursive: true });
        console.log(`Created folder ${generatePath}`);
    }


    try {
        // const data = fs.readFileSync(filePath, 'utf-8');
        // const jsonData = JSON.parse(data);
        const jsonData = config;


        for (const value of jsonData.functions) {



            if (generatedFunctions.includes(value.name)) {
                console.error(`Function with name '${value.name}' already exists. Please choose a different name.`);
            }


            var filePath = path.join(generatePath, '/' + (value.name as string) + (isTypescript ? ".ts" : '.js'));

            if (fs.existsSync(filePath) && generateAll === false) {
                console.log(`Function with name '${value.name}' already exists.`);
                generatedFunctions.push(value.name);
                continue;
            }



            var spec = value as FunctionSpec;
            await generateFunction(value.name, value.description, spec, isTypescript);
            generatedFunctions.push(value.name);
        }




    } catch (error) {
        console.error('Error reading JSON file:', error);
    }



    var functionsFilePath = generatePath + `/index.${isTypescript ? 'ts' : 'js'}`;

    var fullCode = "";
    for (const val of generatedFunctions) {
        fullCode = fullCode + `import {${val}} from './${val}';\n`;
    }
    fullCode = fullCode + `export var functions = {\n`;
    for (const val of generatedFunctions) {
        fullCode = fullCode + `"${val}":${val},\n`;
    }
    fullCode = fullCode + `};`;



    try {
        await fs.writeFile(functionsFilePath, fullCode, { encoding: 'utf8' });
    } catch (error) {
        console.error('Error saving functions map to file:', error);
        throw error;
    }
}
