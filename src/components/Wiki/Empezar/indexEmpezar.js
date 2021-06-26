import React from 'react'
import coin from '../../../images/wiki/empezar/realm_gold.png'
import fame from '../../../images/wiki/empezar/fame.png'
import nexus from '../../../images/wiki/empezar/nexus.png'

import {Title2, P, Title3, Title4, Title5} from '../../GeneralComponets'
import {AsidePage, AsideContent, SidebarWrap, SidebarLink} from '../WikiComponents'
import {EmpezarContainer, ContentPage, InfoContent, Image, LinkRealm} from './EmpezarComponents'

const EmpezarWiki = () => {
    return (
        <>
            <EmpezarContainer>
                <ContentPage>
                    <InfoContent>
                        <Title2>Empezar en el Juego</Title2>              
                        <P>RotMG significa Reino del Dios Loco. Es una abreviatura común del título del juego.
                        <br></br>
                        <br></br>
                        En RotMG, la muerte es permanente: en otras palabras, cuando mueres, mueres. No se puede reaparecer con las mismas estadísticas; cada personaje debe empezar en el nivel 1. Además, todos los objetos equipados por un personaje o almacenados en su inventario se pierden al morir; no puedes conservar nada, a menos que lo guardes en el baul o en el inventario de otro personaje antes de morir.</P>
                        
                        <Title3>Realm Gold - Moneda de pago</Title3>
                        <Image src={coin}></Image>
                        <P>Todos los jugadores empiezan con 40 Realm Gold (oro), y pueden comprar más con moneda real. El oro te permite comprar varios objetos como tintes, telas, huevos de mascota, comida para mascotas, equipo, cofres de bóveda y ranuras para personajes.
                        <br></br>
                        <br></br>
                        Ten en cuenta que el dinero gastado en Realm Gold va a los desarrolladores, y les ayuda a hacer un juego mejor.</P>
                        <Image src="https://i.imgur.com/ozAeUk4.png"></Image>

                        <Title3>Experiencia y fama</Title3>
                        <Image src={fame}></Image>
                        <P>La experiencia (XP) se otorga por estar cerca de la mayoría de los enemigos cuando son derrotados. La XP es necesaria para subir de nivel. Además, la XP se convierte en fama durante la existencia de un personaje.
                        <br></br>
                        <br></br>
                        La fama obtenida a partir de la XP se conoce como fama base. Los jugadores completarán las misiones de clase después de alcanzar ciertos umbrales de fama base en cada clase. Cuando el personaje muere, el jugador gana fama igual a la suma de su fama base y la fama extra, que se obtiene de ciertos logros (bonos de fama) durante la vida de un personaje. La fama se puede utilizar para comprar ciertos objetos en el juego, y también es un requisito para completar las misiones de clase.
                        <br></br>
                        <br></br>
                        La fama puede usarse para alimentar y fusionar mascotas, mejorar el Patio de Mascotas, comprar equipo de bajo nivel y planos en el Nexo, y ocasionalmente lanzar ciertas Cajas Misteriosas. Anteriormente, la fama se podía utilizar para comprar casi todo en el Nexo, aunque ahora muchos objetos sólo se pueden comprar con Oro del Reino. La única forma en que los jugadores pueden ganar fama utilizable es muriendo.</P>

                        <Title3>Intercambio de objetos</Title3>
                        <P>En RotMG, no hay una moneda estándar, todo el comercio consiste en equipo, pociones y otros artículos. Si se hace correctamente, el comercio es un método eficiente y seguro de adquirir objetos deseados (siempre que no estén ligados al alma, esto quiere decir que hay objetos que no pueden intercambiarse).
                        <br></br>
                        <br></br>
                        Puede ser útil comprobar las Ofertas Actuales en la página de comercio <LinkRealm href = "https://www.realmeye.com/current-offers">Aqui</LinkRealm> esto muestra lo que otros usuarios están dispuestos a comprar y vender sus artículos.
                        <br></br>
                        <br></br>
                        A no ser que se utilice un servicio como el mencionado, el comercio suele ser verbal: básicamente, hay que decir a los otros jugadores lo que se tiene y lo que se quiere a cambio. Como consejo útil, intenta no saturar el Nexo con mensajes y sé educado con los otros comerciantes; ¡generalmente conseguirás un mejor trato!
                        <br></br>
                        <br></br>
                        Si quieres vender algo rápidamente, muchos comerciantes se reúnen en el Nexo del servidor USWest3.</P>
                        <Image src="https://www.realmeye.com/s/a/img/wiki/Trade_0.png"></Image>
                        <Title4>Procedimiento básico de negociación</Title4>
                        <P>
                        1. Consigue que alguien comercie contigo ofreciéndole venderle algo o comprarle algo. Haz clic en el icono de su personaje y solicita un intercambio.
                        <br></br>
                        <br></br>
                        2. Si no has discutido los detalles exactos de tu intercambio en el chat, revisa el inventario de la otra persona en busca de los objetos que quieres. Deja que ellos también inspeccionen el tuyo.
                        <br></br>
                        <br></br>
                        3. Selecciona los objetos de tu inventario que quieras intercambiar. El otro jugador seleccionará el/los objetos que desea intercambiar. Asegúrate de que sabes lo que estás vendiendo y lo que vas a recibir: algunos estafadores intentan eliminar los objetos del intercambio en el último segundo o los cambian por otros de menor valor.
                        <br></br>
                        <br></br>
                        4. Acepta el intercambio y agradécelo a tu compañero en el chat.
                        <br></br>
                        <br></br>
                        5. Si el intercambio fue bueno, puedes bloquear a la otra persona para recordarle que es un comerciante justo. Sin embargo, esto depende de ti; si no te interesa, déjalo estar y disfruta de Realm.
                        </P>

                        <Title3>Nexus</Title3>
                        <Image src={nexus}></Image>
                        <P>
                        El Nexus es el área central de RotMG y una zona segura para los jugadores. En el Nexus, puedes interactuar y comerciar con otros jugadores, personalizar tus opciones, comprar oro y objetos del reino y acceder a la tienda. También permite acceder a tu Bóveda, Sala de Gremio y Patio de Mascotas, así como al Hechicero, al Vidente de Inicio de Sesión y al Muro de la Fama. Por último, el Nexo es la puerta de entrada al Reino.
                        <br></br>
                        <br></br>
                        Un portal al Nexo aparecerá cuando cualquiera de las tres encarnaciones de Oryx sea derrotada. Sin embargo, los jugadores pueden volver al Nexo en cualquier momento desde cualquier lugar pulsando el icono "Nexus" en la barra lateral derecha, o más comúnmente pulsando una tecla de acceso rápido (por defecto R, pero personalizable desde el menú de Opciones). Los jugadores pueden volver al Nexo sin ningún retraso (sin contar la pantalla de carga) utilizando cualquiera de estos métodos. Por lo tanto, "Nexusing" es una forma común de evitar la muerte si los jugadores se encuentran de repente en una mala situación.
                        </P>
                        <Title4>Punto de Aparicion (area marcada en rojo)</Title4>
                        <Image src="https://i.imgur.com/Rf83pnz.png"></Image>
                        <P>Es aquí donde los jugadores van cuando escapan a la seguridad pulsando la tecla Nexus - R por defecto o entrando en un portal Nexus.</P>
                        <Title5>Estatua para el cambio de nombre</Title5>
                        <Image src="https://static.drips.pw/rotmg/wiki/Environment/Name%20Changer.png"></Image>
                        <P>La estatua de oro brillante en la esquina noroeste de la plataforma de aparición te permite elegir un nombre único para ti. Este nombre no debe contener más de 10 caracteres, y sólo se permiten letras. Una vez que tengas tu nombre, te costará 1000 de Oro cambiarlo de nuevo.</P>
                        <Title5>Portal de la Sala de Gremios</Title5>
                        <Image src="https://static.drips.pw/rotmg/wiki/Environment/Portals/Guild%20Explanation%20Portal.png"></Image>
                        <P>La puerta marrón en la esquina suroeste de la plataforma de aparición es un portal que lleva a la Sala de Gremio, donde puedes reunirte con los miembros de tu gremio. Solo puedes pasar por esta puerta si estás en un gremio.</P>
                        <Title5>Portal del Baul o Boveda</Title5>
                        <Image src="https://static.drips.pw/rotmg/wiki/Environment/Portals/Vault%20Portal.png"></Image>
                        <P>Situada en la esquina sureste de la plataforma de aparición, la Bóveda te permite guardar los objetos que no necesites o quieras en ese momento. Los objetos de la bóveda no se pierden con la muerte de un personaje.</P>
                        <Title5>Portal del patio de mascotas</Title5>
                        <Image src="https://static.drips.pw/rotmg/wiki/Environment/Portals/Pet%20Yard%20Portal.png"></Image>
                        <P>En la esquina noreste de la plataforma se encuentra el Patio de Mascotas, una zona en la que se pueden incubar, alimentar y mejorar las mascotas.</P>
                        <Title5>Estatua del Cambio de Carácter</Title5>
                        <Image src="https://static.drips.pw/rotmg/wiki/Environment/Character%20Changer.png"></Image>
                        <P>Dos estatuas grises al norte de la plataforma de aparición. Estas te llevan de vuelta a la pantalla de selección de personaje, donde puedes cambiar de personaje, cambiar de servidor o cerrar la sesión de tu cuenta actual.</P>

                    </InfoContent>                              
                </ContentPage>
                <AsidePage>
                <AsideContent>
                        <Title3>WIKI</Title3>
                        <SidebarWrap>
                            <SidebarLink to = 'empezar'>Empezar en el juego</SidebarLink>
                            <SidebarLink to = 'objetivo'>Objetivo en el juego</SidebarLink>
                            <SidebarLink to = 'clases'>Clases</SidebarLink>
                            <SidebarLink>Estadisitcas de personaje</SidebarLink>
                            <SidebarLink>Objetos</SidebarLink>
                            <SidebarLink>Pets</SidebarLink>
                            <SidebarLink>El Reino</SidebarLink>
                            <SidebarLink>Mazmorras</SidebarLink>
                            <SidebarLink>Monstruos</SidebarLink>
                        </SidebarWrap>                            
                    </AsideContent>
                </AsidePage>
            </EmpezarContainer>
        </>
    )
}

export default EmpezarWiki
