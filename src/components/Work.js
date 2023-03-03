import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import Img1 from '../assets/finanarg.png'
import Img2 from '../assets/extrength.png'
import Img3 from '../assets/github-bg.webp'

const Work = () => {
    return (
        <section id='work' className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div 
                    variants={fadeIn('right', 0.3)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                    className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight font-tertiary text-accent'>My Latest <br/> work</h2>
                            <p className='max-w-sm mb-16'>Here you can see a preview of my projects and if you click on them, you will be redirected to a short video showing each page and its functionalities.</p>
                        </div>
                        <a href='https://youtu.be/qbn80_fhIWA' target='_blank' rel="noreferrer">
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='Project' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='font-bold h3 font-secondary text-gradient '>Homebanking Page</span>
                                </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>FinanArg</span>
                            </div>
                        </div>
                        </a>
                    </motion.div>
                    <motion.div 
                    variants={fadeIn('left', 0.2)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                    className='flex-1 flex flex-col gap-y-10'>
                        <a href='https://youtu.be/4v0-soI-tA8' target="_blank" rel="noreferrer">
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='Project 2' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='font-bold h3 font-secondary text-gradient '>E-Commerce Page</span>
                                </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>Extrength Gym</span>
                            </div>
                        </div>
                        </a>
                    <a href='https://github.com/valecambria' target="_blank" rel="noreferrer">
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='Project 2' />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='font-bold h3 font-secondary text-gradient '>Github</span>
                                </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>Repository</span>
                            </div>
                    </div>
                    </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Work