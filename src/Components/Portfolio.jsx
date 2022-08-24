import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import drawingAppThumbnail from '../Assets/thumbnails/drawingAppThumbnail.png'
import babyGameThumbNail from '../Assets/thumbnails/babyName.png'
import findLuvVivThumbNail from '../Assets/thumbnails/findLuvThumbnail.png'
import projectRitterThumbnail from '../Assets/thumbnails/projectRitterThumbNail.png'
import teamGeneratorThumbnail from '../Assets/thumbnails/reandom-team-gen-thumbnail.png'
import rubiksCubeThumbnail from '../Assets/thumbnails/rubiksCubeThumbnail.png'
import pokeDexThumbnail from '../Assets/thumbnails/pokeDexThumbnail.png'
import tvGuideThumbnail from '../Assets/thumbnails/tvGuideThumbnail.png'
import ebayThumbnail from '../Assets/thumbnails/ebayThumbnail.png'

const Portfolio = ({ innerWidth }) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleChange = (index) => {
        console.log(index)
        setCurrentSlide(index)
    }

    const displayDescription = () => {
        switch (currentSlide) {
            case 0:
                return 'Guess baby name game'
                break;
            case 1:
                return 'Find luv chat demo'
                break;
            case 2:
                return 'Project ritter a social media twitter clone'
                break;
            case 3:
                return 'A 3D interactive Rubick\'s cube made with Three.js'
                break;
            case 4:
                return 'Random team generator made as a side project'
                break;
            case 5:
                return 'Pokemon card search application'
                break;
            case 6:
                return 'Pixel art drawing app'
                break;
            case 7:
                return 'Ebay page replica'
                break;
            case 8:
                return 'TV show search app'
                break;
            default:
                return ''
        }
    }

    return (
        <div className='carouselMainContainer' >
            <Carousel showArrows={true} onChange={handleChange}>

                <iframe className="babyGameVid" width="560" height={innerWidth > 600 ? '415' : '315'} src="https://www.youtube.com/embed/ZzzN1BS2jfM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={babyGameThumbNail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height={innerWidth > 600 ? '415' : '315'} src="https://www.youtube.com/embed/Z5RqlOc3cz4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={findLuvVivThumbNail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height={innerWidth > 600 ? '415' : '315'} src="https://www.youtube.com/embed/u7sE2hLOOYA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={projectRitterThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height={innerWidth > 600 ? '415' : '315'} src="https://www.youtube.com/embed/oXsrGTnkNNQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={rubiksCubeThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height={innerWidth > 600 ? '415' : '315'} src="https://www.youtube.com/embed/7aN5yAXKZlo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={teamGeneratorThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height={innerWidth > 600 ? '415' : '315'} src="https://www.youtube.com/embed/GE3VZwhK0Hs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={pokeDexThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height={innerWidth > 600 ? '415' : '315'} src="https://www.youtube.com/embed/iogcURRFVLI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={drawingAppThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height={innerWidth > 600 ? '415' : '315'} src="https://www.youtube.com/embed/TMpHwaeaxuI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={ebayThumbnail} height="50" alt='pic' />
                </iframe>

                <iframe width="560" height={innerWidth > 600 ? '415' : '315'} src="https://www.youtube.com/embed/iUtceOoW4iE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    <img src={tvGuideThumbnail} height="50" alt='pic' />
                </iframe>
            </Carousel>
            <p>{displayDescription()}</p>
        </div>


    )
}

export default Portfolio