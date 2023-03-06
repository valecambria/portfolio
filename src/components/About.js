import React from 'react'
import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section id='about' className='section' ref={ref}>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                    <motion.div 
                    variants={fadeIn('right', 0.3)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.5)} 
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}} 
                        className='flex-1'>
                        <h2 className='h2 font-tertiary text-accent mt-2'>About me</h2>
                        <h3 className='h3 mb-4 font-secondary'>¡Hello there!, my name is Valentino Cambria, I am a FullStack JAVA developer</h3>
                        <p>I have created individual and grupal projects such as an event's page, a homebanking and an e-commerce page.
                            <br/>
                            I have experience in HTML, CSS3, VUE.js, React.js, BOOTSTRAP, JAVASCRIPT, JAVA, SPRINGBOOT. 
                            As well as editing programs such as Photoshop, Adobe Illustrator and Sony Vegas.
                        </p>
                        <div className='flex mt-2'>
                            <div>
                                <div className='text-[40px] font-tertiary  mb-2'>
                                    {
                                        inView ?
                                        <CountUp start={0} end={1} duration={2} repeat={Infinity}/> : null}
                                </div>
                                <div className='font-tertiary text-sm tracking-[2px]'>Years of <br/> Experience</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About