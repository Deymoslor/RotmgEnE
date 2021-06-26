import React from 'react'
import RotmgWiki from '../../images/rotmgWiki.png'

import {Title3} from '../GeneralComponets'
import { WikiContainer, ContentPage, AsidePage, Image, Title4, P, InfoContent, AsideContent, SidebarLink, SidebarWrap } from './WikiComponents'

const WikiIndex = () => {
    return (
        <>
            <WikiContainer>
                <ContentPage>
                    <InfoContent>
                        <Title3>Realm Of The Mad God</Title3>
                        <Image src={RotmgWiki}></Image>
                        <Title4>Bienvenido a la Wiki oficial del Reino del Dios Loco, la fuente de información actualizada y en español sobre el juego.</Title4>
                        <P>Realm of the Mad God (RotMG) es un juego de rol multijugador masivo y gratuito denominado "Bullet hell" debido a que la muerte lleva a la eliminación de tu personaje que sumerge a los jugadores en un mundo abrumado por Oryx, el Dios Loco, y sus secuaces. El juego cuenta con un modo de juego cooperativo en línea en un mundo enorme, más de 60 mazmorras únicas, miles de enemigos, combates de acción en tiempo real, 17 clases jugables, subir de nivel y miles de objetos para coleccionar. Para jugar, sólo tienes que descargar el lanzador e instalar el juego, crear una cuenta gratuita y ¡a jugar!</P>
                        <Title4>Actual version del juego : EXALT VERSION 1.6.0.0</Title4>                        
                    </InfoContent>                            
                </ContentPage>
                <AsidePage>
                    <AsideContent>
                        <Title3>WIKI</Title3>
                        <SidebarWrap>
                            <SidebarLink to = '/wiki/empezar'>Empezar en el juego</SidebarLink>
                            <SidebarLink to = '/wiki/objetivo'>Objetivo en el juego</SidebarLink>
                            <SidebarLink to = '/wiki/clases'>Clases</SidebarLink>
                            <SidebarLink>Estadisitcas de personaje</SidebarLink>
                            <SidebarLink>Objetos</SidebarLink>
                            <SidebarLink>Pets</SidebarLink>
                            <SidebarLink>El Reino</SidebarLink>
                            <SidebarLink>Mazmorras</SidebarLink>
                            <SidebarLink>Monstruos</SidebarLink>
                        </SidebarWrap>                            
                    </AsideContent>
                </AsidePage>
            </WikiContainer>
        </>
    )
}

export default WikiIndex
