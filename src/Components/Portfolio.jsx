import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

import drawingApp from '../Assets/videos/drawingDemoTrim.mov'
import drawingAppThumbnail from '../Assets/thumbnails/drawingAppThumbnail.png'
import babyGame from '../Assets/videos/GuessBabyNameGame.mov'
import babyGameThumbNail from '../Assets/thumbnails/babyName.png'
import findLuvVid from '../Assets/videos/FullChatDemo.mov'
import findLuvVivThumbNail from '../Assets/thumbnails/findLuvThumbnail.png'
import projectRitter from '../Assets/videos/ProjectRitterDemo.mov'
import projectRitterThumbnail from '../Assets/thumbnails/projectRitterThumbNail.png'
import teamGenerator from '../Assets/videos/random-team-gen-demo.mov'
import teamGeneratorThumbnail from '../Assets/thumbnails/reandom-team-gen-thumbnail.png'
import rubiksCube from '../Assets/videos/RubiksCubeDemo.mov'
import rubiksCubeThumbnail from '../Assets/thumbnails/rubiksCubeThumbnail.png'
import pokeDex from '../Assets/videos/pokeDexDemo.mov'
import pokeDexThumbnail from '../Assets/thumbnails/pokeDexThumbnail.png'




const Portfolio = () => {

    useEffect(() => {

        if (window.innerWidth < 900) {
            let videos = document.querySelectorAll('video')
            videos.forEach(elem => elem.pause())
        }
    }, [])

    const handleClick = () => {
        console.log("clicked")
    }

    return (
        <div className='carouselMainContainer' >
            <Carousel showArrows={true} >

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} loop autoPlay controls muted>
                    <source src={babyGame} type='video/mp4' />
                    <img src={babyGameThumbNail} onClick={handleClick} height="50" alt='pic' />
                </video>

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} loop autoPlay controls muted>
                    <source src={findLuvVid} type='video/mp4' />
                    <img src={findLuvVivThumbNail} height="50" alt='pic' />
                </video>

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} loop autoPlay controls muted>
                    <source src={projectRitter} type='video/mp4' />
                    <img src={projectRitterThumbnail} height="50" alt='pic' />
                </video>

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} loop autoPlay controls muted>
                    <source src={teamGenerator} type='video/mp4' />
                    <img src={teamGeneratorThumbnail} height="50" alt='pic' />
                </video>

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} loop autoPlay controls muted>
                    <source src={rubiksCube} type='video/mp4' />
                    <img src={rubiksCubeThumbnail} height="50" alt='pic' />
                </video>

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} loop autoPlay controls muted >
                    <source src={drawingApp} type='video/mp4' />
                    <img src={drawingAppThumbnail} height="50" alt='pic' />
                </video>

                <video style={{ 'maxWidth': "90%", 'height': '90%' }} loop autoPlay controls muted >
                    <source src={pokeDex} type='video/mp4' />
                    <img src={pokeDexThumbnail} height="50" alt='pic' />
                </video>

            </Carousel>
        </div>


    )
}

export default Portfolio