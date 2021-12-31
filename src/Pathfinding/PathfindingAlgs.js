class PathfindingAlgs {
	constructor() {
		this.START_LOCATION = null;
		this.END_LOCATION = null;
		this.unvisited = new Set();
	}

	createGrid(rows, cols) {
		let mid = Math.round((rows - 1) / 2);

		this.START_LOCATION = [mid, Math.round(cols / 4)];
		this.END_LOCATION = [mid, cols - 2];
	
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
					isStart: i == this.START_LOCATION[0] && j == this.START_LOCATION[1],
					isFinish: i == this.END_LOCATION[0] && j == this.END_LOCATION[1],
					inPath: false,
					parent: null,
				};
	
				if (node.isStart) node.distance = 0;
	
				this.unvisited.add(node);
				row.push(node);
			}
			grid.push(row);
		}
	
		this.grid = grid;
		return grid;
	}

	static getNeighbors(node, grid) {
		let neighbors = [];
		for (let i = -1; i <= 1; i += 2) {
			let nY = node.y + i;
			if (nY >= 0 && nY < grid.length) neighbors.push([nY, node.x]);
	
			let nX = node.x + i;
			if (nX >= 0 && nX < grid[node.y].length) neighbors.push([node.y, nX]);
		}
	
		return neighbors;
	}

	dijkstras(){
		let current = null;
		let min = Infinity;
	
		for (let node of this.unvisited) {
			if (node.distance < min) {
				current = node;
				min = current.distance;
			}
		}
	
		if (current == null) return "no solution";
		if (current.isFinish) return current;
	
		for (let dest of PathfindingAlgs.getNeighbors(current, this.grid)) {
			let node = this.grid[dest[0]][dest[1]];
			if (node.isWall) continue;
	
			let newDist = 1 + current.distance;
	
			if (newDist < node.distance) {
				node.parent = current;
				node.distance = newDist;
			}
		}
	
		current.isVisited = true;
		this.unvisited.delete(current);
	}

	fastDijkstras() {
		let currents = [];

		for (let node of this.unvisited) {
			if (node.distance < Infinity) {
				currents.push(node);
			}
		}

		if (currents.length == 0) return "no solution";
	
		for (let current of currents) {
			if (current == null) return "no solution";
			if (current.isFinish) return current;
	
			for (let dest of PathfindingAlgs.getNeighbors(current, this.grid)) {
				let node = this.grid[dest[0]][dest[1]];
				if (node.isWall) continue;
	
				let newDist = 1 + current.distance;
	
				if (newDist < node.distance) {
					node.parent = current;
					node.distance = newDist;
				}
			}
	
			current.isVisited = true;
			this.unvisited.delete(current);
		}
	}
}

export default PathfindingAlgs;