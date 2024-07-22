import React from "react";
export default function SparklinesBars(props) {
  let { style } = props;
  const { points, height, barWidth, margin, onMouseMove } = props;
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
  return React.createElement(
    "g",
    { transform: "scale(1,-1)" },
    points.map((p, i) =>
      React.createElement("rect", {
        key: i,
        x: p.x - (width + strokeWidth) / 2,
        y: -height,
        width: width,
        height: Math.max(0, height - p.y),
        style: style,
        onMouseMove: (e) => onMouseMove?.(p),
      }),
    ),
  );
}
