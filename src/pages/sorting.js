import React from "react";
import dynamic from "next/dynamic";
import {SectionTitle} from "../styles/GlobalComponents";

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
	ssr: false,
});

let x = 50;
let y = 50;

const p5 = (props) => {
	const setup = (p5, canvasParentRef) => {
		let size =
			window.innerWidth > window.innerHeight
				? window.innerHeight
				: window.innerWidth;
		size -= 100;
		p5.createCanvas(size, size).parent(canvasParentRef);
	};

	const windowResized = (p5) => {
		console.log('hi');
		let size =
			window.innerWidth > window.innerHeight
				? window.innerHeight
				: window.innerWidth;
		size -= 100;
		p5.resizeCanvas(size, size);
	};

	const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		x++;
	};

	// Will only render on client-side
	return (
		<div
			style={{
				display: "flex",
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				flow: "column",
			}}
		>
			<SectionTitle main center style={{margin: "10px", padding: "0px"}}>
				{" "}
				Sorting{" "}
			</SectionTitle>
			<Sketch setup={setup} draw={draw} windowResized={windowResized}/>
		</div>
	);
};

export default p5;
