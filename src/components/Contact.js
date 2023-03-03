import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'; 
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1gazks5', 'template_73j0eui', form.current, 'tpkiOg0kR3AsG88ak')
        .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

    const sendBtnAnimation = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your email has been sent. Thank You!',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <section id='contact' className='py-16 lg:section'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <motion.div 
                    variants={fadeIn('right', 0.3)} 
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}} 
                    className='flex-1 flex justify-start  items-center'>
                        <div>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!</h2>
                        </div>
                    </motion.div>
                    <motion.form 
                        variants={fadeIn('left', 0.5)} 
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                    ref={form} onSubmit={sendEmail} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
                        <label>Name</label>
                        <input type="text" name="user_name" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ' />
                        <label>Email</label>
                        <input type="email" name="user_email" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all ' />
                        <label>Message</label>
                        <textarea name="message" className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' />
                        <input onClick={sendBtnAnimation} className='btn btn-lg font-secondary' type="submit" value="Send" />
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact