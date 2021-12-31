
var START_LOCATION;
var END_LOCATION;

var unvisited = new Set();
function createGrid(rows, cols) {
	let mid = Math.round((rows - 1) / 2);

	START_LOCATION = [mid, Math.round(cols / 4)];
	END_LOCATION = [mid, cols - 2];

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

function getNeighbors(node, grid) {
	let neighbors = [];
	for (let i = -1; i <= 1; i += 2) {
		let nY = node.y + i;
		if (nY >= 0 && nY < grid.length) neighbors.push([nY, node.x]);

		let nX = node.x + i;
		if (nX >= 0 && nX < grid[node.y].length) neighbors.push([node.y, nX]);
	}

	return neighbors;
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

	for (let dest of getNeighbors(current, grid)) {
		let node = grid[dest[0]][dest[1]];
		if (node.isWall) continue;

		let newDist = 1 + current.distance;

		if (newDist < node.distance) {
			node.parent = current;
			node.distance = newDist;
		}
	}

	current.isVisited = true;
	unvisited.delete(current);
}

function fastDijkstras(grid) {
	let currents = [];

	for (let node of unvisited) {
		if (node.distance < Infinity) {
			currents.push(node);
		}
	}

	for (let current of currents) {
		if (current == null) return "no solution";
		if (current.isFinish) return current;

		for (let dest of getNeighbors(current, grid)) {
			let node = grid[dest[0]][dest[1]];
			if (node.isWall) continue;

			let newDist = 1 + current.distance;

			if (newDist < node.distance) {
				node.parent = current;
				node.distance = newDist;
			}
		}

		current.isVisited = true;
		unvisited.delete(current);
	}
}

export {
	START_LOCATION,
	END_LOCATION,
	createGrid,
	dijkstras,
	fastDijkstras,
	unvisited,
	getNeighbors,
};
