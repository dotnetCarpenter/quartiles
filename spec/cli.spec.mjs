import { exec } from "node:child_process"
import { expect } from "vitest"
import { quartilesTests } from "./quartilesTests.mjs"

quartilesTests ("quartiles {$list} -> $expected", ({ list, expected }) => {
	exec (
		`quartiles ${JSON.stringify (list).replace (/\[(.*)\]/, "{$1}")}`,
		(error, stdout, stderr) => {
			if (error) console.error (error)

			expect (stdout).toBe (JSON.stringify (expected))
		})
})
