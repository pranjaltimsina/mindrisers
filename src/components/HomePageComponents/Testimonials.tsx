import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section className='bg-testimonials bg-fixed bg-contain h-max'>
      <div className='w-full h-full flex flex-col items-center bg-mask py-20 sm:py-32 px-0 space-y-12'>
        <div className='flex flex-col w-full'>
          <p className="w-full text-center text-green-500 text-sm tracking-widest font-medium mb-5">TESTIMONIALS</p>
          <h3 className='w-full text-center text-white font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'>What they say</h3>
        </div>
        <div className='w-full justify-center items-center'>
        <Swiper
        // @ts-expect-error
        style={{ "--swiper-navigation-color": "#ded",  }}
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>

            <TestimonialCard
              starCount={5}
              image='img'
              name='John Doe'
              position='CEO'
              testimonial='Whenever we need an intern, mindrisers is our go-to place. They have never let us down.'
              />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              starCount={5}
              image='img'
              name='John Doe'
              position='CEO'
              testimonial='Mindrisers is the best in town when we want to teach our new recruits some new technology.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              starCount={5}
              image='img'
              name='John Doe'
              position='CEO'
              testimonial='Mindrisers is the best in town when we want to teach our new recruits some new technology.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              starCount={5}
              image='img'
              name='John Doe'
              position='CEO'
              testimonial='Mindrisers is the best in town when we want to teach our new recruits some new technology.'
            />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
