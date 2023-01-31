#!/usr/bin/env node
"use strict"

const { quartiles } = require ("./index.js")

const validList = /^\{((?:\d+,?)+)\}$/

let list = validList.exec (process.argv.slice (2).join (""))

if (list) {
	list = list[1].split(",")
	list = list.map (Number)

	// console.debug (list)
	console.log (quartiles (list))

	process.exit (0)
}

process.exit (1)
