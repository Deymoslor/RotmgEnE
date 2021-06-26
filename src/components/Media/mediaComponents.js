import styled from 'styled-components';
import ReactPlayer from 'react-player';
import {Link, animateScroll as scroll} from 'react-scroll'
import { COLORS } from '../GeneralComponets';

export const MediaContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    border-radius: 0px;
    background: ${COLORS.oscuro};
`
export const Content = styled.div`
    width: 90%;
    @media screen and (max-width: 500px){
        width: 100%;
    }
`

export const ListaVideos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 40px;
    width: 100%;
    background: #000;
    @media screen and (max-width: 500px){
        flex-direction: column;
        justify-self: center;
    }
`
export const Links = styled(Link)`
    
    margin: 20px;
    cursor: pointer;
    border-bottom: 1px solid #fff;
    color: #fff;
    transition: 0.4s;
    &:hover{
        border-bottom: 4px solid #ee4c58;
        color: #ee4c58;
    }
`

export const TitleWrap = styled.div`
    width: 30%;
    background: #000;
    margin-right: 30px;
    text-align: center;

    @media screen and (max-width: 1024px){
        width: 100%;
    }
`


export const VideosContainer = styled.div`
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 80px;

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`

export const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-bottom: 25px;

    @media screen and (max-width: 1024px){
        width:100%
    }
`

export const Video = styled(ReactPlayer)`
   
`




