"use strict"

import { expect, test } from "vitest"
import { quartiles, median } from "../index.js"

const quartilesTests = test.each([
	// M: (6+7)/2 = 6.5, Q1: (1+3)/2 = 2, Q3: (11+12)/2 = 11.5
	{
		list: [1, 1, 3, 6, 7, 11, 12, 15],
		expected: {
			Q1: 2,
			M: 6.5,
			Q3: 11.5,
			min: 1,
			max: 15,
			interquartileRange: 9.5,
			range: 14,
			outliers: []
		}
	},
	// M: 11, Q1: (4+8)/2 = 6, Q3: (14+15)/2 = 14.5
	{
		list: [4, 8, 11, 14, 15],
		expected: {
			Q1: 6,
			M: 11,
			Q3: 14.5,
			min: 4,
			max: 15,
			interquartileRange: 8.5,
			range: 11,
			outliers: []
		}
	},
	{
		list: [15,7,9,6,1,8,2,9,12,1,-12],
		expected: {
			Q1: 1,
			M: 7,
			Q3: 9,
			min: -12,
			max: 15,
			interquartileRange: 8,
			range: 27,
			outliers: [-12]
		}
	},
])

quartilesTests ("quartiles ($list) -> $expected", ({ list, expected }) => {
	expect (quartiles (list)).toStrictEqual (expected)
})

test ("median ([4, 8, 11, 14, 15]) should give 11", () => {
	expect (median ([4, 8, 11, 14, 15])).toBe (11)
})
