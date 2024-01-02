//Auto-generated function
export function findMatrix(nums: number[]): number[][] {
  let matrix: number[][] = [];
  while (nums.length > 0) {
    let row: number[] = [];
    nums = nums.filter((num) => {
      if (!row.includes(num)) {
        row.push(num);
        return false;
      }
      return true;
    });
    matrix.push(row);
  }
  return matrix;
};
