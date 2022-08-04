import React from 'react'

const Education = ({ showSkill }) => {
    return (
        <div><h4>Education</h4>
            {showSkill.Education && <p>--My Education Skills go here!</p>}
        </div>
    )
}

export default Education