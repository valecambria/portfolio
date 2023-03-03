import React from 'react'
import Logo from '../assets/portfolioPhoto.png'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


const Banner = () => {
    return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                <div className='flex-1 text-center font-secondary lg:text-left'>
                    <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Valentino <span>Cambria</span></motion.h1>
                    <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                        <span className='text-white mr-2'>I am a</span>
                        <TypeAnimation sequence={['Web', 900,'Developer!', 3000]} speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
                    </motion.div>
                        <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>Hi! Hope you are doing great, what you've encountered here is my personal portfolio, i've created it to share a little bit about myself so you can get to know me and my projects aswell.</motion.p>
                        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                            <a href='#contact'>
                            <button className='btn font-secondary btn-lg'>Contact me</button>
                            </a>
                            <a href='#work' className='btn-link text-gradient font-tertiary'>My Portfolio</a>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href='https://github.com/valecambria' target="_blank" rel="noreferrer">
                                <FaGithub/>
                            </a>
                            <a href='https://www.linkedin.com/in/valentino-cambria-4938a1247/' target="_blank" rel="noreferrer">
                                <FaLinkedin/>
                            </a>
                        </motion.div>
                </div>
                <motion.div variants={fadeIn('down', 0.8)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[428px]'>
                    <img src={Logo} width='400px' alt='Profile Logo'/>
                </motion.div>
            </div>
        </div>
    </section>
    )
}

export default Banner