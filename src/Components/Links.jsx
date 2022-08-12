import React from 'react';
import pdf from '../Assets/NeoTemores-ResumeSWE.pdf'
import linkedIn from '../Assets/logos/Linkedin-logo-on-transparent-Background-PNG-.png'
import gitHub from '../Assets/logos/github-48.png'
import openResume from '../Assets/logos/resume-open.png'
import downloadResume from '../Assets/logos/resume-download.png'
import emailIcon from '../Assets/logos/email-icon.png'

const Links = () => {
    return (
        <div>
            <div className='linksContainer'>
                <a href='https://www.linkedin.com/in/neo-temores/' rel="noreferrer" target="_blank"><img src={linkedIn} height='50' alt='linkedIn' /></a>

                <a href='https://github.com/neoTemores' rel="noreferrer" target="_blank"><img src={gitHub} height='50' alt='github' /></a>

                <div className='linksWithTextDiv'>
                    <a href="mailto:TemoresNeo@gmail.com"><img src={emailIcon} height='50' alt='email' /></a>
                    <a className="linksAnchorTag" href="mailto:TemoresNeo@gmail.com" >Email me</a>
                </div>

                <div className='linksWithTextDiv'>
                    <a href={pdf} target="_blank" rel="noreferrer"><img src={openResume} height='50' alt='open resume' /></a>
                    <a className="linksAnchorTag" href={pdf} target="_blank" rel="noreferrer">View resume</a>
                </div>

                <div className='linksWithTextDiv'>
                    <a href={pdf} download><img src={downloadResume} height='50' alt='download resume' /></a>
                    <a className="linksAnchorTag" href={pdf} download>Download resume</a>
                </div>



            </div>


        </div>
    )
}

export default Links
