import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { BsDot } from 'react-icons/bs'

const Header = () => {
    return (
        <div className='HeaderContainer'>
            <h1>Neo Temores</h1>
            <div className='contactInfo'>
                <h6>Chino, CA</h6>
                <GoPrimitiveDot />
                <h6>(909) 287-4873</h6>
                <GoPrimitiveDot />
                <h6>TemoresNeo@gmail.com</h6>
            </div>
        </div>
    )
}

export default Header