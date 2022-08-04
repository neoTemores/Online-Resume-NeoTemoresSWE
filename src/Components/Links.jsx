import React from 'react';
import pdf from '../Assets/NeoTemores-ResumeSWE.pdf'

const Links = () => {
    return (
        <div>
            <p>--My Links  go here!</p>
            <a href='./Assets/NeoTemores ResumeSWE.pdf' download>Click to download</a>
            <a href={pdf} >Click to view</a>
        </div>
    )
}

export default Links
