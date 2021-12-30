import React, {Component} from "react";

import styles from "./Node.module.css";

export default class Node extends Component {
	constructor(props) {
		super(props);
		this.state = {
			node: props.node,
		};
	}

	handleMouseEnter(event) {
		if (event.buttons != 0) this.handleMouseClick();
	}

	handleMouseClick() {
		if (this.state.node.isStart || this.state.node.isFinish) return;

		let node = this.state.node;
		node.isWall = !node.isWall;

		this.setState({node: node});
	}

	render() {
		let classes = styles.node;

		if (this.state.node.isStart) classes += " " + styles["node-start"];
		else if (this.state.node.isFinish)
			classes += " " + styles["node-finish"];
		else if (this.state.node.isWall) classes += " " + styles["node-wall"];
		else if (this.state.node.inPath)
			classes += " " + styles["node-shortest-path"];
		else if (this.state.node.isVisited)
			classes += " " + styles["node-visited"];

		return (
			<div
				node={this.props.node}
				className={classes}
				onMouseEnter={(e) => this.handleMouseEnter(e)}
				onMouseDown={() => this.handleMouseClick()}
			></div>
		);
	}
}
