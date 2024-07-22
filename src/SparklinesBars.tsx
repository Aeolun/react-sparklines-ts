import React, { DOMAttributes, SVGProps } from "react";
import type { PassedProps, SVGCSSProperties } from "./Sparklines";

export type SparklinesBarsProps = {
  style: SVGCSSProperties;
  barWidth?: number;
  onMouseMove?: (p: { x: number; y: number }) => void;
};

export default function SparklinesBars(props: SparklinesBarsProps) {
  let { style } = props as SparklinesBarsProps;
  const { points, height, barWidth, margin, onMouseMove } =
    props as PassedProps & SparklinesBarsProps;

  if (!style) {
    style = { fill: "slategray" };
  }

  const strokeWidth = 1 * (style?.strokeWidth || 0);
  const marginWidth = margin ? 2 * margin : 0;
  const width =
    barWidth ||
    (points && points.length >= 2
      ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth)
      : 0);

  return (
    <g transform="scale(1,-1)">
      {points.map((p, i) => (
        <rect
          key={i}
          x={p.x - (width + strokeWidth) / 2}
          y={-height}
          width={width}
          height={Math.max(0, height - p.y)}
          style={style}
          onMouseMove={(e) => onMouseMove?.(p)}
        />
      ))}
    </g>
  );
}
