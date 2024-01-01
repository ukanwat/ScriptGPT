// Auto-generated function
 export const add = function add(input1: any, input2: any): number {
    let num1 = parseInt(input1);
    let num2 = parseInt(input2);
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Invalid inputs. Both inputs should be convertible to integers.');
    }
    return num1 + num2;
};
