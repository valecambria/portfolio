import React from 'react'
import Logo from '../assets/logo4.png'
const Header = () => {
    return (
    <header className='py-8'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <a href='#'>
                    <img src={Logo} width='170px' alt='logo'/>
                </a>
                <a href='#contact'>
                <button className='btn font-secondary btn-sm'>Work with me</button>
                </a>
            </div>
        </div>
    </header>
    )
}

export default Header