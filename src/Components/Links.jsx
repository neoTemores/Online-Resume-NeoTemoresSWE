import React from 'react';
import pdf from '../Assets/NeoTemores-ResumeSWE.pdf'
import linkedIn from '../Assets/logos/Linkedin-logo-on-transparent-Background-PNG-.png'

const Links = () => {
    return (
        <div>
            <p>--My Links will go here!</p>

            <a href='https://www.linkedin.com/in/neo-temores/' rel="noreferrer" target="_blank"><img src={linkedIn} height='50' alt='linkedIn' /></a><br />
            <a href={pdf} >Click to view my resume</a><br />
            <a href={pdf} download>Click to download my resume</a>
        </div>
    )
}

export default Links
