export function getWinningLines(gridSize: number): number[][] {
  const lines: number[][] = [];

  // Rows
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(i * gridSize + j);
    }
    lines.push(row);
  }

  // Columns
  for (let i = 0; i < gridSize; i++) {
    const col = [];
    for (let j = 0; j < gridSize; j++) {
      col.push(j * gridSize + i);
    }
    lines.push(col);
  }

  // Diagonal TL → BR
  const diag1 = [];
  for (let i = 0; i < gridSize; i++) {
    diag1.push(i * gridSize + i);
  }
  lines.push(diag1);

  // Diagonal TR → BL
  const diag2 = [];
  for (let i = 0; i < gridSize; i++) {
    diag2.push(i * gridSize + (gridSize - 1 - i));
  }
  lines.push(diag2);

  return lines;
}
