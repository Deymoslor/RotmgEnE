import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { COLORS } from '../GeneralComponets'

export const WikiContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    height: auto;
    position:relative;
    z-index: 1;
    background: ${COLORS.oscuro};
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

/*contenido de la pagina*/

export const ContentPage = styled.div`
    z-index: 3;
    border-radius: 30px;
    width: 65%;
    padding: 10px;
    margin: 10px;
    margin-top: 80px;
    position: relative;
    background: #000;
    color: #fff;

    @media screen and (max-width: 768px){
        width: 80%
    }
`

export const InfoContent = styled.div`
    z-index: 3;
    border-radius: 30px;
    padding: 1px;
    margin: 1px;
    margin-top: 40px;
    position: relative;
    color: #fff;
`


export const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
`

export const Title4 = styled.h4`
    display:flex;
    font-family: 'Nova Flat', cursive;
    font-size: 20px;
    justify-content: center;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
`

export const P = styled.p`
    font-family: 'Flamenco', cursive;
    font-size: 20px;
    padding: 30px 50px;
`

/*Aside de la pagina*/

export const AsidePage = styled.div`
    z-index: 3;
    border-radius: 30px;
    width: 25%;
    padding: 15px;
    margin: 15px;
    margin-top: 80px;
    position: relative;
    background: #000;
    color: #fff;

    @media screen and (max-width: 1007px){
        width: 31%
    }

    @media screen and (max-width: 768px){
        margin-top: 40px;
        width: 55%
    }
    @media screen and (max-width: 466px){
        margin-top: 40px;
        width: 75%
    }
`

export const AsideContent = styled.div`
    z-index: 3;
    border-radius: 30px;
    padding: 1px;
    margin: 15px;
    margin-top: 20px;
    position: relative;
    color: #fff;
`

export const SidebarWrap = styled.ul`
    display: grid;
    margin-top: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(7, 60px);
        text-align: start;
        
    }
`

export const SidebarLink = styled(LinkR)`
    white-space: nowrap;
    font-family: 'Nova Flat', cursive;
    padding: 6px 4px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    :hover{
        color: #ee4c58;
    }
`