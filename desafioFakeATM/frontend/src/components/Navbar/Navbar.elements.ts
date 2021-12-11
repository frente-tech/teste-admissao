import styled from "styled-components";
//assets page
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";
//global assets
import { Container } from "../../globalStyles";

//interfaces Props
interface NavProps {
  background: string;
  height: string;
  display: string;
  justifyContent: string;
  alignItems: string;
  fontSize: string;
  position: string;
  top: string;
  zIndex: string;
}

interface NavContainer {
  display: string;
  height: string;
}

interface NavLogoProps {
  color: string;
  fontSize: string;
}
interface NavMenuProps {
  click: boolean;
  widthMobileScreen: string;
  heightMobileScreen: string;
  topMobileScreen: string;
}
interface NavLinksProps {
  color: string;
  height: string;
}
interface NavBtnLinkProps {
  padding: string;
  height: string;
  width: string;
}
interface NavItemBtnProps {
  widthMobileScreen: string;
  heightMobileScreen: string;
}

export const Nav = styled.nav<NavProps>`
  background: ${(props) => props.background};
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  font-size: ${(props) => props.fontSize};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  z-index: ${(props) => props.zIndex};
`;

export const NavbarContainer = styled(Container)<NavContainer>`
  display: ${(props) => props.display};
  justify-content: space-between;
  height: ${(props) => props.height};
  ${Container};
`;

export const NavLogo = styled(Link)<NavLogoProps>`
  color: ${(props) => props.color};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: ${(props) => props.fontSize};
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(MdDoubleArrow)`
  margin-right: 0.5rem;
  font-size: 3rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: ${(props) => props.widthMobileScreen};
    height: ${(props) => props.heightMobileScreen};
    position: absolute;
    top: ${(props) => props.topMobileScreen};
    left: ${(props) => (props.click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  padding-top: 10px;
  height: 100%;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)<NavLinksProps>`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0%.5rem 1rem;
  height: ${(props) => props.height};

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li<NavItemBtnProps>`
  
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.widthMobileScreen};
    height: ${(props) => props.heightMobileScreen};
  }
`;

export const NavBtnLink = styled(Link)<NavBtnLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: none;
  outline: none;
`;
