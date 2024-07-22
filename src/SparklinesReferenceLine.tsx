import React from "react";
import type { PassedProps } from "./Sparklines";
import * as dataProcessing from "./dataProcessing/index";

export type SparklinesReferenceLineProps = {
  type?: "custom";
  value: number;
} & {
  type?: "max" | "min" | "mean" | "avg" | "median";
  style?: {
    stroke?: string;
    strokeOpacity?: number;
    strokeDasharray?: string;
  };
};

export default function SparklinesReferenceLine(
  props: SparklinesReferenceLineProps,
) {
  const { points, margin, type, style, value } = props as PassedProps &
    SparklinesReferenceLineProps;

  const ypoints = points.map((p) => p.y);
  const y = type === "custom" ? value : dataProcessing[type ?? "mean"](ypoints);

  return (
    <line
      x1={points[0].x}
      y1={y + margin}
      x2={points[points.length - 1].x}
      y2={y + margin}
      style={
        style ?? { stroke: "red", strokeOpacity: 0.75, strokeDasharray: "2, 2" }
      }
    />
  );
}
