import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import { Navigation, Pagination, Scrollbar, Autoplay, Parallax, } from "swiper/modules";
// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";




const Myservices: React.FC = () => {
  return (
    <div className='services'>
<section className=" mb-8 ">
    <h2 className='text-center rounded bg-white font-bold text-2xl md:text-4xl '> MY SERVICES </h2>
<div>
<Swiper
    autoplay={{
        delay:5000,
        disableOnInteraction: false,
    }}
    loop={true}
    speed={600}
    parallax={true}
    // pagination={{
    //     clickable: true,
    // }}
    navigation={false}
    scrollbar={{
        draggable: true
    }}
    modules={[Autoplay, Parallax, Pagination, Navigation , Scrollbar]}
    className='mySwiper'
    
    >
    <div
    slot='container-start'
    className='parallax-bg'
    data-swiper-parallax="23#"
    >
    </div>

    <SwiperSlide>
            <Image 
            src="/images/homePIX.jpg"
            width={400}
            height={400}
            alt='CRUP-PIX'
            className='swiper-pix'
            />
            <div className='swiper-text'>
            <motion.h1
            initial={{y:-200, opacity:0}}
            whileInView={{
                y:0, opacity: 1,
                transition: {
                    type:"spring",
                    bounce:0.4,
                    duration:2.5
                }
                
            }}
                >
                <p className='caption  p-4 text-yellow-900 text-2xl  md:text-4xl' data-swiper-parallax= "-300">
                    Some of My Services
                </p>
                
             </motion.h1>
            </div>
        </SwiperSlide>
    <SwiperSlide>
            <Image 
            src="/images/e-commercePIX.jpg"
            width={400}
            height={400}
            alt='CRUP-PIX'
            className='swiper-pix'
            />
            <div className='swiper-text'>
            <motion.h1
            initial={{y:-200, opacity: 0}}
            whileInView={{
                y:0, opacity:1,
                transition: {
                    type:"spring",
                    bounce:0.4,
                    duration:2.5
                }
            }}
            
                >
                <p className='caption  p-4 text-green-500 text-2xl  md:text-4xl' data-swiper-parallax= "-300">
                    E-commerce websites for Business
                </p>
             </motion.h1>
            </div>
        </SwiperSlide>
     <SwiperSlide>
      <Image 
          src="/images/OnlineEducation.jpg"
          width={400}
          height={400}
          alt='Education-PIX'
          className='swiper-pix'
           
           />
         <div className='swiper-text'>
          <motion.h1
          initial={{y:-200}}
          whileInView={{
              y:0,
              transition: {
                  type:"spring",
                  bounce:0.4,
                  duration:2.5
              }
          }}
            >
            <p className='caption  p-4 text-black-500 text-xl  md:text-4xl' data-swiper-parallax= "-300">
               I build Educational Websites 
            </p>
            </motion.h1>
            
        </div>

     </SwiperSlide>
     <SwiperSlide>
      <Image 
          src="/images/BlogPIX.jpg"
          width={400}
          height={400}
          alt='CRUP-PIX'
          className='swiper-pix'
           
           />
         <div className='swiper-text'>
          <motion.h1
          initial={{y:-200}}
          whileInView={{
              y:0,
              transition: {
                  type:"spring",
                  bounce:0.4,
                  duration:2.5
              }
          }}
            >
            <p className='caption  p-4 text-black-500 text-xl  md:text-4xl' data-swiper-parallax= "-300">
               I Build Blog sites
            </p>
            
            </motion.h1>
            
        </div>

     </SwiperSlide>
     <SwiperSlide>
      <Image 
          src="/images/logisticPix.jpg"
          width={400}
          height={400}
          alt='logistic-PIX'
          className='swiper-pix'
           
           />
         <div className='swiper-text'>
          <motion.h1
          initial={{y:-200}}
          whileInView={{
              y:0,
              transition: {
                  type:"spring",
                  bounce:0.4,
                  duration:2.5
              }
          }}
            >
            <p className='caption  p-4 text-green-500 text-xl  md:text-4xl' data-swiper-parallax= "-300">
             Logistics Websites for International and Local Shippings
            </p>
          </motion.h1>
            
        </div>

     </SwiperSlide>
     <SwiperSlide>
      <Image 
          src="/images/BankingPIX.jpg"
          width={400}
          height={400}
          alt='Bank-PIX'
          className='swiper-pix'
           
           />
         <div className='swiper-text'>
          <motion.h1
          initial={{y:-200}}
          whileInView={{
              y:0,
              transition: {
                  type:"spring",
                  bounce:0.4,
                  duration:2.5
              }
          }}
            >
            <p className='caption  p-4 text-green-500 text-xl  md:text-4xl' data-swiper-parallax= "-300">
             Fintech and Banking Websites
            </p>
            </motion.h1>
            
        </div>

     </SwiperSlide>
     <SwiperSlide>
      <Image 
          src="/images/realESTATE.jpg"
          width={400}
          height={400}
          alt='Company-PIX'
          className='swiper-pix'
           
           />
         <div className='swiper-text'>
          <motion.h1
          initial={{y:-200}}
          whileInView={{
              y:0,
              transition: {
                  type:"spring",
                  bounce:0.4,
                  duration:2.5
              }
          }}
            >
            <p className='caption  p-4 text-orange-600 text-xl  md:text-4xl' data-swiper-parallax= "-300">
               Real Estate websites for your  Home  and landed properties
            </p>
          </motion.h1>
            
        </div>

     </SwiperSlide>

</Swiper>


</div>
</section>
</div>
)
}

export default Myservices


