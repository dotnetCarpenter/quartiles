"use strict"

function ascending (a, b) {
	return a < b
		? -1
		: a > b
			? 1
			: 0
}

function getMedianIndex (list) {
	// median = (n + 1) / 2
	return Math.round ((list.length + 1) / 2 - 1) // - 1 because array index start at 0
}

function median (list) {
	const medianIndex = getMedianIndex (list)
	const isEven = list.length % 2 === 0

	console.debug (list, medianIndex, isEven)

	return isEven
		? (list[medianIndex - 1] + list[medianIndex]) / 2
		: list[Math.floor (medianIndex)]
}

function quartiles (list) {
	list.sort (ascending)

	const medianIndex = getMedianIndex (list)

	const M = median (list)

	const Q1 = median (list.slice (0, medianIndex))

	const Q3 = median (list.slice (medianIndex))

	return { M, Q1, Q3 }
}

console.log (
	quartiles ([1, 1, 3, 6, 7, 11, 12, 15]), // M: (6+7)/2 = 6.5, Q1: (1+3)/2 = 2, Q3: (11+12)/2 = 11.5

	quartiles ([4, 8, 11, 14, 15]) // M: 11, Q1: (4+8)/2 = 6, Q3: (14+15)/2 = 14.5
)
