import React, { useState, useEffect } from 'react'
import Header from './Header'
import Summary from './Summary'
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Links from './Links';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'

const Home = () => {
    const [showSkill, setShowSkill] = useState({
        'Summary': true,
        'TechnicalSkills': false,
        'Projects': false,
        'Experience': false,
        'Education': false,
        'Links': false,
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
    }

    useEffect(() => {
        for (const key in showSkill) {
            let element = document.querySelector(`.${key}`)
            if (showSkill[key]) {
                element.classList.add('rotateArrowOpen')
                element.classList.remove('rotateArrowClosed')
            }

            else {
                element.classList.remove('rotateArrowOpen')
                element.classList.add('rotateArrowClosed')
            }
        }
    }, [showSkill])

    return (
        <div className='MainContainer'>
            <Header />
            <nav>
                <ul className='navUL'>

                    <li onClick={handleClick} id='Summary' className='navLI'>
                        <div className='navlistTitle'>
                            <h4>Summary</h4> <FaChevronDown className='Summary' />
                        </div>
                    </li>

                    {showSkill.Summary && <li className='navLI skillInfo'><Summary /></li>}

                    <li onClick={handleClick} id='TechnicalSkills' className='navLI'>
                        <div className='navlistTitle'>
                            <h4>Technical Skills</h4> <FaChevronDown className='TechnicalSkills' />
                        </div>
                    </li>

                    {showSkill.TechnicalSkills && <li className='navLI skillInfo'><TechnicalSkills /></li>}

                    <li onClick={handleClick} id='Projects' className='navLI'>
                        <div className='navlistTitle'>
                            <h4>Projects</h4><FaChevronDown className='Projects' />
                        </div>
                    </li>

                    {showSkill.Projects && <li className='navLI skillInfo'><Projects /></li>}

                    <li onClick={handleClick} id='Experience' className='navLI'>
                        <div className='navlistTitle'>
                            <h4>Experience</h4><FaChevronDown className='Experience' />
                        </div>
                    </li>

                    {showSkill.Experience && <li className='navLI skillInfo'><Experience /></li>}


                    <li onClick={handleClick} id='Education' className='navLI'>
                        <div className='navlistTitle'>
                            <h4>Education</h4><FaChevronDown className='Education' />
                        </div>
                    </li>

                    {showSkill.Education && <li className='navLI skillInfo'><Education /></li>}

                    <li onClick={handleClick} id='Links' className='navLI'>
                        <div className='navlistTitle'>
                            <h4>Links</h4><FaChevronDown className='Links' />
                        </div>
                    </li>

                    {showSkill.Links && <li className='navLI skillInfo'><Links /></li>}

                </ul>
            </nav>
        </div>
    )
}

export default Home