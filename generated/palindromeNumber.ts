//Auto-generated function
export function palindromeNumber(num: number): boolean {
  const str = num.toString();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};
