import React from 'react'
import ProfilePic from '../Assets/profile-pic1.jpeg'

const Summary = () => {

    return (

        <div className='SummaryContainer'>
            {/* <div className='profileImgDiv'> */}
            <img src={ProfilePic} alt='pic' className='profilePicture' />
            {/* </div> */}

            <ul className='summaryUL'>
                <li className='summaryLI'>Full-stack software engineer capable of creating and deploying JavaScript React applications</li>
                <li className='summaryLI'>Enjoys problem-solving and possesses strong communication, customer service and design skills</li>
                <li className='summaryLI'>US Army veteran with a passion for software development, seeking a long-term career in the software industry</li>
            </ul>

        </div>

    )
}

export default Summary