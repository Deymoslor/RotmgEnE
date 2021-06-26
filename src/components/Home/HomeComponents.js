import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { COLORS } from '../GeneralComponets'


export const HomeIndexContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    height: auto;
    position:relative;
    z-index: 1;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; 
`

export const ImgHome = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #232a34
`

export const HomeContent = styled.div`
    z-index: 3;
    border-radius: 30px;
    width: 60%;
    padding: 1px;
    margin: 15px;
    margin-top: 80px;
    position: relative;
    background: #000;
    color: #fff;

    @media screen and (max-width: 768px){
        width: 80%
    }
    
`

export const Pa = styled.p`
    font-family: 'Flamenco', cursive;
    font-size: 20px;
    padding: 30px 50px;
`

export const Title3 = styled.h3`
    display:flex;
    color: ${COLORS.tercero};
    font-family: 'Nova Flat', cursive;
    justify-content:center;
    font-size: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
`

export const ContentAside = styled.aside`
    z-index: 3;
    border-radius: 30px;
    width: 22%;
    padding: 1px;
    margin: 15px;
    margin-top: 30px;
    position: relative;
    background: #000;
    color: #fff;

    @media screen and (max-width: 768px){
        width: 50%
    }
    
`

export const AsideLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    justify-content:space-around;
    padding: 10px;
    font-family: 'Flamenco', cursive;
    font-size:25px;
    height: 100%;
    cursor:pointer;

    &:active {
        border-bottom: 3px solid #000;
    }
    
`;

export const HomeBtn = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 10px
`

export const HomeBtnLink = styled.a `
    border-radius: 50px;
    background: ${COLORS.primary};
    font-family: 'Nova Flat', cursive;
    z-index: 3;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 20px;
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

export const LoreContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    height: auto;
    position:relative;
    z-index: 1;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const LoreContent = styled.div`
    z-index: 3;
    border-radius: 30px;
    width: 60%;
    justify-content:flex-start;
    align-items: flex-start;
    padding: 1px;
    margin: 15px;
    margin-top: 40px;
    position: relative;
    background: #000;
    color: #fff;
`

export const Title4 = styled.h4`
    display:flex;
    padding: 10px 40px;
    font-family: 'Nova Flat', cursive;
    justify-content:center;
    font-size: 20px;
    
`