import React from 'react';
import pdf from '../Assets/NeoTemores-ResumeSWE.pdf'

const Links = () => {
    return (
        <>
            <a href='./Assets/NeoTemores ResumeSWE.pdf' download>Click to download</a>
            <a href={pdf} >Click to view</a>
        </>
    )
}

export default Links