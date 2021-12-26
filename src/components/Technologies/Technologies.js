import React from "react";
import {DiFirebase, DiReact, DiPython} from "react-icons/di";
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
			I've worked with a range of technologies in the web development
			world from back-end to design
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front End</ListTitle>
					<ListParagraph>
						Experience with: React.js, Flutter, React Native, and
						Tkinter
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back End</ListTitle>
					<ListParagraph>
						Experience with: Node.js, Express.js, Firebase, MongoDB
						Atlas, and AWS S3
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiPython size="3rem" />
				<ListContainer>
					<ListTitle>Languages</ListTitle>
					<ListParagraph>
						Comfortable with: Python, Java, JavaScript, and HTML +
						CSS
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
