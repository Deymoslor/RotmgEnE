import React from 'react'

import {Title2, P, Title3, Title4, Title5} from '../../GeneralComponets'
import '../clases/clases.css'
import {AsidePage, AsideContent, SidebarWrap, SidebarLink} from '../WikiComponents'
import {EmpezarContainer, ContentPage, InfoContent, TableResponsive, Table, Thead, Tr, Th, ThDiv, TBody, Td, DivImage, Image, ImageB} from './ClasesComponets'

const indexClases = () => {
    
    return (
        <>
            <EmpezarContainer className="si">
                <ContentPage>
                    <InfoContent>
                        <Title3>Clases</Title3>
                        <P>
                            Realm of the Mad God tiene una gran variedad de clases, cada una con una habilidad especial única. Hay 17 de ellas para elegir. Cada clase tiene sus propias ventajas y desventajas.
                        </P>
                        <TableResponsive className="tableResponsive">
                            <Table className="table">
                                <Thead>
                                    <Tr>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Rogue(pícaro)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Archer(arquero)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Wizard(Mago)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Priest(Sacerdote)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                    </Tr>
                                    
                                </Thead>
                                <TBody>
                                    <Tr>
                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Rogue.PNG"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>
                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Archer_0.PNG"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>

                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Wizard_0.PNG"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>

                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Priest_1.PNG"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>
                                    </Tr>
                                </TBody>
                                </Table>
                        </TableResponsive>
                        <TableResponsive className="tableResponsive">
                            <Table className="table">
                                <Thead>
                                    <Tr>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Warrior(Guerrero)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Knight(Caballero)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Paladin</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Assassin(Asesino)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                    </Tr>
                                    
                                </Thead>
                                <TBody>
                                    <Tr>
                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Warrior_1.PNG"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>
                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Knight_1.PNG"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>

                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Paladin.PNG"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>

                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/assassin_0.PNG"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>
                                    </Tr>
                                </TBody>
                                </Table>
                        </TableResponsive>
                        <TableResponsive className="tableResponsive">
                            <Table className="table">
                                <Thead>
                                    <Tr>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Necromancer(Nigromante)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Huntress(Cazador)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Mystic(Mistico)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Trickster(Estafador)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                    </Tr>
                                    
                                </Thead>
                                <TBody>
                                    <Tr>
                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Necromancer.png"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>
                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Huntress.png"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>

                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Mystic_0.png"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>

                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Trickster_0.PNG"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>
                                    </Tr>
                                </TBody>
                                </Table>
                        </TableResponsive>
                        <TableResponsive className="tableResponsive">
                            <Table className="table">
                                <Thead>
                                    <Tr>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Sorcerer(Hechicero)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Ninja</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Samurai</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Bard(Bardo)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                    </Tr>
                                    
                                </Thead>
                                <TBody>
                                    <Tr>
                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/Sorcerer_0.png"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>
                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://www.realmeye.com/s/a/img/wiki/ninja_3.png"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>

                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://i.imgur.com/fCSXHwv.png"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>

                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://i.imgur.com/SyW1gzN.png"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>
                                    </Tr>
                                </TBody>
                                </Table>
                        </TableResponsive>
                        <TableResponsive className="tableResponsive">
                            <Table className="table">
                                <Thead>
                                    <Tr>
                                        <Th>
                                            <ThDiv>
                                                <SidebarLink to = 'wiki/clases/rogue'>Summoner(Invocador)</SidebarLink>
                                            </ThDiv>
                                        </Th>
                                    </Tr>
                                    
                                </Thead>
                                <TBody>
                                    <Tr>
                                        <Td>
                                            <DivImage>
                                                <SidebarLink to = 'wiki/clases/rogue'>
                                                    <Image src="https://i.imgur.com/eqKGYWB.png"></Image>
                                                </SidebarLink>
                                            </DivImage>
                                        </Td>
                                    </Tr>
                                </TBody>
                            </Table>
                        </TableResponsive>
                        <Title3>Desbloquear clases</Title3>
                        <P>
                        En tus primeros pasos en Realm, comenzarás en la clase Mago. Tras alcanzar un determinado nivel en cada clase, desbloquearás otras clases. Para las clases de la primera fila, el nivel que debes alcanzar en su clase precursora (clase necesaria para desbloquear la siguiente) es el 5; las cuentas nuevas en Steam tendrán estas clases desbloqueadas por defecto. Las clases de las dos filas inferiores requieren que alcances el nivel 20 en sus clases precursoras.
                        </P>
                        <P>
                        Nivel 5 requerido:<br></br><br></br>

                        Sacerdote ← Mago<br></br>
                        Arquero ← Sacerdote<br></br>
                        Picaro ← Arquero<br></br>
                        Guerrero ← Picaro<br></br>
                        Nivel 20 requerido:<br></br><br></br>

                        Caballero ← Guerrero<br></br>
                        Paladin ← Sacerdote y Caballero<br></br>
                        Asesino ← Picaro y Mago<br></br>
                        Nigromante ← Mago y Sacerdote<br></br>
                        Cazador ← Picaro y Arquero<br></br>
                        Mistico ← Nigromante y Cazador<br></br>
                        Embaucador ← Paladin y Asesino<br></br>
                        Hechicero ← Asesino y Nigromante<br></br>
                        Ninja ← Picaro y Guerrero<br></br>
                        Samurai ← Caballero y Ninja<br></br>
                        Bardo ← Paladin y Cazador<br></br>
                        Invocador ← Hechicero y Mistico<br></br>
                        </P>

                        <ImageB src="https://i.imgur.com/apDhEwS.png"></ImageB>
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

export default indexClases
