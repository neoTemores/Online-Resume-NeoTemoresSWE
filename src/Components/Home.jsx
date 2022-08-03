import React from 'react'
import Header from './Header'
import Summary from './Summary'
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Links from './Links';

const Home = () => {
    const handleClick = (e) => {
        console.log(e.target)
    }
    return (
        <div className='MainContainer'>
            <Header />

            <nav>
                <ul className='navUL'>
                    <li onClick={handleClick} id='Summary' className='navLI'><Summary /></li>
                    <li onClick={handleClick} id='TechnicalSkills' className='navLI'><TechnicalSkills /></li>
                    <li onClick={handleClick} id='Projects' className='navLI'><Projects /></li>
                    <li onClick={handleClick} id='Experience' className='navLI'><Experience /></li>
                    <li onClick={handleClick} id='Education' className='navLI'><Education /></li>
                    <li onClick={handleClick} id='Links' className='navLI'><Links /></li>
                </ul>
            </nav>

        </div>
    )
}

export default Home