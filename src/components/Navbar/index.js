import React, {useEffect, useState} from 'react'
import StyledNav from './NavbarElements';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
            <StyledNav.Nav scrollNav={scrollNav}>
                <StyledNav.NavbarContainer>
                    <StyledNav.NavLogo to="/" onClick={toggleHome}>
                        dolla
                    </StyledNav.NavLogo>
                    <StyledNav.MobileIcon onClick={toggle}>
                        <FaBars />
                    </StyledNav.MobileIcon>
                    <StyledNav.NavMenu>
                        <StyledNav.NavItem>
                            <StyledNav.NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</StyledNav.NavLinks>
                        </StyledNav.NavItem>
                        <StyledNav.NavItem>
                            <StyledNav.NavLinks to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Discover</StyledNav.NavLinks>
                        </StyledNav.NavItem>
                        <StyledNav.NavItem>
                            <StyledNav.NavLinks to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Services</StyledNav.NavLinks>
                        </StyledNav.NavItem>
                        <StyledNav.NavItem>
                            <StyledNav.NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Sign Up</StyledNav.NavLinks>
                        </StyledNav.NavItem>
                    </StyledNav.NavMenu>
                    <StyledNav.NavBtn>
                        <StyledNav.NavBtnLink to="/signin">Sign In</StyledNav.NavBtnLink>
                    </StyledNav.NavBtn>
                </StyledNav.NavbarContainer>
            </StyledNav.Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar