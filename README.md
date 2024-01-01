# scriptgpt

## Overview
`scriptgpt` is a JavaScript library that facilitates the creation of custom functions through natural language descriptions and input-output examples, leveraging OpenAI's GPT-4 API. It is designed to be used within Node.js applications and allows for code generation via a command-line interface.

## Features
- **Function Import**: Integration with Node.js applications for dynamic function creation.
- **CLI Interaction**: Command-line code generation with automated testing.
- **API Key Configuration**: OpenAI API key setup via .env file.
- **API Interaction**: Utilizes OpenAI's API to generate code.
- **Code Crafting**: Transforms natural language into JavaScript functions with provided examples.
- **Rigorous Testing**: Ensures function reliability using input-output pairs for testing.
- **File Output**: Saves the generated and tested functions into files.

## Prerequisites
- Node.js
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
Import `scriptgpt` into your Node.js application and use the CLI to generate functions:

```bash
scriptgpt generate --description "Function description" --inputs "input1,input2" --outputs "output1,output2"
```

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
