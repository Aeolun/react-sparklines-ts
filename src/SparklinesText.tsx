import React from "react";

export type SparklinesTextProps = {
  point: { x: number; y: number };
  text: string;
  fontSize?: number;
  fontFamily?: string;
};

export default function SparklinesText(props: SparklinesTextProps) {
  const { point, text, fontSize, fontFamily } = props;
  const { x, y } = point;
  return (
    <g>
      <text
        x={x}
        y={y}
        fontFamily={fontFamily || "Verdana"}
        fontSize={fontSize || 10}
      >
        {text}
      </text>
    </g>
  );
}
