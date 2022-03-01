import { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import useOnScreen from '../../hooks/useOnScreen'

import ComputerMan from '../../assets/computer-man.jpg'

const OurServices = () => {
  const [show, setShow] = useState(0)
  const ref = useRef(null)
  const location = useLocation()
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if (!isVisible && show === 0) {
      setShow(() => 0)
    } else if (!isVisible && show === 1) {
      setShow(() => 2)
    } else if (!isVisible && show === 2) {
      setShow(() => 2)
    } else if (isVisible && show === 0) {
      setShow(() => 1)
    } else if (isVisible && show === 1) {
      setShow(() => 2)
    } else if (isVisible && show === 2) {
      setShow(() => 2)
    }
  }, [ isVisible, show ])


  return (
    <section className="bg-white h-max flex flex-col lg:flex-row py-20 sm:py-32 px-5 sm:px-32 space-y-12 lg:space-y-0">
      <div className='w-full lg:w-1/2 px-4' >
        <img src={ComputerMan} ref={ref} alt='Services' className={`${(show) ? "zoom-image" : ""} rounded-md w-full object-cover`} />
      </div>
      <div className='w-full lg:w-1/2 px-4 pl-10 flex flex-col space-y-9'>
        <h4 className='text-md font-medium font-sans text-green-500 tracking-widest'>OUR SERVICE</h4>
        <h1 className='text-black font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl w-5/6' >Managed IT solutions tailored to your business.</h1>
        <p className='text-black'>
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
