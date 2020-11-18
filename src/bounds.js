
const find = (fn, direction, extremum, { areas }) => fn(...Object.keys(areas).map(cell => areas[cell][direction][extremum]));
export const minColumnStart = (grid) => find(Math.min, "column", "start", grid);
export const maxColumnStart = (grid) => find(Math.max, "column", "start", grid);
export const minRowStart = (grid) => find(Math.min, "row", "start", grid);
export const maxRowStart = (grid) => find(Math.max, "row", "start", grid);
export const minColumnEnd = (grid) => find(Math.min, "column", "end", grid);
export const maxColumnEnd = (grid) => find(Math.max, "column", "end", grid);
export const minRowEnd = (grid) => find(Math.min, "row", "end", grid);
export const maxRowEnd = (grid) => find(Math.max, "row", "end", grid);
