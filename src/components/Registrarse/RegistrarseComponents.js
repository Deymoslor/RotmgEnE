import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../GeneralComponets';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        180deg,${COLORS.oscuro},
        ${COLORS.primary} 90%
    );
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;


    @media screen and (max-width: 400px){
        height: 80%;
    }
`

export const Icon =  styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    max-width: 100px;
    
    @media screen and (max-width: 400px){
        margin-left: 16px;
    };
`;

export const FormContent = styled.div`
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
        height: 100%;
    }
`

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.9);

    @media screen and (max-width: 480px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color:#fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 30px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 22px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: ${COLORS.secondary};
    
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        background: #fff;
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 14px;
    color: #fff;
    font-size: 14px;
    
`