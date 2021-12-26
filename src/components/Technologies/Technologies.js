import React from "react";
import {DiFirebase, DiReact} from "react-icons/di";
import {FiFigma} from "react-icons/fi";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
    <br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of technologies in the web developement
			world from back-end to design
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front End</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FiFigma size="2rem" />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						tools like Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
