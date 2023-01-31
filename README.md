quartiles
=========

## Globally

From the Command Line

```
$ quartiles "{15,7,9,6,1,8,2,9,12,1}"
{ M: 7.5, Q1: 2, Q3: 9 }
```

### Installation

```
npm install --global https://github.com/dotnetCarpenter/quartiles.git
```

_or_

## In your project

In code

```js
const { quartiles, median } = require("quartiles")

const list = [15,7,9,6,1,8,2,9,12,1]

const { M, Q1, Q3 } = quartiles(list)
M  // 7.5
Q1 // 2
Q3 // 9

const m = median (list)
m  // 7.5
```

### Installation

```
npm install https://github.com/dotnetCarpenter/quartiles.git
```
