import Link from "next/link";
import React from "react";
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {DiCssdeck} from "react-icons/di";

import {
	Container,
	Div3,
	SocialIcons,
	Span,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Link href="/">
			<a
				style={{
					display: "flex",
					alignItems: "center",
					color: "white",
				}}
			>
				<DiCssdeck size="3rem" /> <Span>Harry Albert</Span>
			</a>
		</Link>
		<Div3>
			<SocialIcons href="https://github.com/harryalbert/">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://www.linkedin.com/in/harry-albert/">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
