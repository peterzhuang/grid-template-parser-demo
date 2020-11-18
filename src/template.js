const matchingArea = (areas, row, column) => (area) => areas[area].row.start <= row + 1 &&
    areas[area].row.end > row + 1 &&
    areas[area].column.start <= column + 1 &&
    areas[area].column.end > column + 1;
const getColumns = (areas, grid, row, current = 0, cols = "") => {
    const area = areas.find(matchingArea(grid.areas, row, current));
    cols += typeof area === "string" ? area : ".";
    if (current < grid.width - 1) {
        return getColumns(areas, grid, row, current + 1, `${cols} `);
    }
    return cols;
};
const getRows = (areas, grid, current = 0, rows = "") => {
    rows += `"${getColumns(areas, grid, current)}"`;
    if (current < grid.height - 1) {
        return getRows(areas, grid, current + 1, `${rows}\n`);
    }
    return rows;
};
export const template = (grid) => getRows(Object.keys(grid.areas), grid);
