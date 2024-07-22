import React from "react";
export default function SparklinesText(props) {
  const { point, text, fontSize, fontFamily } = props;
  const { x, y } = point;
  return React.createElement(
    "g",
    null,
    React.createElement(
      "text",
      {
        x: x,
        y: y,
        fontFamily: fontFamily || "Verdana",
        fontSize: fontSize || 10,
      },
      text,
    ),
  );
}
