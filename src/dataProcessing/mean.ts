export const mean = (data: number[]): number =>
  data.reduce((a, b) => a + b) / data.length;
