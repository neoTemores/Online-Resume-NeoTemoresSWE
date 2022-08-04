import React from 'react';
import pdf from '../Assets/NeoTemores-ResumeSWE.pdf'

const Links = ({ showSkill }) => {
    return (
        <div><h4>Links</h4>
            {showSkill.Links && <p>--My Links  go here!</p>}
        </div>
    )
}

export default Links

// <a href='./Assets/NeoTemores ResumeSWE.pdf' download>Click to download</a>
{/* <a href={pdf} >Click to view</a> */ }