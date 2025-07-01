import React from 'react'
import TextAimation from './TextAnimation'
import Image from 'next/image'
import { motion } from 'framer-motion';


const HeroSection = () => {

  return (
    <motion.div
      initial={{y: -300, opacity: 0}}
      whileInView={{
          y:0, opacity:1,
          transition: {
              type:"spring",
              bounce:0.25,
              duration:5,
          }
      }}
      viewport={{once: true}}
    className='HeroSec'>


        <motion.div
        initial={{y: -300, opacity: 0}}
        whileInView={{
            y:0, opacity:1,
            transition: {
                type:"spring",
                bounce:0.25,
                duration:5,
            }
        }}
        viewport={{once: true}}
        className=''>

          <h1 className='text-xl font-bold'>Hi I am </h1>
          <h1 className='text-orange-500 text-xl font-bold'>Eze Israel Oluomachukwu</h1>
          <h1 className='text-green-500 text-2xl md:text-6xl font-bold'>Front~End</h1>
          <h1 className='text-green-500 text-2xl md:text-6xl font-bold ml-24 md:ml-44'>Developer</h1>
      <p><TextAimation /></p>

       <motion.a
          href="https://wa.me/+2347061033459" rel="norerrer" target='_blank'
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="inline-block mt-6 bg-green-600 text-white px-6 py-4 rounded-full shadow hover:bg-green-700 hover:scale-105 transition-transform duration-300"
        >
          Contact Me
        </motion.a>

          </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          className="mx-auto mb-6"
        >
          <Image
            src="/images/KingT1.png" 
            alt="Eze Israel"
            width={360}
            height={360}
            className="rounded-full object-cover mx-auto border-4 border-green-300 shadow-md"
          />
        </motion.div>
       
      </motion.div>
  )
}

export default HeroSection

