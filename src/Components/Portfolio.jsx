import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

// import drawingApp from '../Assets/videos/drawingDemoTrim.mov'
import drawingAppThumbnail from '../Assets/thumbnails/drawingAppThumbnail.png'
// import babyGame from '../Assets/videos/GuessBabyNameGame.mov'
import babyGameThumbNail from '../Assets/thumbnails/babyName.png'
// import findLuvVid from '../Assets/videos/FullChatDemo.mov'
import findLuvVivThumbNail from '../Assets/thumbnails/findLuvThumbnail.png'
// import projectRitter from '../Assets/videos/ProjectRitterDemo.mov'
import projectRitterThumbnail from '../Assets/thumbnails/projectRitterThumbNail.png'
// import teamGenerator from '../Assets/videos/random-team-gen-demo.mov'
import teamGeneratorThumbnail from '../Assets/thumbnails/reandom-team-gen-thumbnail.png'
// import rubiksCube from '../Assets/videos/RubiksCubeDemo.mov'
import rubiksCubeThumbnail from '../Assets/thumbnails/rubiksCubeThumbnail.png'
// import pokeDex from '../Assets/videos/pokeDexDemo.mov'
import pokeDexThumbnail from '../Assets/thumbnails/pokeDexThumbnail.png'
// import tvGuide from '../Assets/videos/tvGuideDemo.mov'
import tvGuideThumbnail from '../Assets/thumbnails/tvGuideThumbnail.png'
// import simpsons from '../Assets/videos/simpsonsDemo.mov'
// import simpsonsThumbnail from '../Assets/thumbnails/simpsonsThumbnail.png'
// import ebay from '../Assets/videos/ebayDemo.mov'
import ebayThumbnail from '../Assets/thumbnails/ebayThumbnail.png'

const Portfolio = () => {

    useEffect(() => {

        if (window.innerWidth < 900) {
            let videos = document.querySelectorAll('video')
            videos.forEach(elem => elem.pause())
        }
    }, [])



    // const createVideoDisplay = (video, thumbnail) => {
    //     return (
    //         <video style={{ 'maxWidth': "90%", 'height': '90%' }} loop autoPlay controls muted>
    //             <source src={video} type='video/mp4' />
    //             <img src={thumbnail} height="50" alt='pic' />
    //         </video>
    //     )
    // }

    return (
        <div className='carouselMainContainer' >
            <Carousel showArrows={true} >
                <iframe width="560" height="415" src="https://www.youtube.com/embed/ZzzN1BS2jfM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                    <img src={babyGameThumbNail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height="415" src="https://www.youtube.com/embed/Z5RqlOc3cz4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={findLuvVivThumbNail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height="415" src="https://www.youtube.com/embed/u7sE2hLOOYA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={projectRitterThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height="415" src="https://www.youtube.com/embed/oXsrGTnkNNQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={rubiksCubeThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height="415" src="https://www.youtube.com/embed/7aN5yAXKZlo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={teamGeneratorThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height="415" src="https://www.youtube.com/embed/GE3VZwhK0Hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    <img src={pokeDexThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height="415" src="https://www.youtube.com/embed/iogcURRFVLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    <img src={drawingAppThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height="415" src="https://www.youtube.com/embed/TMpHwaeaxuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    <img src={ebayThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height="415" src="https://www.youtube.com/embed/iUtceOoW4iE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    <img src={tvGuideThumbnail} height="50" alt='pic' />
                </iframe>

                {/* {createVideoDisplay(babyGame, babyGameThumbNail)} */}
                {/* {createVideoDisplay(findLuvVid, findLuvVivThumbNail)}
                {createVideoDisplay(projectRitter, projectRitterThumbnail)}
                {createVideoDisplay(teamGenerator, teamGeneratorThumbnail)}
                {createVideoDisplay(rubiksCube, rubiksCubeThumbnail)}
                {createVideoDisplay(drawingApp, drawingAppThumbnail)}
                {createVideoDisplay(pokeDex, pokeDexThumbnail)}
                {createVideoDisplay(tvGuide, tvGuideThumbnail)}
                {createVideoDisplay(ebay, ebayThumbnail)} */}
                {/* {createVideoDisplay(simpsons, simpsonsThumbnail)} */}
            </Carousel>
        </div>


    )
}

export default Portfolio