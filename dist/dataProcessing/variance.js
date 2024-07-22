import { mean } from "./mean";
export const variance = (data) => {
  const dataMean = mean(data);
  const sq = data.map((n) => (n - dataMean) ** 2);
  return mean(sq);
};
