import React, { PureComponent } from "react";
import SparklinesBars from "./SparklinesBars";
import SparklinesCurve from "./SparklinesCurve";
import SparklinesLine from "./SparklinesLine";
import SparklinesNormalBand from "./SparklinesNormalBand";
import SparklinesReferenceLine from "./SparklinesReferenceLine";
import SparklinesSpots from "./SparklinesSpots";
import SparklinesText from "./SparklinesText";
import { dataToPoints } from "./dataProcessing/dataToPoints";
class Sparklines extends PureComponent {
  static defaultProps = {
    data: [],
    width: 240,
    height: 60,
    //Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle.
    preserveAspectRatio: "none", //https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
    margin: 2,
  };
  render() {
    const {
      data,
      limit,
      width,
      height,
      svgWidth,
      svgHeight,
      preserveAspectRatio,
      margin,
      style,
      max,
      min,
    } = this.props;
    if (data.length === 0) return null;
    const points = dataToPoints({
      data,
      limit,
      width,
      height,
      margin,
      max,
      min,
    });
    const svgOpts = {
      style: style,
      viewBox: `0 0 ${width} ${height}`,
      preserveAspectRatio: preserveAspectRatio,
    };
    if (svgWidth && svgWidth > 0) svgOpts.width = svgWidth;
    if (svgHeight && svgHeight > 0) svgOpts.height = svgHeight;
    return React.createElement(
      "svg",
      { ...svgOpts },
      React.Children.map(this.props.children, (child) =>
        React.cloneElement(child, {
          data,
          points,
          width,
          height,
          margin,
        }),
      ),
    );
  }
}
export {
  Sparklines,
  SparklinesLine,
  SparklinesCurve,
  SparklinesBars,
  SparklinesSpots,
  SparklinesReferenceLine,
  SparklinesNormalBand,
  SparklinesText,
};
