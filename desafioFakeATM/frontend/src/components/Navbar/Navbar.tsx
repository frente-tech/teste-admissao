import React from "react";
//assets global
import { Button } from "../../globalStyles";
//assets
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const [button, setButton] = React.useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  React.useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav
          background="#101522"
          height="120px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="1.2rem"
          position="sticky"
          top="0"
          zIndex="999"
        >
          <NavbarContainer display="flex" height="100px">
            <NavLogo color="#fff" fontSize="2rem" to="/">
              <NavIcon />
              Frente Corretora
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu
              onClick={() => handleClick}
              widthMobileScreen="100%"
              heightMobileScreen="90vh"
              topMobileScreen="120px"
              click={click}
            >
              <NavItem>
                <NavLinks color="#fff" height="100%" to="/home">
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks color="#fff" height="100%" to="/clients">
                  Clientes
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks color="#fff" height="100%" to="/operation">
                  Operacoes
                </NavLinks>
              </NavItem>
              <NavItemBtn widthMobileScreen="100%" heightMobileScreen="120px">
                {button ? (
                  <NavBtnLink
                    padding="8px 16px"
                    height="100%"
                    width="100%"
                    to="/"
                  >
                    <Button big={false} fontBig={false} primary>
                      Sair
                    </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink
                    padding="8px 16px"
                    height="100%"
                    width="100%"
                    to="/"
                  >
                    <Button big={false} fontBig primary>
                      Sair
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
