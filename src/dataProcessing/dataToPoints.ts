import { PassedProps, type SparklinesProps } from "../Sparklines";
import { max as arrayMax } from "./max";
import { min as arrayMin } from "./min";

export const dataToPoints = ({
  data,
  limit,
  width = 1,
  height = 1,
  margin = 0,
  max = arrayMax(data),
  min = arrayMin(data),
}: Omit<SparklinesProps, "children">) => {
  const len = data.length;

  if (limit && limit < len) {
    data = data.slice(len - limit);
  }

  const vfactor = (height - margin * 2) / (max - min || 2);
  const hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0));

  return data.map((d, i) => ({
    x: i * hfactor + margin,
    y: (max === min ? 1 : max - d) * vfactor + margin,
  }));
};
