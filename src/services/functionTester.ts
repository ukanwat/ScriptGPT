import { promisify } from 'util';
import { Script, createContext } from 'vm';
import acorn from 'acorn';
const asyncExec = promisify(require('child_process').exec);





export const testFunction = async (functionCode: string, testCases: { inputs: any[], expectedOutput: any }[]): Promise<boolean> => {

  console.log('Testing function with the following test cases:', testCases);
  try {
    let allTestsPassed = true;

    for (const testCase of testCases) {

      var codeScript = `
        ${functionCode}
    `;

      // return generatedFunction(...testInputs);




      console.log('codeScript:', codeScript);
      // const script = new Script(codeScript);

      const context = {
        generatedFunction: eval(`(${functionCode})`),
        testInputs: testCase.inputs,
        result: null,
      };

      // const vmContext = createContext(context);
      // context.result = script.runInContext(vmContext);

      // const funct: Function = new Function(codeScript)();

      // const ast = acorn.parse(codeScript, {
      //   ecmaVersion: 2020,
      // });
      const parsedFunction = new Function('return ' + codeScript);





      // Execute the function with arguments
      // context.result = funct(testCase.inputs);
      console.log(context.result);

      if (JSON.stringify(context.result) !== JSON.stringify(testCase.expectedOutput)) {
        allTestsPassed = false;
        console.error(`Test failed for inputs: ${JSON.stringify(testCase.inputs)}. Expected ${JSON.stringify(testCase.expectedOutput)}, but got ${JSON.stringify(context.result)}.`);
        break;
      } else {
        console.log(`Test passed for inputs: ${JSON.stringify(testCase.inputs)}.`);
      }
    }

    return allTestsPassed;
  } catch (error) {
    console.error('An error occurred while testing the function:', error);
    return false;
  }
};
