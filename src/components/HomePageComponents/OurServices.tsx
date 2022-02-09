import ComputerMan from '../../assets/computer-man.jpg'
import { Link, useLocation } from 'react-router-dom'

const OurServices = () => {
  const location = useLocation()

  return (
    <section className="bg-stone-900 h-max flex flex-col lg:flex-row py-20 sm:py-32 px-5 sm:px-32 space-y-12 lg:space-y-0">
      <div className='w-full lg:w-1/2 px-4' >
        <img src={ComputerMan} alt='Services' className='rounded-md w-full object-cover' />
      </div>
      <div className='w-full lg:w-1/2 px-4 pl-10 flex flex-col space-y-9'>
        <h4 className='text-md font-medium font-sans text-green-500 tracking-widest'>OUR SERVICE</h4>
        <h1 className='text-white font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl w-5/6' >Managed IT solutions tailored to your business.</h1>
        <p className='text-white'>
          Our team is capable of making applications as sophisticated as you can imagine.
          We not only make top of the line mobile applications, web applications, enterprise applications,
          but also specialize in digital marketing, and teaching you modern technologies.
        </p>
          {location.pathname === '/services' &&
            <button
              onClick={() => window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })}
              className='rounded-md bg-green-400 text-white hover:bg-slate-400 hover:text-black duration-500 h-max py-3 w-max px-4'
            >
              Learn More
            </button>
          }
          {location.pathname === '/' &&
            <button className='rounded-md bg-green-400 text-white hover:bg-slate-400 hover:text-black duration-500 h-max py-3 w-max px-4'>
              <Link to='services'>
                Learn More
              </Link>
            </button>
          }
      </div>
    </section>
  )
}

export default OurServices
