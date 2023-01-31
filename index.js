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

/**
 * outliers: extreme observations.
 * Data points that are more than 1.5 times away from the interquartile range.
 * @param {number} interquartileRange
 * @param {number[]} list
 */
function outliers (Q1, Q3, interquartileRange, list) {
	const quartileDistance = interquartileRange * 1.5
	const min = Q1 - quartileDistance
	const max = Q3 + quartileDistance
	// console.debug ("quartileDistance", min, max)

	return list.filter (n => n < min || n > max)
}

/** @param {number[]} list */
function quartiles (list) {
	list.sort (ascending)

	const min = list[0] // Math.min.apply (Math, list)
	const max = list[list.length - 1] // Math.max.apply (Math, list)

	// variationsbredde AKA range
	const range = max - min

	const M  = median (list)
	const Q1 = median (list.filter (x => x < M))
	const Q3 = median (list.filter (x => x > M))

	// interquartile range AKA kvartilafstand = Q3 - Q1
	const interquartileRange = Q3 - Q1

	return {
		min,
		Q1,
		M,
		Q3,
		max,
		range,
		interquartileRange,
		outliers: outliers(Q1, Q3, interquartileRange, list)
	}
}

module.exports.median = median
module.exports.quartiles = quartiles
