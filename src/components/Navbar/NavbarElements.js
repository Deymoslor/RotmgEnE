import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { COLORS } from '../GeneralComponets';


export const Nav = styled.nav`
    background: #000;
    height: 120px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding:  1px;
    max-width: 1100;
`

// export const NavLogo = styled(LinkR)`
//     color: #fff;
//     justify-self: center;
//     cursor: pointer;
//     font-size: 1.5rem;
//     display: flex;
//     align-items: center;
    
//     font-weight: bold;
//     text-decoration: none;
// `

export const ImgWrap = styled.div`
    max-width: ${({ image }) => (image ? '125px' : '200px')};
    height: 100%;
    transition: 0.4s;
`

export const ImgLink = styled(LinkR)`
    
`

export const Img = styled.img`
    max-width:100%;
    cursor: pointer;
`


export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    
   

    @media screen and (max-width: 768px){
        display:none;
    }   
`

export const NavItem = styled.li`
    height: 80px;  
    &:hover{
        background: ${COLORS.primary};
        border-radius: 20px;
    }  
`

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.9rem;
    font-family: 'Nova Flat', cursive;
    font-size: 100%;
    height: 100%;
    cursor:pointer;

    &:active {
        border-bottom: 3px solid #000;
    }
    
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR) `
    border-radius: 50px;
    background: ${COLORS.primary};
    font-family: 'Nova Flat', cursive;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-zize: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`
