import { exec, execSync } from "child_process";
import * as fs from "fs";
import * as child_process from 'child_process';


export const installLibrary = (library: string) => {//TODO may need to install declaration files for some libraries
    // Use child_process.exec to run the npm install command
    exec(`npm install ${library}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error during installation: ${error.message}. Please install ${library} manually.`);
            return;
        }
        console.log(`${library} installed successfully!`);
    });
};




