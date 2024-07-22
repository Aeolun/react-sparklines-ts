import React from "react";
import * as dataProcessing from "./dataProcessing/index";
export default function SparklinesReferenceLine(props) {
  const { points, margin, type, style, value } = props;
  const ypoints = points.map((p) => p.y);
  const y = type === "custom" ? value : dataProcessing[type ?? "mean"](ypoints);
  return React.createElement("line", {
    x1: points[0].x,
    y1: y + margin,
    x2: points[points.length - 1].x,
    y2: y + margin,
    style: style ?? {
      stroke: "red",
      strokeOpacity: 0.75,
      strokeDasharray: "2, 2",
    },
  });
}
