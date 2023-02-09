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

function add (a, b) {
	return a + b
}

function sum (list) {
	return list.reduce (add, 0)
}

function mean (list) {
	return sum (list) / list.length
}

/** @param {number[]} list */
const median = list => {
	const index = list.length / 2

	// console.debug ("list", list, "length", list.length, "index", index)

	if (list.length % 2 === 0) return mean (list.slice (index - 1, index + 1))
	else return list[index|0]
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

	const index = list.length / 2
	const M = median (list)
	const Q1 = median (list.slice (0, index))
	const Q3 = median (list.slice (Math.ceil (index)))

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

export { median, quartiles }
