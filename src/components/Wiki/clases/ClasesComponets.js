import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import { COLORS } from '../../GeneralComponets';

export const EmpezarContainer = styled.div`
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

export const InfoContent = styled.div`
    z-index: 3;
    border-radius: 30px;
    padding: 1px;
    margin: 1px;
    margin-top: 40px;
    position: relative;
    color: #fff;
`

//CONTENIDO

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
        width: 90%
    }
`

export const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    max-width: 100%;
`

export const ImageB = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
`

export const LinkRealm = styled.a`
    font-family: 'Flamenco', cursive;
`

// tabla-clases content

export const TableResponsive = styled.div`
    width: 100%;
    display: inline-block;
`

export const Table = styled.table`
    white-space: normal;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
`

export const Thead = styled.thead`
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
`

export const Tr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
`

export const Th = styled.th`
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
    
`

export const ThDiv = styled.div`
    align-items: center;
`

export const TBody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    text-indent: initial;
`

export const Td = styled.td`
    display: table-cell;
`

export const DivImage = styled.div`
    display:block;
    text-align: center;
`


//ASIDECONTENT
