import React, { useState } from 'react'
import Header from './Header'
import Summary from './Summary'
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Links from './Links';

const Home = () => {
    const [showSkill, setShowSkill] = useState({
        'Summary': true,
        'TechnicalSkills': false
    })

    const handleClick = (e) => {
        let id = e.currentTarget.id

        setShowSkill((prevState) => {
            return {
                'Summary': false,
                'TechnicalSkills': false,
                'Projects': false,
                'Experience': false,
                'Education': false,
                'Links': false,
                [id]: !prevState[id]
            }
        })
        // e.currentTarget.classList.toggle('hide')
    }
    return (
        <div className='MainContainer'>
            <Header />

            <nav>
                <ul className='navUL'>
                    <li onClick={handleClick} id='Summary' className='navLI'><Summary showSkill={showSkill} /></li>
                    <li onClick={handleClick} id='TechnicalSkills' className='navLI'><TechnicalSkills showSkill={showSkill} /></li>
                    <li onClick={handleClick} id='Projects' className='navLI'><Projects showSkill={showSkill} /></li>
                    <li onClick={handleClick} id='Experience' className='navLI'><Experience showSkill={showSkill} /></li>
                    <li onClick={handleClick} id='Education' className='navLI'><Education showSkill={showSkill} /></li>
                    <li onClick={handleClick} id='Links' className='navLI'><Links showSkill={showSkill} /></li>
                </ul>
            </nav>

        </div>
    )
}

export default Home