import React, {Component, Grid} from "react";
import Node from "./Node/Node";

import styles from "./Sorting.module.css";

const START_LOCATION = [0, 0];
const END_LOCATION = [19, 19];

export default class Sorting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			grid: [],
		};
		this.reachedEnd = false;
		this.foundPath = false;
		this.current;
	}

	componentDidMount() {
		this.setState({grid: createGrid(20, 20)});
	}

	runDijkstras() {
		if (!this.reachedEnd) {
			let done = dijkstras(this.state.grid);
			this.setState({grid: this.state.grid});
			if (!done) setTimeout(() => this.runDijkstras(), 100);
			else {
				if (done == "no solution") console.log(done);
				else {
					this.reachedEnd = true;
					setTimeout(() => this.runDijkstras(), 100);
				}
			}
		} else if (!this.foundPath) {
			if (!this.current)
				this.current =
					this.state.grid[END_LOCATION[0]][END_LOCATION[1]];
			this.current.inPath = true;
			this.current = this.current.parent;

			this.setState({grid: this.state.grid});
			if (!this.current.isStart)
				setTimeout(() => this.runDijkstras(), 100);
			else this.foundPath = true;
		}
	}

	render() {
		return (
			<div className={styles.grid}>
				{this.state.grid.map((row, i) => {
					console.log(styles['node-row'])
					return (
						<div key={i} className={styles['node-row']}>
							{this.state.grid[i].map((node, j) => {
								return <Node key={j} node={node}></Node>;
							})}
						</div>
					);
				})}

				<button onClick={() => this.runDijkstras()}>start</button>
			</div>
		);
	}
}

var unvisited = new Set();
function createGrid(rows, cols) {
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
