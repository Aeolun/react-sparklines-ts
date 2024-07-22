import type React from "react";
import { type PassedProps, SparklinesProps } from "./Sparklines";

export type SparklinesSpotsProps = {
  size?: number;
  spotColors?: { [key: string]: string };
  style?: React.CSSProperties;
};

function lastDirection(points: PassedProps["points"]) {
  Math.sign = Math.sign || ((x) => (x > 0 ? 1 : -1));

  return points.length < 2
    ? 0
    : Math.sign(points[points.length - 2].y - points[points.length - 1].y);
}

export default function SparklinesSpots(props: SparklinesSpotsProps) {
  let { size, spotColors } = props;
  const { points, width, height, style } = props as PassedProps &
    SparklinesSpotsProps;
  if (!size) size = 2;
  if (!spotColors)
    spotColors = {
      "-1": "red",
      "0": "black",
      "1": "green",
    };

  const startSpot = (
    <circle cx={points[0].x} cy={points[0].y} r={size} style={style} />
  );

  const endSpot = (
    <circle
      cx={points[points.length - 1].x}
      cy={points[points.length - 1].y}
      r={size}
      style={style || { fill: spotColors[lastDirection(points)] }}
    />
  );

  return (
    <g>
      {style && startSpot}
      {endSpot}
    </g>
  );
}
