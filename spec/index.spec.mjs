import { expect, test } from "vitest"
import { quartiles, median } from "../index.js"
import { quartilesTests } from "./quartilesTests.mjs"

quartilesTests ("quartiles ($list) -> $expected", ({ list, expected }) => {
	expect (quartiles (list)).toStrictEqual (expected)
})

test ("median ([4, 8, 11, 14, 15]) should give 11", () => {
	expect (median ([4, 8, 11, 14, 15])).toBe (11)
})
