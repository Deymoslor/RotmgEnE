import React from 'react'
import { Title3 } from '../GeneralComponets'
import { MediaContainer, Content, ListaVideos, VideosContainer, VideoContainer, Video, Links, TitleWrap } from './mediaComponents'

const IndexMedia = () => {
    return (
        <div>
            <MediaContainer>
                <Content>
                    <ListaVideos>
                        <Links spy={true} smooth={true} duration={500} to="principiantes">Videos Principiantes</Links>
                        <Links spy={true} smooth={true} duration={700} to="Mascotas">Mascotas(español-ingles)</Links>
                        <Links spy={true} smooth={true} duration={500} to="GuiaMazmorras">Mazmorras</Links>
                    </ListaVideos>
                    <VideosContainer id="principiantes">
                        <TitleWrap>
                            <Title3 >Videos Principiantes</Title3>
                        </TitleWrap>
                        <VideoContainer>
                            <Video width ="430px" height="220px" controls url='https://www.youtube.com/watch?v=ZvUk67nhCiM'></Video>
                            <Video width ="430px" height="220px" controls url='https://www.youtube.com/watch?v=dt0qUobt9kE'></Video>
                            <Video width ="430px" height="220px" controls url='https://www.youtube.com/watch?v=dhqinS6ytI0'></Video>
                        </VideoContainer>
                    </VideosContainer>

                    <VideosContainer id="Mascotas">
                        <TitleWrap>
                            <Title3 >Mascotas(español-ingles)</Title3>
                        </TitleWrap>
                        <VideoContainer>
                            <Video width ="430px" height="220px" controls url='https://youtu.be/2qyFxv4Gr2U?list=PL6E8w4L1K2-yKmuUZExZJGpshUj6LXHfL'></Video>
                            <Video width ="430px" height="220px" controls url='https://www.youtube.com/watch?v=5JZBO5gz-J0'></Video>
                        </VideoContainer>
                    </VideosContainer>

                    <VideosContainer id="GuiaMazmorras">
                        <TitleWrap>
                            <Title3 >Guia mazmorras</Title3>
                        </TitleWrap>
                        <VideoContainer>
                            <Video width ="430px" height="220px" controls url='https://www.youtube.com/watch?v=DpKWjxXFPO0&t=1s'></Video>
                            <Video width ="430px" height="220px" controls url='https://www.youtube.com/watch?v=YtDcd5dAzvQ'></Video>
                        </VideoContainer>
                    </VideosContainer>
                </Content>
            </MediaContainer>
        </div>
    )
}

export default IndexMedia


