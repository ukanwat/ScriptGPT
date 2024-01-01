// Auto-generated function
 export const divide = function divide(num1: any, num2: any): number {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    if (num2 === 0) {
        throw new Error('Cannot divide by zero');
    }
    return Math.floor(num1 / num2);
};
