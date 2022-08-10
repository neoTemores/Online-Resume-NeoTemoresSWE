import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

import babyGame from '../Assets/videos/GuessBabyNameGame.mov'
import babyGameThumbNail from '../Assets/thumbnails/babyName.png'
import findLuvVid from '../Assets/videos/FullChatDemo.mov'
import findLuvVivThumbNail from '../Assets/thumbnails/findLuvThumbnail.png'
import projectRitter from '../Assets/videos/ProjectRitterDemo.mov'
import projectRitterThumbnail from '../Assets/thumbnails/projectRitterThumbNail.png'



const Portfolio = () => {
    return (
        <div style={{ 'max-width': "90vw" }}>
            <Carousel showArrows={true} >

                <video style={{ 'max-width': "100%" }} controls autoPlay loop muted>
                    <source src={babyGame} type='video/mp4' />
                    <img src={babyGameThumbNail} height="50" alt='pic' />
                </video>

                <video style={{ 'max-width': "100%" }} controls autoPlay loop muted>
                    <source src={findLuvVid} type='video/mp4' />
                    <img src={findLuvVivThumbNail} height="50" alt='pic' />
                </video>

                <video style={{ 'max-width': "100%" }} controls autoPlay loop muted>
                    <source src={projectRitter} type='video/mp4' />
                    <img src={projectRitterThumbnail} height="50" alt='pic' />
                </video>

            </Carousel>
        </div>


    )
}

export default Portfolio