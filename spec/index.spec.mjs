import { expect, test } from "vitest"
import { quartiles, median, mean } from "../index.js"
import { quartilesTests } from "./quartilesTests.mjs"

quartilesTests ("quartiles ($list) -> $expected", ({ list, expected }) => {
	expect (quartiles (list)).toStrictEqual (expected)
})

test ("median ([4, 8, 11, 14, 15]) should give 11", () => {
	expect (median ([4, 8, 11, 14, 15])).toBe (11)
})

test ("mean ([4, 8, 11, 14, 15]) -> 10,4", () => {
	expect (mean ([4, 8, 11, 14, 15])).toBe (10.4)
})

test ("mean ([15,7,9,6,1,8,2,9,12,1,-12]) -> 5,2727272727272725", () => {
	expect (mean ([15,7,9,6,1,8,2,9,12,1,-12])).toBe (5.2727272727272725)
})

