import React from "react";
function lastDirection(points) {
  Math.sign = Math.sign || ((x) => (x > 0 ? 1 : -1));
  return points.length < 2
    ? 0
    : Math.sign(points[points.length - 2].y - points[points.length - 1].y);
}
export default function SparklinesSpots(props) {
  let { size, spotColors } = props;
  const { points, width, height, style } = props;
  if (!size) size = 2;
  if (!spotColors)
    spotColors = {
      "-1": "red",
      0: "black",
      1: "green",
    };
  const startSpot = React.createElement("circle", {
    cx: points[0].x,
    cy: points[0].y,
    r: size,
    style: style,
  });
  const endSpot = React.createElement("circle", {
    cx: points[points.length - 1].x,
    cy: points[points.length - 1].y,
    r: size,
    style: style || { fill: spotColors[lastDirection(points)] },
  });
  return React.createElement("g", null, style && startSpot, endSpot);
}
