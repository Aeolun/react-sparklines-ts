# Beautiful and expressive sparklines component for React

> [!NOTE]
> I really wanted to use `react-sparklines`, but using something that was last released 7 years ago didn't feel so good (and I didn't want separate typescript types!), so I rewrote it based on the original.

[![Build Status](https://mycoverage.se1.serial-experiments.com/aeolun/react-sparklines-ts.svg?branch=main)](https://mycoverage.se1.serial-experiments.com/aeolun/react-sparklines-ts)

Live demos and docs: [aeolun.github.io/react-sparklines-ts/](https://aeolun.github.io/react-sparklines-ts/)

![](http://borisyankov.github.io/react-sparklines/img/dynamic.gif)

## Install

```bash
# pnpm
pnpm add react-sparklines
```

```bash
# yarn
yarn add react-sparklines
```

```bash
# npm
npm install react-sparklines --save
```

## Run demo

```
pnpm install
pnpm start
http://localhost:3000
```

## Use

Import the Sparklines components that you need; for example to generate a simple chart:

![](http://borisyankov.github.io/react-sparklines/img/basic.png)

```
import React from 'react';
import { Sparklines } from 'react-sparklines-ts';
...
<Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
</Sparklines>
```

Sparklines component is a container with the following properties:

`data` - the data set used to build the sparkline

`limit` - optional, how many data points to display at once

`width`, `height` - dimensions of the generated sparkline in the SVG viewbox. This will be automatically scaled (i.e. responsive) inside the parent container by default.

`svgWidth`, `svgHeight` - If you want absolute dimensions instead of a responsive component set these attributes.

[preserveAspectRatio](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) - default: 'none', set this to modify how the sparkline should scale

`margin` - optional, offset the chart

`min`, `max` - optional, bound the chart

#### Basic Sparkline

![](http://borisyankov.github.io/react-sparklines/img/customizable.png)

```
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
...
<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesLine color="blue" />
</Sparklines>
```

#### Bars

![](http://borisyankov.github.io/react-sparklines/img/bars.png)

```
import React from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';
...
<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesBars />
</Sparklines>
```

#### Spots

![](http://borisyankov.github.io/react-sparklines/img/spots.png)

```
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
...
<Sparklines data={sampleData}>
    <SparklinesLine style={{ fill: "none" }} />
    <SparklinesSpots />
</Sparklines>
```

#### Reference Line

![](http://borisyankov.github.io/react-sparklines/img/referenceline.png)

```
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
...
<Sparklines data={sampleData}>
    <SparklinesLine />
    <SparklinesReferenceLine type="mean" />
</Sparklines>
```

#### Normal Band

![](http://borisyankov.github.io/react-sparklines/img/normalband.png)

```
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesNormalBand } from 'react-sparklines';
...
<Sparklines data={sampleData}>
    <SparklinesLine style={{ fill: "none" }}/>
    <SparklinesNormalBand />
</Sparklines>
```
