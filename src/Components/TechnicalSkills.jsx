import React from 'react'
import nodeJs from '../Assets/logos/node-js-48.png'
import javascriptIcon from '../Assets/logos/javascript-48.png'
import reactIcon from '../Assets/logos/react-48.png'
import htmlIcon from '../Assets/logos/html-5-48.png'
import cssIcon from '../Assets/logos/css3-48.png'
import expressIcon from '../Assets/logos/icons8-javascript-45.png'
import postgresIcon from '../Assets/logos/postgresql-48.png'
import restApi from '../Assets/logos/icons8-rest-api-48.png'
import jestLogo from '../Assets/logos/jest-48.png'
import herokuLogo from '../Assets/logos/heroku-48.png'
import gitLogo from '../Assets/logos/git-48.png'
import githubLogo from '../Assets/logos/github-48.png'
import npmLogo from '../Assets/logos/npm-48.png'
import webpackLogo from '../Assets/logos/webpack-48.png'
import babelLogo from '../Assets/logos/babel-48.png'
import agileLogo from '../Assets/logos/agile-48 (1).png'
import netlify from '../Assets/logos/netlify-48.png'

const TechnicalSkills = () => {
    return (

        <div className='TechnicalSkillsContainer'>

            <p>Front End |</p>
            <div className='frontEndSkillsContainer'>
                <img src={javascriptIcon} alt='JS icon' />
                <img src={reactIcon} alt='react icon' />
                <img src={htmlIcon} alt='html icon' />
                <img src={cssIcon} alt='css icon' />
                <span>JavaScript</span>
                <span>React</span>
                <span>HTML5</span>
                <span>CSS3</span>
            </div>

            <br />

            <p>Back End |</p>
            <div className='backEndSkillsContainer'>
                <img src={nodeJs} alt='node icon' />
                <img className='skillLogoBackgroundSquare' src={expressIcon} alt='express icon' />
                <img src={postgresIcon} alt='node icon' />
                <img src={restApi} alt='rest icon' />
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>RESTful API Development</span>
            </div>

            <br />

            <p>Testing/Deployment |</p>
            <div className='testingDeploymentSkillsContainer'>
                <img src={jestLogo} alt='jest icon' />
                <img src={herokuLogo} alt='heroku icon' />
                <img src={netlify} alt='heroku icon' />
                <img src={'https://surge.sh/images/logos/svg/surge-logo.svg'} height="48px" width="48px" alt='surge icon' />
                <span>Jest</span>
                <span>Heroku</span>
                <span>Netlify</span>
                <span>Surge</span>
            </div>

            <br />

            <p>Developer Tools |</p>
            <div className='devToolsSkillsContainer'>
                <img src={gitLogo} alt='git icon' />
                <img className="skillLogoBackgroundCircle" src={githubLogo} alt='github icon' />
                <img src={npmLogo} alt='npm icon' />
                <img src={webpackLogo} alt='webpack icon' />
                <img src={babelLogo} alt='babel icon' />
                <img src={agileLogo} alt='agile icon' />
                <span>Git</span>
                <span>GitHub</span>
                <span>NPM</span>
                <span>Webpack</span>
                <span>Babel</span>
                <span>Agile methodology</span>
            </div>

        </div>
    )
}

export default TechnicalSkills