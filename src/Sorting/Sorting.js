import React, {Component, Grid} from "react";
import Node from "./Node/Node";
import {START_LOCATION, END_LOCATION, createGrid, dijkstras} from './SortingAlgs';

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

		this.setState({grid: createGrid(20, numRows)});
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
			<div className={styles.main}>
				<div className={styles.grid}>
					{this.state.grid.map((row, i) => {
						return (
							<div key={i} className={styles["node-row"]}>
								{this.state.grid[i].map((node, j) => {
									return <Node key={j} node={node}></Node>;
								})}
							</div>
						);
					})}
				</div>

				<button onClick={() => this.runDijkstras()}>start</button>
			</div>
		);
	}
}
