import styled from 'styled-components';
import { COLORS } from '../GeneralComponets';

export const SecFooter = styled.section`
    background: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    max-height: 400px;
    padding: 20px;
    justify-content: space-evenly;
`
export const Contact = styled.div`
    margin: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Title3 = styled.h3`
    display:flex;
    color: ${COLORS.primary};
    font-family: 'Nova Flat', cursive;
    justify-content:center;
    font-size: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
`

export const Title5 = styled.h5`
    display:flex;
    font-family: 'Flamenco', cursive;
    justify-content:center;
    font-size: 20px;
    letter-spacing: 3px;
    padding-top: 5px;
    padding-bottom: 5px;
`

export const Pa = styled.p`
    justify-self:center;
    align-self: center;
`