import Head from "next/head";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import {Layout} from "../layout/Layout";
import {Section} from "../styles/GlobalComponents";

const Home = () => {
	return (
		<div style={{overflowX: 'hidden'}}>
			<Head>
				<title>Harry Albert - Portfolio</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Layout>
				<Section grid>
					<Hero />
					<BgAnimation />
				</Section>
				<Projects />
				<Technologies />
				<Timeline />
			</Layout>
		</div>
	);
};

export default Home;
