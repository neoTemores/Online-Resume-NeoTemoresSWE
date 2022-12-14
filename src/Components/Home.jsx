import React, { useState, useEffect } from 'react'
import Header from './Header'
import Summary from './Summary'
import TechnicalSkills from './TechnicalSkills';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Education from './Education';
import Links from './Links';

import { FaChevronDown } from 'react-icons/fa'
import ufo2 from '../Assets/icons8-spaceship-66 (1).png'

const Home = () => {
    const [innerWidth, setInnerWidth] = useState(null)

    useEffect(() => {
        setInnerWidth(window.innerWidth)

        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth)
        }
        )
    }, [])

    const [showSkill, setShowSkill] = useState({
        'Summary': false,
        'TechnicalSkills': false,
        'Portfolio': false,
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
                'Portfolio': false,
                'Experience': false,
                'Education': false,
                'Links': false,
                [id]: !prevState[id]
            }
        })

        if (showSkill[id]) { return window.scrollTo(0, 0) }

        setTimeout(() => {
            let activeDiv = document.getElementById(id)
            activeDiv.scrollIntoView({ behavior: "smooth" })
        }, 100)

    }

    useEffect(() => {
        for (const key in showSkill) {
            let arrow = document.querySelector(`.${key}`)
            let title = document.getElementById(key)

            if (showSkill[key]) {
                arrow.classList.add('rotateArrowOpen')
                arrow.classList.remove('rotateArrowClosed')

                title.classList.add('activeNavTitle')
            }

            else {
                arrow.classList.remove('rotateArrowOpen')
                arrow.classList.add('rotateArrowClosed')

                title.classList.remove('activeNavTitle')
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

                    {showSkill.TechnicalSkills && <li className='navLI skillInfo'><TechnicalSkills innerWidth={innerWidth} /></li>}

                    <li onClick={handleClick} id='Portfolio' className='navLI'>
                        <div className='navlistTitle'>
                            <h4>Portfolio</h4><FaChevronDown className='Portfolio' />
                        </div>
                    </li>

                    {showSkill.Portfolio && <li className='navLI skillInfo'><Portfolio innerWidth={innerWidth} /></li>}

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

                    {showSkill.Links && <li className='navLI skillInfo'><Links innerWidth={innerWidth} /></li>}

                </ul>
            </nav>

            <div className='ufoContainer'>
                <img className="ufoImg" src={ufo2} alt='ufo' />
            </div>
        </div>
    )
}

export default Home