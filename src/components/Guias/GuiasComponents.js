import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { COLORS } from '../GeneralComponets'

export const GuiasContainer = styled.div`
    display: flex;
    width:100%;
    margin: 0px;
    justify-content: center;
    background: ${COLORS.oscuro};
`

export const ContentContainer = styled.div`
    width: 90%;  
    margin-top: 80px;
    margin-bottom: 40px;
    background: #000;
    border-radius: 32px;
`

export const GeneralContainer = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    margin-bottom: 30px;
    
`

export const LinksWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    gap: 8px;
`

export const Links = styled(LinkR)`
    font-family: 'Nova Flat', cursive;
    font-size: 22px;
    color: #fff;
    :hover{
        color: #ee4c58;
    }
`