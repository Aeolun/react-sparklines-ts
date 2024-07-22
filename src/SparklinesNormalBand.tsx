import React from "react";
import type { PassedProps } from "./Sparklines";
import { mean } from "./dataProcessing/mean";
import { stdev } from "./dataProcessing/stdev";

export type SparklinesNormalBandProps = {
  style?: {
    fill?: string;
    fillOpacity?: number;
  };
};

export default function SparklinesNormalBand(props: SparklinesNormalBandProps) {
  const { points, margin, style } = props as PassedProps &
    SparklinesNormalBandProps;

  const ypoints = points.map((p) => p.y);
  const dataMean = mean(ypoints);
  const dataStdev = stdev(ypoints);

  return (
    <rect
      x={points[0].x}
      y={dataMean - dataStdev + margin}
      width={points[points.length - 1].x - points[0].x}
      height={dataStdev * 2}
      style={style ?? { fill: "red", fillOpacity: 0.1 }}
    />
  );
}
