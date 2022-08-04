import React from 'react'

const TechnicalSkills = ({ showSkill }) => {
    return (
        <div><h4>Technical Skills</h4>
            {showSkill.TechnicalSkills && <div>
                <p>Front End | JavaScript (ES5 and ES6), React, HTML5, CSS3</p>
                <p>Back End | Node.js, Express, PostgreSQL, RESTful API Development</p>
                <p>Testing/Deployment | Jest, Heroku</p>
                <p>Developer Tools | Git, npm, Webpack, Babel, Agile Methodology</p>
            </div>}
        </div>
    )
}

export default TechnicalSkills