import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Sparklines,
  SparklinesBars,
  SparklinesCurve,
  SparklinesLine,
  SparklinesNormalBand,
  SparklinesReferenceLine,
  SparklinesSpots,
} from "../src/Sparklines";

function boxMullerRandom() {
  let phase = false;
  let x1 = 0;
  let x2 = 0;
  let w = 0;
  const z = 0;

  return (() => {
    const flippedPhase = !phase;
    phase = flippedPhase;
    if (flippedPhase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    }
    return x2 * w;
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(30);
const sampleData100 = randomData(100);

const Demo = () => {
  const [randomSample, setRandomSample] = useState<number[]>(randomData(30));
  useEffect(() => {
    const inter = setInterval(() => {
      setRandomSample(randomData(30));
    }, 1000);

    return () => {
      clearInterval(inter);
    };
  }, []);

  return (
    <>
      <header>
        <div className="content">
          <h1>React Sparklines</h1>
          <div id="headersparklines" />
        </div>
      </header>
      <div className="c2">
        <h3 className="content">
          Beautiful and expressive sparklines component for React
          <a
            className="button"
            href="https://github.com/borisyankov/react-sparklines"
          >
            View on GitHub
          </a>
        </h3>
      </div>
      <div className="c3">
        <div className="content">
          <div className="stack">
            <code>npm install --save react-sparklines-ts</code>
            <code>pnpm install --save react-sparklines-ts</code>
            <code>yarn add react-sparklines-ts</code>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>Simple</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine />
</Sparklines>`}
          </pre>
        </div>

        <h2>Simple Curve</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesCurve />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesCurve />
</Sparklines>`}
          </pre>
        </div>

        <h2>Customizable</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine color="#1c8cdc" />
            </Sparklines>
            <Sparklines data={sampleData}>
              <SparklinesLine color="#fa7e17" />
            </Sparklines>
            <Sparklines data={sampleData}>
              <SparklinesLine color="#ea485c" />
            </Sparklines>
            <Sparklines data={sampleData}>
              <SparklinesLine color="#56b45d" />
            </Sparklines>
            <Sparklines data={sampleData}>
              <SparklinesLine color="#8e44af" />
            </Sparklines>
            <Sparklines data={sampleData}>
              <SparklinesLine color="#253e56" />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine color="#253e56" />
</Sparklines>`}
          </pre>
        </div>

        <h2>Spots</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine style={{ fill: "none" }} />
              <SparklinesSpots />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine style={{ fill: "none" }} />
  <SparklinesSpots />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine color="#56b45d" />
              <SparklinesSpots style={{ fill: "#56b45d" }} />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
              <SparklinesLine color="#56b45d" />
              <SparklinesSpots style={{ fill: "#56b45d" }} />
            </Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData} margin={6}>
              <SparklinesLine
                style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }}
              />
              <SparklinesSpots
                size={4}
                style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData} margin={6}>
  <SparklinesLine
    style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }}
  />
  <SparklinesSpots
    size={4}
    style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }}
  />
</Sparklines>`}
          </pre>
        </div>

        <h2>Bounds</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData} max={0.5}>
              <SparklinesLine />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData} max={0.5}>
  <SparklinesLine />
</Sparklines>`}
          </pre>
        </div>

        <h2>Bars</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesBars style={{ fill: "#41c3f9" }} />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesBars style={{ fill: "#41c3f9" }} />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesBars
                style={{
                  stroke: "white",
                  fill: "#41c3f9",
                  fillOpacity: ".25",
                }}
              />
              <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesBars
    style={{
      stroke: "white",
      fill: "#41c3f9",
      fillOpacity: ".25",
    }}
  />
  <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
</Sparklines>`}
          </pre>
        </div>

        <h2>Dynamic</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={randomSample} limit={20}>
              <SparklinesLine color="#1c8cdc" />
              <SparklinesSpots />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={randomSample} limit={20}>
  <SparklinesLine color="#1c8cdc" />
  <SparklinesSpots />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={randomSample} limit={20}>
              <SparklinesBars style={{ fill: "#41c3f9", fillOpacity: ".25" }} />
              <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={randomSample} limit={20}>
  <SparklinesBars style={{ fill: "#41c3f9", fillOpacity: ".25" }} />
  <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={randomSample} limit={20}>
              <SparklinesLine
                style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={randomSample} limit={20}>
  <SparklinesLine
    style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }}
  />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={randomSample} limit={10}>
              <SparklinesBars color="#0a83d8" />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={randomSample} limit={10}>
  <SparklinesBars color="#0a83d8" />
</Sparklines>`}
          </pre>
        </div>

        <h2>Reference Line</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="max" />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine />
  <SparklinesReferenceLine type="max" />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="min" />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine />
  <SparklinesReferenceLine type="min" />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine />
  <SparklinesReferenceLine type="mean" />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine />
  <SparklinesReferenceLine type="avg" />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine />
              <SparklinesReferenceLine type="median" />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine />
  <SparklinesReferenceLine type="median" />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesBars
                style={{ fill: "slategray", fillOpacity: ".5" }}
              />
              <SparklinesReferenceLine />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesBars
    style={{ fill: "slategray", fillOpacity: ".5" }}
  />
  <SparklinesReferenceLine />
</Sparklines>`}
          </pre>
        </div>

        <h2>Normal Band</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine style={{ fill: "none" }} />
              <SparklinesNormalBand />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine style={{ fill: "none" }} />
  <SparklinesNormalBand />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine style={{ fill: "none" }} />
              <SparklinesNormalBand />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine style={{ fill: "none" }} />
  <SparklinesNormalBand />
  <SparklinesReferenceLine type="mean" />
</Sparklines>`}
          </pre>
        </div>

        <h2>Real world examples</h2>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesLine
                style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesLine
    style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }}
  />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData100} svgWidth={200}>
              <SparklinesLine style={{ stroke: "#2991c8", fill: "none" }} />
              <SparklinesSpots />
              <SparklinesNormalBand
                style={{ fill: "#2991c8", fillOpacity: 0.1 }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData100} svgWidth={200}>
  <SparklinesLine style={{ stroke: "#2991c8", fill: "none" }} />
  <SparklinesSpots />
  <SparklinesNormalBand
    style={{ fill: "#2991c8", fillOpacity: 0.1 }}
  />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData100}>
              <SparklinesLine style={{ stroke: "black", fill: "none" }} />
              <SparklinesSpots style={{ fill: "orange" }} />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData100}>
  <SparklinesLine style={{ stroke: "black", fill: "none" }} />
  <SparklinesSpots style={{ fill: "orange" }} />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData}>
              <SparklinesBars
                style={{ stroke: "white", strokeWidth: "1", fill: "#40c0f5" }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData}>
  <SparklinesBars
    style={{ stroke: "white", strokeWidth: "1", fill: "#40c0f5" }}
  />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData} height={80}>
              <SparklinesLine
                style={{ stroke: "#8ed53f", strokeWidth: "1", fill: "none" }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData} height={80}>
  <SparklinesLine
    style={{ stroke: "#8ed53f", strokeWidth: "1", fill: "none" }}
  />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData} height={80}>
              <SparklinesLine
                style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none" }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData} height={80}>
  <SparklinesLine
    style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none" }}
  />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines data={sampleData} height={40}>
              <SparklinesLine
                style={{
                  stroke: "#559500",
                  fill: "#8fc638",
                  fillOpacity: "1",
                }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines data={sampleData} height={40}>
  <SparklinesLine
    style={{
      stroke: "#559500",
      fill: "#8fc638",
      fillOpacity: "1",
    }}
  />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines
              data={sampleData}
              style={{ background: "#272727" }}
              margin={10}
              height={40}
            >
              <SparklinesLine
                style={{ stroke: "none", fill: "#d2673a", fillOpacity: ".5" }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines
  data={sampleData}
  style={{ background: "#272727" }}
  margin={10}
  height={40}
>
  <SparklinesLine
    style={{ stroke: "none", fill: "#d2673a", fillOpacity: ".5" }}
  />
</Sparklines>`}
          </pre>
        </div>

        <div className="row">
          <div className="stack">
            <Sparklines
              data={sampleData}
              style={{ background: "#00bdcc" }}
              margin={10}
              height={40}
            >
              <SparklinesLine style={{ stroke: "white", fill: "none" }} />
              <SparklinesReferenceLine
                style={{
                  stroke: "white",
                  strokeOpacity: 0.75,
                  strokeDasharray: "2, 2",
                }}
              />
            </Sparklines>
          </div>
          <pre className="prettyprint">
            {`<Sparklines
  data={sampleData}
  style={{ background: "#00bdcc" }}
  margin={10}
  height={40}
>
  <SparklinesLine style={{ stroke: "white", fill: "none" }} />
  <SparklinesReferenceLine
    style={{
      stroke: "white",
      strokeOpacity: 0.75,
      strokeDasharray: "2, 2",
    }}
  />
</Sparklines>`}
          </pre>
        </div>
      </div>
    </>
  );
};

const content = document.getElementById("content");
if (content) {
  const root = createRoot(content);
  root.render(<Demo />);
} else {
  console.log("No content found.");
}
