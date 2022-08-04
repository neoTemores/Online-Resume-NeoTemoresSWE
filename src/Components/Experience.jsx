import React from 'react'

const Experience = ({ showSkill }) => {
    return (
        <div><h4>Experience</h4>
            {showSkill.Experience && <p>--My Experience Skills go here!</p>}
        </div>
    )
}

export default Experience