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
} from './ComponentsIniciarSesion'

const IniciarSesion = () => {
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to="/">Inicio</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Iniciar Sesion</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email"></FormInput>
                            <FormLabel htmlFor="for">Contraseña</FormLabel>
                            <FormInput type="password"></FormInput>
                            <FormButton type="submit">Ingresar</FormButton>
                            <Text>¿Olvidaste la contraseña?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default IniciarSesion
