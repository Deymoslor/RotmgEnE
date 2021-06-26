import './fontNavbar.css'
import React, { useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import LogoRotmg from '../../images/ROTMG_logo.png'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Img, ImgWrap, ImgLink } from './NavbarElements';

const Navbar = ({ toggle, active }) => {
    const [image, setImage] = useState(false);

    const changeImage = () => {
        if(window.scrollY >= 80) {
            setImage(true);
        }else{
            setImage(false);
        }
    }

    window.addEventListener('scroll', changeImage)

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars></FaBars>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/media'>Media</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/wiki'>Wiki</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <ImgWrap image={image}>
                        <ImgLink to='/'>
                            <Img src={LogoRotmg} to="/" ></Img>
                        </ImgLink>    
                    </ImgWrap>    
                    <NavMenu>    
                        <NavItem>
                            <NavLinks to='/guias'>Guias</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/registro'>Registrarse</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to='/signin'>Iniciar sesion</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
