import React from 'react'
import './fontIndex.css'
import OrixBg from '../../images/orixBg.jpg'
import CrystalWorm from '../../images/crystalWorm.jpg'
import {AsidePage, AsideContent, SidebarWrap, SidebarLink} from '../Wiki/WikiComponents'
import { HomeIndexContainer, HomeBg, ImgHome, HomeContent,  Pa, Title3,  HomeBtnLink, HomeBtn,LoreContainer, Title4, LoreContent } from './HomeComponents'

const HomeIndex = () => {
    return (
        <>
        <HomeIndexContainer>
            <HomeBg>
                <ImgHome src={OrixBg}></ImgHome>
            </HomeBg>
            <HomeContent>
                <Title3>REALM OF THE MAD GOD</Title3>
                <Pa>
                Realm of the Mad God (RotMG) es un juego de rol multijugador masivo y gratuito que sumerge a los jugadores en un mundo abrumado por Oryx, el Dios Loco, y sus secuaces. El juego cuenta con un modo de juego cooperativo en línea en un mundo enorme, más de 60 mazmorras únicas, miles de enemigos, combates de acción en tiempo real, 17 clases jugables, subir de nivel y miles de objetos para coleccionar. Para jugar, sólo tienes que descargar el lanzador e instalar el juego, crear una cuenta gratuita y ¡a jugar!
                </Pa>
                <HomeBtn>
                    <HomeBtnLink href="https://www.realmofthemadgod.com" target="_blank">Pagina Oficial</HomeBtnLink>
                </HomeBtn>
            </HomeContent>
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
        </HomeIndexContainer>
        <LoreContainer>
            <HomeBg>
                <ImgHome src={CrystalWorm}></ImgHome>
            </HomeBg>
            <LoreContent>
                <Title3>Lore - Historia</Title3>
                <Pa>
                La historia oficial de Realm of the Mad God procede de diversas fuentes, dentro y fuera del juego. Aunque la historia se ha ampliado a lo largo de los años, la premisa principal del juego sigue siendo sencilla:
                </Pa>
                <Title4>Has sido capturado por el Dios Loco Oryx y transportado a su reino como alimento para sus viles secuaces. ¿Seguirás tranquilamente tu destino o te defenderás?</Title4>
            </LoreContent>
        </LoreContainer>
        </>
    )
}

export default HomeIndex
