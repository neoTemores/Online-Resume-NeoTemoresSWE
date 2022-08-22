import React, { useEffect, useState } from 'react'

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
import netlify from '../Assets/logos/nelify-48.png'
import surge from '../Assets/logos/surge-logo.svg'
import macOS from '../Assets/logos/mac-logo-48.png'
import windowsOS from '../Assets/logos/windows-10-48.png'
import cli from '../Assets/logos/command-line-48.png'
import vsCode from '../Assets/logos/visual-studio-code-2019-48.png'


const TechnicalSkills = () => {
    const [innerWidth, setInnerWidth] = useState(null)

    useEffect(() => {
        setInnerWidth(window.innerWidth)

        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth)
        }
        )
    }, [])

    return (

        <div className='TechnicalSkillsContainer'>

            <p className="firstTechSkillTitle">Front End</p>
            <div className='frontEndSkillsContainer'>
                <img src={javascriptIcon} alt='JS icon' />
                <img src={reactIcon} alt='react icon' />
                <img src={htmlIcon} alt='html icon' />
                <img src={cssIcon} alt='css icon' />
                <span className='skillDescription'>JavaScript</span>
                <span className='skillDescription'>React</span>
                <span className='skillDescription'>HTML5</span>
                <span className='skillDescription'>CSS3</span>
            </div>

            <br />

            <p className="techSkillTitle">Back End</p>
            <div className='backEndSkillsContainer'>
                <img src={nodeJs} alt='node icon' />
                <img className='skillLogoBackgroundSquare' src={expressIcon} alt='express icon' />
                <img src={postgresIcon} alt='node icon' />
                <img src={restApi} alt='rest icon' />
                <span className='skillDescription'>Node.js</span>
                <span className='skillDescription'>Express</span>
                <span className='skillDescription'>PostgreSQL</span>
                <span className='skillDescription'>RESTful API Development</span>
            </div>

            <br />

            <p className="techSkillTitle">Testing & Deployment</p>
            <div className='testingDeploymentSkillsContainer'>
                <img src={jestLogo} alt='jest icon' />
                <img src={herokuLogo} alt='heroku icon' />
                <img src={netlify} alt='heroku icon' />
                <img src={surge} height="48px" width="48px" alt='surge icon' />

                <span className='skillDescription'>Jest</span>
                <span className='skillDescription'>Heroku</span>
                <span className='skillDescription'>Netlify</span>
                <span className='skillDescription'>Surge</span>
            </div>

            <br />

            <p className="techSkillTitle">Developer Tools</p>
            <div className='devToolsSkillsContainer'>

                <div className='devToolItem'>
                    <img src={gitLogo} alt='git icon' />
                    <span className='skillDescription'>Git</span>
                </div>

                <div className='devToolItem'>
                    <img className="skillLogoBackgroundCircle" src={githubLogo} alt='github icon' />
                    <span className='skillDescription'>GitHub</span>
                </div>

                <div className='devToolItem'>
                    <img src={npmLogo} alt='npm icon' />
                    <span className='skillDescription'>NPM</span>
                </div>

                <div className='devToolItem'>
                    <img src={webpackLogo} alt='webpack icon' />
                    <span className='skillDescription'>Webpack</span>
                </div>

                <div className='devToolItem'>
                    <img src={babelLogo} alt='babel icon' />
                    <span className='skillDescription'>Babel</span>
                </div>

                <div className='devToolItem'>
                    <img src={agileLogo} alt='agile icon' />
                    <span className='skillDescription'>Agile methodology</span>
                </div>

                <div className='devToolItem'>
                    <img src={vsCode} alt='vsCode icon' />
                    <span className='skillDescription'>{+innerWidth > 600 ? 'Visual Studio Code' : 'VS Code'}</span>
                </div>

                <div className='devToolItem'>
                    <img src={cli} alt='cli icon' />
                    <span className='skillDescription'>{+innerWidth > 600 ? "Command Line Interface" : 'CLI'}</span>
                </div>

                <div className='devToolItem'>
                    <img src={macOS} alt='macOS icon' />
                    <span className='skillDescription'>Mac OS</span>
                </div>

                <div className='devToolItem'>
                    <img src={windowsOS} alt='windowsOS icon' />
                    <span className='skillDescription'>Windows OS</span>
                </div>

            </div>

        </div>
    )
}

export default TechnicalSkills