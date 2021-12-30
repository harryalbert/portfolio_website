import React, {Component} from "react";
import Head from "next/head";
import Node from "./Node/Node";
import Button from "./Topbar/Button";
import {END_LOCATION, createGrid, dijkstras, unvisited} from "./SortingAlgs";

import styles from "./Sorting.module.css";

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
		let numRows = Math.round(window.innerWidth / 25) - 1;
		let numCols = Math.round((window.innerHeight - 50) / 25) - 1;

		this.setState({grid: createGrid(numCols, numRows)});
	}

	reset(clearWalls) {
		unvisited.clear();

		for (let i = 0; i < this.state.grid.length; i++) {
			for (let j = 0; j < this.state.grid[0].length; j++) {
				let node = this.state.grid[i][j];
				if (clearWalls) node.isWall = false;
				node.isVisited = false;
				node.inPath = false;
				node.parent = null;
				node.distance = node.isStart ? 0 : Infinity;

				unvisited.add(node);
			}
		}

		this.reachedEnd = false;
		this.foundPath = false;
		this.current = null;

		this.setState({grid: this.state.grid});
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
			<div>
				<Head>
					<title>Pathfinding Visualizer</title>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
				</Head>
				<div className={styles.main}>
					<div className={styles.topBar}>
						<h1 style={{margin: 0}}>sorting</h1>
						<Button
							styleId="start"
							onClick={() => {
								this.reset(false);
								this.runDijkstras();
							}}
						></Button>
						<div style={{height: "100%"}}>
							<Button
								styleId="clear"
								onClick={() => this.reset(true)}
							></Button>
							<Button
								styleId="clear"
								onClick={() => this.reset(false)}
							></Button>
						</div>
					</div>

					<div className={styles.grid}>
						{this.state.grid.map((row, i) => {
							return (
								<div key={i} className={styles["node-row"]}>
									{this.state.grid[i].map((node, j) => {
										return (
											<Node key={j} node={node}></Node>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
