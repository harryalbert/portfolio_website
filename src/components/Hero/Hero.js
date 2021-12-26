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
				Hi, I'm Harry
			</SectionTitle>
			<SectionText>
				I'm a full stack developer with experience in both
				self-contained and business facing products. I am experienced in
				ground-up web app creation, file system automation, and the
				creation of user friendly GUIs.
			</SectionText>
			<Button
				onClick={() => {
					window.open(
						"https://docs.google.com/document/d/1KBKhfhXGTRS6oN-9CNNfIrmXoF71Iot0uX49G1jy394/edit?usp=sharing"
					);
				}}
			>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
