import React from 'react';
import pdf from '../Assets/NeoTemores-ResumeSWE.pdf'

const Links = () => {
    return (
        <div>
            <p>--My Links  go here!</p>
            <a href={pdf} >Click to view my resume</a><br />
            <a href={pdf} download>Click to download my resume</a>
        </div>
    )
}

export default Links
