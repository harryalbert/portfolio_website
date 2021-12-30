import React, {Component} from "react";

import styles from "./Button.module.css";

const styleAssociations = {
	start: styles.startButton,
	clear: styles.clearButton,
};

export default class Button extends Component {
	constructor(props) {
		super(props);

		this.style = styleAssociations[props.styleId];
		if (this.style == null) this.style = styleAssociations["start"];
	}

	render() {
		return (
			<button
				id={this.style}
				className={styles.button}
				onClick={this.props.onClick}
			>
				<h2>{this.props.styleId}</h2>
			</button>
		);
	}
}
