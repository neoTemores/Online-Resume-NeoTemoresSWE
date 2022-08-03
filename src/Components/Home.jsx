import React from 'react'
import '../Styles/Home.css'
import Header from './Header'
import Summary from './Summary'
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Links from './Links';

const Home = () => {
    return (
        <div className='MainContainer'>
            <Header />
            <Summary />
            <ul>
                <li><TechnicalSkills /></li>
                <li><Projects /></li>
                <li><Experience /></li>
                <li><Education /></li>
                <li><Links /></li>
            </ul>
        </div>
    )
}

export default Home