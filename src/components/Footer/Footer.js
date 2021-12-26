import React from "react";
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";

import {SocialIcons} from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Phone Number</LinkTitle>
					<LinkItem href="tel:413-770-6129">(413) 770-6129</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:harryalbert364@gmail.com">
						harryalbert364@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Turning my hobby into my career</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/harryalbert/">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/harry-albert/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
