export const median = (data: number[]): number =>
  data.sort((a, b) => a - b)[Math.floor(data.length / 2)];
