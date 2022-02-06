import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section className='bg-testimonials bg-fixed bg-contain h-max'>
      <div className='w-full h-full flex flex-col items-center bg-mask py-20 sm:py-32 px-0 space-y-12'>
        <div className='flex flex-col w-full'>
          <p className="w-full text-center text-green-500 text-sm tracking-widest font-medium mb-5">TESTIMONIALS</p>
          <h3 className='w-full text-center text-white font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'>What they say</h3>
        </div>
        <div className='w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:space-x-12 justify-center items-center'>
          <TestimonialCard
            starCount={5}
            image='img'
            name='John Doe'
            position='CEO'
            testimonial='This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial.'
            />
          <TestimonialCard
            starCount={5}
            image='img'
            name='John Doe'
            position='CEO'
            testimonial='This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial.'
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
