"use strict";

var _gridTemplateParser = require("../dist/grid-template-parser");

var areas = (0, _gridTemplateParser.grid)("\n  \"a a a b b\"\n  \"a a a b b\"\n  \". . c c c\"\n  \"d d d d d\"\n");
console.log("areas ".concat(JSON.stringify(areas)));