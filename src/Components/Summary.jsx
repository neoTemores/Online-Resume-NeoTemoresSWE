import React from 'react'

const Summary = ({ showSkill }) => {

    return (<>
        <div><h4>Summary</h4></div>

        {showSkill.Summary && <div className='SummaryContainer'>
            <div><img src='https://xsgames.co/randomusers/avatar.php?g=male' alt='pic' height='150px' /></div>

            <ul className='summaryUL'>
                <li className='summaryLI'>Full-stack software engineer capable of creating and deploying JavaScript React applications</li>
                <li className='summaryLI'>Enjoys problem-solving and possesses strong communication, customer service and design skills</li>
                <li className='summaryLI'>US Army veteran with a passion for software development, seeking a long-term career in the software industry</li>
            </ul>


        </div>}
    </>

    )
}

export default Summary