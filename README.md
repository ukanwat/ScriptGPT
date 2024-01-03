<p align="center">
  <img src="https://github.com/ukanwat/ScriptGPT/blob/master/docs/images/SG.png" width="200" alt="Project Logo">
</p>


<p align="center">
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/ukanwat/scriptgpt"/>
  <img alt="Github Last Commit" src="https://img.shields.io/github/last-commit/ukanwat/scriptgpt"/>
  <img alt="Github Contributors" src="https://img.shields.io/github/contributors/ukanwat/scriptgpt"/>
  <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/ukanwat/scriptgpt"/>
  <!-- <img alt="Discord" src="https://img.shields.io/discord/1107178041848909847?label=discord"/> -->
</p>



<h1 align="center">ScriptGPT</h1>

<p align="center">
⚡️ Accelerate development by assigning feature creation to an AI agent, freeing you to focus on project architecture and integration.
</p>


## Why ScriptGPT? 🚀

- **Hand off feature development to an AI agent:** Let it excel in what it does best while you focus on managing how everything works together.
  
- **Control assistance:** Specify how much help you need. If a task is beyond the AI agents capability, you can take control and handle it yourself.

- **Built for TS/JS:** Tailored to automatically install required libraries, test code, add comments, and more.

- **Overcome limitations of current AI-powered Coding tools:**
  - *Tools like copilot struggles with effective code integration and lacks planning capabilities. You can use both tools together, copilot can help with writing code and you can offload specific project features to ScriptGPT*
  - *GPT-Engineer and similar tools aren't yet suitable for large, complex projects, facing difficulties in accessing language-specific tools and bug fixing.*




## How ScriptGPT works?
<img src="https://github.com/ukanwat/ScriptGPT/blob/master/docs/images/scriptgpt.png" width="400" />

- **CLI Interaction**: Command-line code generation with automated testing.
- **API Interaction**: Currenty it utilizes OpenAI's API to generate code with plans to integrate additional AI providers.
- **Code Crafting**: Transforms natural language into TS/JS code with provided specification.
- **File Output**: Generated code is automatically saved within your project


## Prerequisites
- An OpenAI API key

## Installation
To use `scriptgpt` in your project, install the package using npm:

```
npm install scriptgpt -d
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





## Project Roadmap

### Completed Features

- [x] **Automatic Library Install Functionality:**
  - Users can automatically install required libraries for generated code.

- [x] **Agent Planning Before Writing Code:**
  - The agent plans its approach before generating code for improved organization.

### Future Considerations

- [ ] **RAG System Integration:**
  - Implement a RAG (Read, Ask, Generate) system for better library documentation utilization.
  - Enable the agent to ask clarifying questions about the documentation.

- [ ] **Return Class in Generated Code:**
  - Modify code generation to include class information, not just functions.

- [ ] **User Feedback Mechanism:**
  - Implement a user feedback mechanism for code improvements.





## Contributing
Fork the repository and create a new branch for your contributions. Submit a pull request detailing changes and their purpose.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Acknowledgements
- The contributors to the `eslint-config-airbnb-base` project for their code style guide.
