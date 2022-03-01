import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

// const Splash = () => {
//   return (
//     <div className='bg-splash-bg bg-fixed bg-contain sm:bg-cover w-full h-screen'>
//       <div className='w-full h-full flex flex-col items-center bg-mask'>
//         <div className='slide-left-to-right pt-20 sm:pt-32 md:pt-32 lg:pt-48 xl:pt-52 text-md text-green-400'>MANAGED IT SOLUTIONS</div>
//         <h1 className='text-fade h-max mt-2 w-4/5 sm:w-1/2 text-center text-white font-sans font-extrabold text-4xl sm:text-6xl'>
//           Reliable, scalable and built for your business.
//         </h1>
//         <div className='slide-right-to-left w-1/2 mt-9 text-slate-400 text-center'>
//           Mind Risers Consortium is a forward-thinking app and website development company with many years of experience to make what you wish.
//         </div>
//         <button className='text-green-500 border-green-500 duration-500 border-2 p-3 px-6 mt-9 rounded-md hover:bg-green-500 text-xl hover:text-white'>
//           <Link to='contact'>
//             Get Started
//           </Link>
//         </button>
//       </div>
//     </div>
//   )
// }
const Splash = () => {
  return (
  <div className='relative z-[-10]'>
    <Swiper
      // @ts-expect-error
        style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff", }}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {/* <div
          slot="container-start"
          className="parallax-bg bg-splash-bg"
          data-swiper-parallax="-23%"></div> */}
          <SwiperSlide >
            <div className='bg-splash-bg bg-contain sm:bg-cover w-full h-screen'>
              <div className='w-full h-full flex flex-col items-center bg-mask'>
                <div className='slide-left-to-right pt-20 sm:pt-32 md:pt-32 lg:pt-48 xl:pt-52 text-md text-green-400'>MANAGED IT SOLUTIONS</div>
                <h1 className='text-fade h-max mt-2 w-4/5 sm:w-1/2 text-center text-white font-sans font-extrabold text-4xl sm:text-6xl'>
                  Reliable, scalable and built for your business.
                </h1>
                <div className='slide-right-to-left w-1/2 mt-9 text-slate-400 text-center'>
                  Mind Risers Consortium is a forward-thinking app and website development company with many years of experience to make what you wish.
                </div>
                <button className='text-green-500 border-green-500 duration-500 border-2 p-3 px-6 mt-9 rounded-md hover:bg-green-500 text-xl hover:text-white'>
                  <Link to='contact'>
                    Get Started
                  </Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-splash-ed bg-contain sm:bg-cover w-full h-screen'>
              <div className='w-full h-full flex flex-col items-center bg-mask'>
                <div className='slide-left-to-right pt-20 sm:pt-32 md:pt-32 lg:pt-48 xl:pt-52 text-md text-green-400'>EDUCATION CONSULTANCY</div>
                <h1 className='text-fade h-max mt-2 w-4/5 sm:w-1/2 text-center text-white font-sans font-extrabold text-4xl sm:text-6xl'>
                  We make your dreams come true
                </h1>
                <div className='slide-right-to-left w-1/2 mt-9 text-slate-400 text-center'>
                  We have many years of experience to provide educational consultacy services.
                </div>
                <button className='text-green-500 border-green-500 duration-500 border-2 p-3 px-6 mt-9 rounded-md hover:bg-green-500 text-xl hover:text-white'>
                  <Link to='contact'>
                    Get Started
                  </Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-statistics-bg bg-contain sm:bg-cover w-full h-screen'>
              <div className='w-full h-full flex flex-col items-center bg-mask'>
                <div className='slide-left-to-right pt-20 sm:pt-32 md:pt-32 lg:pt-48 xl:pt-52 text-md text-green-400'>SOFTWARE DEVELOPMENT TRAININGS</div>
                <h1 className='text-fade h-max mt-2 w-4/5 sm:w-1/2 text-center text-white font-sans font-extrabold text-4xl sm:text-6xl'>
                  We can teach you all the latest technologies
                </h1>
                <div className='slide-right-to-left w-1/2 mt-9 text-slate-400 text-center'>
                  Our experienced in-house developers will teach you to be the best you can be
                </div>
                <button className='text-green-500 border-green-500 duration-500 border-2 p-3 px-6 mt-9 rounded-md hover:bg-green-500 text-xl hover:text-white'>
                  <Link to='contact'>
                    Get Started
                  </Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
  </div>
  )
}

export default Splash
