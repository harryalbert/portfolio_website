import { START_LOCATION, END_LOCATION, getNeighbors } from "./PathfindingAlgs";

function createMaze(grid) {
	for (let i = 0; i < grid.length; i++){
		for (let j = 0; j < grid.length; j++) {
			grid[i][j].isWall = true;
		}
	}
}

export {createMaze};