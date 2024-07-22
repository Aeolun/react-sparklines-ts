import React, { type CSSProperties } from "react";
import type { PassedProps } from "./Sparklines";

export type SparklinesCurveProps = {
  color?: string;
  style?: CSSProperties;
  divisor?: number;
};

export default function SparklinesCurve(props: SparklinesCurveProps) {
  const {
    points,
    width,
    height,
    margin,
    color,
    style,
    divisor = 0.25,
  } = props as PassedProps & SparklinesCurveProps;
  let prev: { x: number; y: number } | undefined;
  const curve = (p: { x: number; y: number }) => {
    let res: Array<number | string> = [];
    if (!prev) {
      res = [p.x, p.y];
    } else {
      const len = (p.x - prev.x) * divisor;
      res = [
        "C",
        //x1
        prev.x + len,
        //y1
        prev.y,
        //x2,
        p.x - len,
        //y2,
        p.y,
        //x,
        p.x,
        //y
        p.y,
      ];
    }
    prev = p;
    return res;
  };
  const linePoints = points.map((p) => curve(p)).reduce((a, b) => a.concat(b));
  const closePolyPoints = [
    `L${points[points.length - 1].x}`,
    height - margin,
    margin,
    height - margin,
    margin,
    points[0].y,
  ];
  const fillPoints = linePoints.concat(closePolyPoints);

  const lineStyle = {
    stroke: color ?? style?.stroke ?? "slategray",
    strokeWidth: style?.strokeWidth ?? "1",
    strokeLinejoin: style?.strokeLinejoin ?? "round",
    strokeLinecap: style?.strokeLinecap ?? "round",
    fill: "none",
  };
  const fillStyle = {
    stroke: style?.stroke ?? "none",
    strokeWidth: "0",
    fillOpacity: style?.fillOpacity ?? ".1",
    fill: style?.fill ?? color ?? "slategray",
  };

  return (
    <g>
      <path d={`M${fillPoints.join(" ")}`} style={fillStyle} />
      <path d={`M${linePoints.join(" ")}`} style={lineStyle} />
    </g>
  );
}
