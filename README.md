# ScriptGPT

## Overview
`scriptgpt` is a JavaScript library that facilitates the creation of custom functions through natural language descriptions and input-output examples, leveraging OpenAI's GPT-4 API. It allows for code generation via a command-line interface.

## Features
- **Function Import**: Integration with Node.js applications for dynamic function creation.
- **CLI Interaction**: Command-line code generation with automated testing.
- **API Key Configuration**: OpenAI API key setup via .env file.
- **API Interaction**: Utilizes OpenAI's API to generate code.
- **Code Crafting**: Transforms natural language into JavaScript functions with provided examples.
- **File Output**: Saves the generated and tested functions into files.

## Prerequisites
- An OpenAI API key

## Installation
To use `scriptgpt` in your project, install the package using npm:

```
npm install scriptgpt
```

## Configuration
Create a `.env` file in your project root and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
```

## Usage

1. **Create the Configuration File**

    Create a file named `scriptgpt.config.json` in the root directory of your project.

    Define an array of functions within this file, specifying the following properties for each function:
    
    - `name`: The name of the function to be generated (string).
    - `description`: A brief description of the function's purpose (string).
    - `parameters`: An array of objects describing the function's input parameters, where each object has:
        - `name`: The name of the parameter (string).
        - `type`: The data type of the parameter (e.g., "number", "string", "array", "object") (string).
    - `return`: An object describing the function's output value, with:
        - `type`: The data type of the output value (string).

    **Example `scriptgpt.config.json`:**
    
    ```json
    {
        "functions": [
            {
                "name": "add",
                "description": "Adds two integers together and returns values",
                "parameters": [
                    {
                        "name": "a",
                        "type": "int"
                    },
                    {
                        "name": "b",
                        "type": "int"
                    }
                ],
                "return": "int"
            }
        ]
    }
    ```

2. **Generate the Functions**

    Run the following command in your terminal:

    ```bash
    scriptgpt generate
    ```

    This command will generate the JavaScript functions based on your `gpt.json` configuration and place them in the `root/generated/functions.js` file.


## How ScriptGPT works?
<img src="https://github.com/ukanwat/ScriptGPT/blob/master/docs/images/scriptgpt.png" width="500" />

## Code Style
Generated code follows the Airbnb JavaScript style guide.

## Contributing
Contributions are welcome. Please ensure that your contributions comply with the project's code style and testing requirements.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements
- OpenAI for providing the GPT-4 API.
- The contributors to the `eslint-config-airbnb-base` project for their code style guide.

## Author
- Utkarsh Kanwat
