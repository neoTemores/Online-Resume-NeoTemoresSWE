import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { BsDot } from 'react-icons/bs'

const Header = () => {
    return (
        <div className='headerWraper'>
            <div className='HeaderContainer'>
                <h1>Neo Temores</h1>
                <p>- Full stack software engineer -</p>
                <div className='contactInfo'>
                    <h5>Chino, CA</h5>
                    <GoPrimitiveDot />
                    <h5>(909) 287-4873</h5>
                    <GoPrimitiveDot />
                    <h5>TemoresNeo@gmail.com</h5>
                </div>
            </div>
        </div>
    )
}

export default Header