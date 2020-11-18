import { track } from "./primitives";
const sep = /['"]\s*['"]?/g;
const ws = /\s+/g;
const cleanTpl = (t) => t.trim().slice(1, -1);
const cleanLine = (l) => l.replace(ws, " ").trim();
const getTpl = (t) => cleanTpl(t).split(sep);
const getRow = (l) => cleanLine(l).split(" ");
const reduceLines = (acc, line, r) => {
    if (line.trim() !== "") {
        getRow(line).forEach((area, c) => {
            if (area !== ".") {
                if (typeof acc[area] === "undefined") {
                    acc[area] = {
                        column: track(c + 1, c + 2),
                        row: track(r + 1, r + 2),
                    };
                }
                else {
                    const { column, row } = acc[area];
                    column.start = Math.min(column.start, c + 1);
                    column.end = Math.max(column.end, c + 2);
                    column.span = column.end - column.start;
                    row.start = Math.min(row.start, r + 1);
                    row.end = Math.max(row.end, r + 2);
                    row.span = row.end - row.start;
                }
            }
        });
    }
    return acc;
};
export const grid = (tpl) => {
    const lines = getTpl(tpl);
    const width = getRow(lines[0]).length;
    const height = lines.length;
    const areas = lines.reduce(reduceLines, {});
    return { width, height, areas };
};