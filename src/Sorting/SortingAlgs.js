var START_LOCATION = [0, 0];
var END_LOCATION;

var unvisited = new Set();
function createGrid(rows, cols) {
	END_LOCATION = [rows - 1, cols - 1];

	const grid = [];

	for (let i = 0; i < rows; i++) {
		const row = [];
		for (let j = 0; j < cols; j++) {
			let node = {
				y: i,
				x: j,
				isWall: false,
				isVisited: false,
				distance: Infinity,
				isStart: i == START_LOCATION[0] && j == START_LOCATION[1],
				isFinish: i == END_LOCATION[0] && j == END_LOCATION[1],
				inPath: false,
				parent: null,
			};

			if (node.isStart) node.distance = 0;

			unvisited.add(node);
			row.push(node);
		}
		grid.push(row);
	}

	return grid;
}

function dijkstras(grid) {
	let current = null;
	let min = Infinity;

	for (let node of unvisited) {
		if (node.distance < min) {
			current = node;
			min = current.distance;
		}
	}

	if (current == null) return "no solution";
	if (current.isFinish) return current;

	for (let i = -1; i <= 1; i += 2) {
		let useX = true,
			useY = true;

		let nY = current.y + i;
		if (nY < 0 || nY >= grid.length) useY = false;

		let nX = current.x + i;
		if (nX < 0 || nX >= grid[current.y].length) useX = false;

		let dests = [];
		if (useX) dests.push([current.y, nX]);
		if (useY) dests.push([nY, current.x]);

		for (let dest of dests) {
			let node = grid[dest[0]][dest[1]];
			if (node.isWall) continue;

			let newDist = 1 + current.distance;

			if (newDist < node.distance) {
				node.parent = current;
				node.distance = newDist;
			}
		}
	}

	current.isVisited = true;
	unvisited.delete(current);
}

export {START_LOCATION, END_LOCATION, createGrid, dijkstras};
