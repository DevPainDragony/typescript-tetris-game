export function rotate(matrix: number[][]): number[][] {
  return matrix[0].map((_, column) =>
    matrix.map((row) => row[column]).reverse()
  );
}
