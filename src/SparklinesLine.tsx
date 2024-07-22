import React, { type CSSProperties } from "react";
import { type PassedProps, SVGCSSProperties } from "./Sparklines";

export type SparklinesLineProps = {
  color?: string;
  style?: CSSProperties;
  tooltips?: boolean;
  onMouseMove?: (
    type: string,
    data: number,
    point: { x: number; y: number },
  ) => void;
};

export default function SparklinesLine(props: SparklinesLineProps) {
  const { data, points, width, height, margin, color, style, onMouseMove } =
    props as PassedProps & SparklinesLineProps;

  const linePoints = points
    .map((p) => [p.x, p.y])
    .reduce((a, b) => a.concat(b));

  const closePolyPoints = [
    points[points.length - 1].x,
    height - margin,
    margin,
    height - margin,
    margin,
    points[0].y,
  ];

  const fillPoints = linePoints.concat(closePolyPoints);

  const lineStyle: CSSProperties = {
    stroke: color || style?.stroke || "slategray",
    strokeWidth: style?.strokeWidth || "1",
    strokeLinejoin: style?.strokeLinejoin || "round",
    strokeLinecap: style?.strokeLinecap || "round",
    fill: "none",
  };
  const fillStyle: CSSProperties = {
    stroke: style?.stroke || "none",
    strokeWidth: "0",
    fillOpacity: style?.fillOpacity || ".1",
    fill: style?.fill || color || "slategray",
    pointerEvents: "auto",
  };

  const tooltips = props.tooltips
    ? points.map((p, i) => {
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={2}
            style={fillStyle}
            onMouseEnter={(e) => onMouseMove?.("enter", data[i], p)}
            onClick={(e) => onMouseMove?.("click", data[i], p)}
          />
        );
      })
    : null;

  return (
    <g>
      {tooltips}
      <polyline points={fillPoints.join(" ")} style={fillStyle} />
      <polyline points={linePoints.join(" ")} style={lineStyle} />
    </g>
  );
}
