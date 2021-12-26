import React from "react";

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {projects} from "../../constants/constants";

const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main style={{paddingTop: "20px"}}>
			Projects
		</SectionTitle>
		<GridContainer>
			{projects.map(({id, image, title, description, tags}) => (
				<BlogCard key={id}>
					<img
						src={image}
						style={{maxWidth: "100%", maxHeight: "100%"}}
					/>
					<TitleContent>
						<HeaderThree title={title}>{title}</HeaderThree>
						<Hr />
					</TitleContent>
					<CardInfo>{description}</CardInfo>
					<br />
					<div>
						<TitleContent style={{color: "#9cc9e3"}}>
							Stack
						</TitleContent>
						<TagList>
							{tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</TagList>
					</div>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Projects;
