import React from 'react'
import {ClasesContainer, GuiaClasesContainer, PrincipalTitle, ContentWrap} from './ComponentsEsquivarProyectiles'
import {P, Title4, Title5, Title6, Title3} from '../../GeneralComponets'

const GuiaEsquivarProyectiles = () => {
    return (
        <div>
            <ClasesContainer>
                <GuiaClasesContainer>
                        <PrincipalTitle>
                            <Title3>Escoger una clase</Title3>
                        </PrincipalTitle>
                        <P>
                            Esta guía está escrita para los jugadores que no pueden esquivar las balas muy bien.
                            Si estás luchando contra algunos dioses y de repente aparece un muro de dioses detrás de ti, ¿qué debes hacer?
                            <br></br><br></br>
                            Tienes más o menos estas 3 opciones:
                        </P>
                        <Title6>1. Nexus</Title6>
                        <ContentWrap>
                            <P>Sólo vete al Nexus a tiempo y estarás a salvo.</P>
                        </ContentWrap>
                        <Title6>2. Recibe los golpes</Title6>
                        <ContentWrap>
                            <P>Si estás usando una clase de combate cuerpo a cuerpo con una estadística de Defensa alta.</P>
                        </ContentWrap>
                        <Title6>3. Esquivalo</Title6>
                        <ContentWrap>
                            <P>Esquiva si estás de acuerdo con perder potencialmente algún botín o si simplemente no quieres salir del Reino(Realm).</P>
                        </ContentWrap>

                        <Title4>Reglas para esquivar</Title4>
                        <ContentWrap>   
                            <Title5>Primera regla</Title5>
                            <P>
                                Si sólo hay uno o dos dioses, corre en círculos alrededor de ellos (ni siquiera necesitas la velocidad máxima para esto).                                
                            </P>

                            <Title5>Segunda regla</Title5>
                            <P>
                                No te pongas rudo e intentes esquivar demasiadas balas. Si hay un muro de Dioses y te adentras demasiado con tu personaje, lo más probable es que no puedas esquivar todas las balas. Si aún así quieres adentrarte, deberías tener al menos la Defensa y la Velocidad al máximo para evitar recibir demasiado daño.
                            </P>

                            <Title5>Tercera regla</Title5>
                            <P>
                            Sé consciente de tu entorno. Al retroceder y disparar simultáneamente, nunca cedas ni un centímetro más de lo necesario para sobrevivir, o de lo contrario puedes acabar rodeado de repente por más enemigos. Si no tienes más remedio, escóndete detrás de las rocas de la tierra de los dioses(God lands). Sin embargo, estas rocas también pueden ser peligrosas si te quedas atrapado entre 3 de ellas, ya que no podrás retroceder sin tener que ir hacia los enemigos para esquivarlos.
                            </P>
                        </ContentWrap>
                    </GuiaClasesContainer>
            </ClasesContainer>
        </div>
    )
}

export default GuiaEsquivarProyectiles
