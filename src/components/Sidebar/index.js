import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu} from './SidebarElements';

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">
                        Home
                    </SidebarLink>
                    <SidebarLink to="/media">
                        Media
                    </SidebarLink>
                    <SidebarLink to="/wiki">
                        Wiki
                    </SidebarLink>
                    <SidebarLink to="/guias">
                        Guias
                    </SidebarLink>
                    <SidebarLink to="/registro">
                        Registrarse
                    </SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Iniciar sesion</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
