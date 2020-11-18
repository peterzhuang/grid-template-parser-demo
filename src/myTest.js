import {grid} from '../dist/grid-template-parser'

const areas = grid(`
  "a a a b b"
  "a a a b b"
  ". . c c c"
  "d d d d d"
`);

console.log(`areas ${JSON.stringify(areas)}`)