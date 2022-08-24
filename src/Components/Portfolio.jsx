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
                return (
                    <div className='videoDescription'>
                        <h1>Wheel of Fortune game</h1>
                        <p>I built this application because my wife and I wanted to play a "guess the baby name" game at her babyshower. The game was a huge success and our family had a great time playing!</p>
                        <p>This app was built using JavaScript React. Each tile is rendered using a reusable 'tile' component. I used the 'onClick' attribute and 'useState' hook to dynamically change the blank tile to display the letter when clicked on.</p>
                    </div>
                )
            case 1:
                return (
                    <div className='videoDescription'>
                        <h1>FindLuv Dating app</h1>
                        <p>This application was built as part of a school project. A user is able to create an account, log in and search for other users based on dating match preferences that are set within the users profile page.</p>
                        <p>This video is demonstrating the chat feature I created. The user has an inbox that contains all threads. When a thread is clicked on, the chat modal appears. The relational  SQL database includes a users table, a messages table, and a threads join table. Each time the user clicks 'send msg', the database is updated with the msg content, sender id and receipent id. The react 'useEffect' hook is used to pull new msgs from the database.</p>
                    </div>
                )
            case 2:
                return (
                    <div className='videoDescription'>
                        <h1>Project Ritter Micro Blog app</h1>
                        <p>This application is dedicated to the memory of SPC Hunter Ritter. He was a Soldier, a fellow software engineer student and my friend.</p>
                        <p>This video demonstration walks through some of the application features. A user can create an account, log in, view all posts from all users, click on a post to see posts from only that individual user, edit / delete posts made by the loged in user, change profile settings along with the option to toggle a dark theme. </p>
                        <p>I used JavaScript React Router to create the multiple pages. The navbar contains the react router 'Link' component to navigate between pages on the client side. The SQL database contains a users table and a posts table. The API was built with full CRUD (create, read, update, delete) functionality for the user and posts.</p>
                    </div>
                )
            case 3:
                return (
                    <div className='videoDescription'>
                        <h1>3D Interactive Rubik's Cube</h1>
                        <p>As part of a school project, this was my first attempt at working with the JavaScript Three.js library.I decided to build a Rubik's cube because not only do i enjoy solving them for fun, but I believed it would be a way to challenge myself.</p>
                        <p>The user is able to manipulate the cube in multiple ways. You are able to spin and rotate it by clicking and dragging the cube in the desired direction. I used 'addEventListener' to bind the movement of certain faces of the cube to specific keys.</p>
                    </div>
                )
            case 4:
                return (
                    <div className='videoDescription'>
                        <h1>Random Team Generator app</h1>
                        <p>I decided to build this application as a side project while attending Galvanize software immerseive program. At the time, our instructor had to manually asign each student to a team. I noticed that this process was a little time consuming, and so I took the initiative to create an application that would auto generate teams for our class.</p>
                        <p>The user is able to select the team size desired, and then deselect any student to omit their name from being assigned to a team. This application was built using regular vanilla JavaScript. The list on names are contained within an array. The array is randomized and then mapped over to sort the names into teams whenever the 'Generate Teams' button is clicked.</p>
                    </div>
                )
            case 5:
                return (
                    <div className='videoDescription'>
                        <h1>Pokemon Card search app</h1>
                        <p>This application was built when I was learning AJAX and the browser fetch API. When researching various APIs, I came across one that returns pokemon card data. I have always been a pokemon fan, so this project was a lot of fun.</p>
                        <p>I built this app using vanilla JavaScript. This project also allowed me to practice DOM manipulation. All of the reuslts are displayed in card format, which are dynamically rendered HTML elements. Each card contains data received from the get request made to the API. Additionally, each card contains a link to purchase that individual card from a card trading site.</p>
                    </div>
                )
            case 6:
                return (
                    <div className='videoDescription'>
                        <h1>Pixel Art Drawing app</h1>
                        <p>This drawing application was written in vanilla JavaScript, without any frame works for styling.The user is able to select a color, the selected color is displayed, and then draw by clicking or dragging. The user can also erase the drawing, save the drawing by giving it a name, and recover previous drawings by entering the saved name.</p>
                        <p>The pixel canvas was created with a function that creates the individual div elements. A container div holds each pixel div with a display of 'grid'. The color choice was acheived by creating a current color variable used to asign a pixel a background color. The use of event listeners with the mouse down event allowed the dynamic changing of pixel color. Local storage was used to to save the drawing as an array of colored div elements.</p>
                    </div>
                )
            case 7:
                return (
                    <div className='videoDescription'>
                        <h1>Ebay Item page replica</h1>
                        <p>This site was created as part of a team project, with the intent to recreate an Ebay item page as closely as possible. There are multiple components to this page that are being proxyed together. </p>
                        <p>This page was built using JavaSript React. The React carousel package was used to create various elements of this application. All of the item for sale data is being retrieved from a database built with node in a RESTful API convention. </p>
                    </div>
                )
            case 8:
                return (
                    <div className='videoDescription'>
                        <h1>TV Guide app</h1>
                        <p>A user is able to search for a show by entering the full or partial name. The results are displayed in card format and contain a show image, title, genre and synopsis. Each card also contains a 'view show' anchor tag, which links to a more detailed page containing all episode information. </p>
                        <p>This was one of the first applications built using AJAX and the fetch API. The input text is captured and sent as part of the query string in a fetch request to a TV guide API. The resulting array of objects is then mapped over in vanilla JavaScript to dynamically create the HTML elements.</p>
                    </div>
                )
            default:
                return (<h1>Error loading video description.</h1>)
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
            <>{displayDescription()}</>
        </div>


    )
}

export default Portfolio