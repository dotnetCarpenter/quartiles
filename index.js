// @ts-check
"use strict"

/**
 * @param {number} a
 * @param {number} b
 */
function ascending (a, b) {
	return a < b
		? -1
		: a > b
			? 1
			: 0
}

/** @param {number[]} list */
function median (list) {
	// integer or integer + 0.5 (if even)
	const index = (list.length + 1) / 2 - 1 // - 1 because an array is zero indexed
	const m = (list [Math.floor (index)] + list [Math.ceil (index)]) / 2

	return m
}

/** @param {number[]} list */
function quartiles (list) {
	list.sort (ascending)

	const M = median (list)
	const Q1 = median (list.filter (x => x < M))
	const Q3 = median (list.filter (x => x > M))

	return { M, Q1, Q3 }
}

module.exports.median = median
module.exports.quartiles = quartiles

// TEST
// console.log (
// 	quartiles ([1, 1, 3, 6, 7, 11, 12, 15]), // M: (6+7)/2 = 6.5, Q1: (1+3)/2 = 2, Q3: (11+12)/2 = 11.5

// 	quartiles ([4, 8, 11, 14, 15]) // M: 11, Q1: (4+8)/2 = 6, Q3: (14+15)/2 = 14.5
// )
