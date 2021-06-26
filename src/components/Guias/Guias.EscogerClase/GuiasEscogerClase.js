import React from 'react'
import { Title4, Title5, Title3, P, Title6 } from '../../GeneralComponets'
import { GuiaClasesContainer, PrincipalTitle, ContentWrap, ClasesContainer, ContentClases } from './GuiasEscogerClaseComponents'

const GuiasEscogerClase = () => {
    return (
        <div>
            <ClasesContainer>
            <GuiaClasesContainer>
                    <PrincipalTitle>
                        <Title3>Escoger una clase</Title3>
                    </PrincipalTitle>
                    <P>
                        Aunque algunas clases pueden brillar en diferentes cosas, no hay una clase objetivamente mejor. Incluso la clase que hace más daño no es necesariamente la mejor, ya que las habilidades y la variación de las armas equilibran las cosas. Esta guía pretende ayudarte a elegir una clase con la que disfrutes jugando.<br></br><br></br>

                        Los factores que debes tener en cuenta son los puntos fuertes y débiles, la experiencia que tengas en la supervivencia, si tienes la intención de maximizar el personaje y las estadísticas de tu mascota. Una mascota poderosa con Heal y Magic Heal mejora la capacidad de supervivencia incluso más que la VIT y WIS máximas.<br></br><br></br>

                        Por lo general, tu objetivo principal será maximizar las estadísticas de tu personaje. A menudo es útil crear una cuenta/personaje separado para el cultivo de hierba con una buena clase para las tierras sagradas. Las mulas (cuentas alternativas utilizadas para el almacenamiento) también son útiles.<br></br><br></br>

                        Para obtener información sobre el juego específico de cada clase, consulta las guías de clases. Hay una página para comparar el daño por segundo de las clases.
                    </P>

                    <Title4>Clases de toga</Title4>
                    <ContentWrap>   
                        <Title5>Mago</Title5>
                        <P>
                        El Mago es la primera clase que encontrarás al empezar RotMG. Es una clase puramente ofensiva y de largo alcance que desempeña el papel de cañón de cristal, diseñado para infligir el máximo daño a un solo objetivo a media y larga distancia. Es capaz de hacer tanto ráfagas como daño sostenido a larga distancia, pero tiene que mantenerse alejado de cualquier peligro para que sus bajas estadísticas defensivas no supongan su muerte.
                        </P>
                        <Title6>Fortalezas</Title6>
                        <ContentClases>
                            <P>
                                -Ataque de muy largo alcance <br></br><br></br>
                                -Ataques punzantes <br></br><br></br>
                                -Gran capacidad de maná <br></br><br></br>
                                -Curación grupal increíblemente fuerte en un área amplia <br></br><br></br>
                                -La curación se potencia con un modificador de Sabiduría <br></br><br></br>
                                -Las habilidades UT proporcionan otros numerosos beneficios (Purificación, Velocidad, Armadura) <br></br><br></br>
                            </P>
                        </ContentClases>
                        <Title6>Debilidades</Title6>
                        <ContentClases>
                            <P>
                                -Estados defensivos extremadamente bajos <br></br><br></br>
                                -Algo deficiente en el control de multitudes <br></br><br></br>
                                -Lenta velocidad de movimiento <br></br><br></br>
                            </P>
                        </ContentClases>
                    </ContentWrap>
 
                    <ContentWrap>   
                        <Title5>Sacerdote</Title5>
                        <P>
                            El Sacerdote es una clase de curación de largo alcance. Aunque tiene unas estadísticas defensivas bajas como el resto de su clase y sufre el DPS más bajo de todas las clases del juego, su poderosa habilidad de curación puede mantenerlo, y a sus compañeros de equipo, con vida incluso en las batallas más duras.
                        </P>
                        <Title6>Fortalezas</Title6>
                        <ContentClases>
                            <P>
                                -Ataque de largo alcance <br></br><br></br>
                                -Ataques punzantes <br></br><br></br>
                                -Alta capacidad de maná <br></br><br></br>
                                -Curación de grupo increíblemente fuerte en una zona amplia <br></br><br></br>
                                -La curación se potencia con un modificador de Sabiduría <br></br><br></br>
                                -Las habilidades de TUT proporcionan otros numerosos beneficios (Purificación, Velocidad, Blindaje) <br></br><br></br>
                            </P>
                        </ContentClases>
                        <Title6>Debilidades</Title6>
                        <ContentClases>
                            <P>
                                -La defensa real es baja <br></br><br></br>
                                -Preparación de daño abismal <br></br><br></br>
                                -Se ve especialmente afectado por silenciado y enfermo <br></br><br></br>
                                -Los tomos de nivel más alto son costosos, en cuanto a maná; los tomos UT lo son aún más <br></br><br></br>
                            </P>
                        </ContentClases>
                    </ContentWrap>
                    
                    <ContentWrap>   
                        <Title5>Nigromante</Title5>
                        <P>
                            Los nigromantes son un híbrido entre el Mago y el Sacerdote; una clase de medio-largo alcance, centrada en el DPS y que maneja un báculo con la capacidad de robar HP para curar a sus compañeros y dañar a los enemigos simultáneamente. Aunque carecen del daño puro de un Mago, su capacidad de curación junto con las bonificaciones naturales de HP de sus cráneos los hacen mucho más duraderos que el Mago medio.
                        </P>
                        <Title6>Fortalezas</Title6>
                        <ContentClases>
                            <P>
                            -Ataque de largo alcance <br></br><br></br>
                            -Decente producción de daño <br></br><br></br>
                            -Alta capacidad de maná <br></br><br></br>
                            -Robo de vida otorga mayor capacidad de supervivencia <br></br><br></br>
                            -El cráneo otorga un control de masas limitado e ignora parcialmente la armadura <br></br><br></br>
                            -Las bonificaciones de HP de la calavera la hacen más duradera que otras clases de túnica <br></br><br></br>
                            -La sabiduría alta se combina bien con los modificadores del cráneo. <br></br><br></br>
                            -Los cráneos pueden curar la mayor parte de cualquier habilidad <br></br><br></br>
                            </P>
                        </ContentClases>
                        <Title6>Debilidades</Title6>
                        <ContentClases>
                            <P>
                                -Menos daño que el Mago <br></br><br></br>
                                -La calavera depende de la presencia de una gran cantidad de enemigos <br></br><br></br>
                                -Menos curación que el Sacerdote a menos que haya una gran cantidad de enemigos presentes <br></br><br></br>
                                -Los cráneos son bastante dificiles de usar <br></br><br></br>
                                -Sigue teniendo una defensa baja <br></br><br></br>
                                -Lenta velocidad de movimiento <br></br><br></br>
                            </P>
                        </ContentClases>
                    </ContentWrap>

                </GuiaClasesContainer>
            </ClasesContainer>
        </div>
    )
}

export default GuiasEscogerClase
