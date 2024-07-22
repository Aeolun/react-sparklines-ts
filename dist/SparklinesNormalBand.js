import React from "react";
import { mean } from "./dataProcessing/mean";
import { stdev } from "./dataProcessing/stdev";
export default function SparklinesNormalBand(props) {
  const { points, margin, style } = props;
  const ypoints = points.map((p) => p.y);
  const dataMean = mean(ypoints);
  const dataStdev = stdev(ypoints);
  return React.createElement("rect", {
    x: points[0].x,
    y: dataMean - dataStdev + margin,
    width: points[points.length - 1].x - points[0].x,
    height: dataStdev * 2,
    style: style ?? { fill: "red", fillOpacity: 0.1 },
  });
}
