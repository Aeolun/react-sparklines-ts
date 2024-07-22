import { mean } from "./mean";
export const stdev = (data) => {
  const dataMean = mean(data);
  const sqDiff = data.map((n) => (n - dataMean) ** 2);
  const avgSqDiff = mean(sqDiff);
  return Math.sqrt(avgSqDiff);
};
