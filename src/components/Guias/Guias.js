import React from 'react'
import { Title4, Title2, P } from '../GeneralComponets'
import { GuiasContainer, ContentContainer, GeneralContainer, LinksWrap, Links } from './GuiasComponents'

const Guias = () => {
    return (
        <div>
            <GuiasContainer>
                <ContentContainer>
                    <Title2>Guias</Title2>
                    <P>Una colección de guías escritas con la idea de ayudar en RotMG. Las guías pueden estar algo desactualizadas.</P>
                    <GeneralContainer>
                        <Title4>General</Title4>
                        <LinksWrap>
                            <Links to = "/guias/escogerClase">Escoger una clase</Links>
                            <Links>Guia de clases</Links>
                            <Links to = "/guias/esquivar">Esquivar proyectiles</Links>
                            <Links>Mantenerse vivo</Links>
                            <Links>Subir de nivel</Links>
                            <Links>Maximizar estadisticas</Links>
                            <Links>Farmear Fama</Links>
                            <Links>Grupos</Links>
                        </LinksWrap>
                    </GeneralContainer>
                    <GeneralContainer>
                        <Title4>Mazmorras/Reino</Title4>
                        <LinksWrap>
                            <Links>Godlands guia general</Links>
                            <Links>Rushing mazmorras</Links>
                            <Links>Guia de mazmorras</Links>
                            <Links>Eventos de jefes</Links>
                        </LinksWrap>
                    </GeneralContainer>
                </ContentContainer>
            </GuiasContainer>
        </div>
    )
}

export default Guias
