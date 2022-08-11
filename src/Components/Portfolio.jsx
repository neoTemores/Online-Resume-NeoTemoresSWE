import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

import babyGame from '../Assets/videos/GuessBabyNameGame.mov'
import babyGameThumbNail from '../Assets/thumbnails/babyName.png'
import findLuvVid from '../Assets/videos/FullChatDemo.mov'
import findLuvVivThumbNail from '../Assets/thumbnails/findLuvThumbnail.png'
import projectRitter from '../Assets/videos/ProjectRitterDemo.mov'
import projectRitterThumbnail from '../Assets/thumbnails/projectRitterThumbNail.png'
import teamGenerator from '../Assets/videos/random-team-gen-demo.mov'
import teamGeneratorThumbnail from '../Assets/thumbnails/reandom-team-gen-thumbnail.png'



const Portfolio = () => {

    useEffect(() => {

        if (window.innerWidth < 900) {
            let videos = document.querySelectorAll('video')
            videos.forEach(elem => elem.pause())
        }

    })


    return (
        <div className='carouselMainContainer' >
            <Carousel showArrows={true} >

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} autoPlay controls muted>
                    <source src={babyGame} type='video/mp4' />
                    <img src={babyGameThumbNail} height="50" alt='pic' />
                </video>

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} autoPlay controls muted>
                    <source src={findLuvVid} type='video/mp4' />
                    <img src={findLuvVivThumbNail} height="50" alt='pic' />
                </video>

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} autoPlay controls muted>
                    <source src={projectRitter} type='video/mp4' />
                    <img src={projectRitterThumbnail} height="50" alt='pic' />
                </video>

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} autoPlay controls muted>
                    <source src={teamGenerator} type='video/mp4' />
                    <img src={teamGeneratorThumbnail} height="50" alt='pic' />
                </video>

            </Carousel>
        </div>


    )
}

export default Portfolio