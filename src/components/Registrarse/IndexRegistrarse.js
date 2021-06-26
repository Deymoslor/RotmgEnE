import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './RegistrarseComponents'
const Registrarse = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to="/">Inicio</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Registra tu cuenta</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email"></FormInput>
                            <FormLabel htmlFor="for">Usuario</FormLabel>
                            <FormInput type="text"></FormInput>
                            <FormLabel htmlFor="for">Contraseña</FormLabel>
                            <FormInput type="password"></FormInput>
                            <FormButton type="submit">Enviar</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default Registrarse
