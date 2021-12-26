import {IoIosArrowDropdown} from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 10px 20px 10px 5px;

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 5px 10px 5px 5px;
	}
`;

export const Span = styled.span`
	font-size: 2rem;
`;

export const Div1 = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	flex-direction: row;
	align-content: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 1 / 1 / 2 / 3;
	}
`;
export const Div2 = styled.div`
	grid-area: 1 / 2 / 2 / 4;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		grid-area: 2 / 2 / 3 / 5;
	}
`;
export const Div3 = styled.div`
	grid-area: 1 / 5 / 2 / 6;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		align-items: center;
		grid-area: 1 / 4 / 2 / 6;
	}
`;

// Navigation Links
export const NavLink = styled.a`
	font-size: 2rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	&:hover {
		color: #fff;
		opacity: 1;
		cursor: pointer;
	}

	padding: 0px 20px 0px 20px;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0px 10px 0px 10px;
	}
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
	border: none;
	display: flex;
	position: relative;
	background: none;
	font-size: 1.7rem;

	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	cursor: pointer;
	transition: 0.3s ease;

	&:focus {
		outline: none;
	}
	&:hover {
		color: #fff;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.4rem 0;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 0;
	}
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
	margin-left: 8px;
	display: flex;
	align-self: center;
	transition: 0.3s ease;
	opacity: ${({isOpen}) => (isOpen ? "1" : ".75")};
	transform: ${({isOpen}) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

	&:hover {
		opacity: 1;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 2px 0 0 2px;
		width: 15px;
	}
`;

// Social Icons

export const SocialIcons = styled.a`
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding: 8px;
	&:hover {
		background-color: #212d45;
		transform: scale(1.2);
		cursor: pointer;
	}
`;
