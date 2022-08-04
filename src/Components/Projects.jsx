import React from 'react'

const Projects = ({ showSkill }) => {
    return (
        <div><h4>Projects</h4>
            {showSkill.Projects && <p>--My Projects Skills go here!</p>}
        </div>
    )
}

export default Projects