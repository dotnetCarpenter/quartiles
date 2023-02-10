quartiles
=========

The median, quartiles and outliers of ungrouped data (discrete data).

![Image of boxplot with outliers, min, Q1, Median, Q3, Max, interquartile range and range.](boxplot.jpg)

## Globally

From the Command Line

```
$ quartiles "{15,7,9,6,1,8,2,9,12,1,-12}"
{
  min: -12,
  Q1: 1,
  M: 7,
  Q3: 9,
  max: 15,
  range: 27,
  interquartileRange: 8,
  outliers: [ -12 ]
}
```

### Installation

```
npm install --global https://github.com/dotnetCarpenter/quartiles.git
```

_or_

## In your project

In code

```js
import { quartiles, median, mean } from "quartiles"

const list = [15,7,9,6,1,8,2,9,12,1,-12]

const { min, M, Q1, Q3, max } = quartiles(list)
const quartileSet = [Q1, M, Q3] // (7 ; 1 ; 9)
const

const { min, max } = quartiles(list)
const expandedQuartileSet = [min, Q1, M, Q3, max]

median(list) // <- 7

mean(list)   // <- 5.2727272727272725
```

### Installation

```
npm install https://github.com/dotnetCarpenter/quartiles.git
```
