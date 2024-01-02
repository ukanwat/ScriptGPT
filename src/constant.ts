import appRootPath from "app-root-path";


export const constants = {
    GENERATED_FOLDER: appRootPath + '/generated',
    TS_CONFIG_FILE: appRootPath + '/tsconfig.json',
    CONFIG_FILE_NAMES: ['scriptgpt.config.json', 'package.json'],
} as const;