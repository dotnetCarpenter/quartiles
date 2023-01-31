quartiles
=========

## Usage

From the Command Line:

```
$ quartiles "{15,7,9,6,1,8,2,9,12,1}"
{ M: 7.5, Q1: 2, Q3: 9 }
```

In code:

```js
const { quartiles } = require("quartiles")

const list = [15,7,9,6,1,8,2,9,12,1]

const { M, Q1, Q2 } = quartiles(list)
M  // 7.5
Q1 // 2
Q3 // 9
```

## Installation

```
npm install --global https://github.com/dotnetCarpenter/quartiles.git
```
