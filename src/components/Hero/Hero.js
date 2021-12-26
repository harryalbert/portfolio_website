import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {LeftSection} from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcom to <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionText>
				The purpose of Javascript Mastery is to help aspiring and
				established developers to master web developement and to build
				awesome apps
			</SectionText>
			<Button
				onClick={() => {
					window.location = "https://google.com";
				}}
			>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
