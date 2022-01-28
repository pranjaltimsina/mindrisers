import { Link } from 'react-router-dom'

const Splash = () => {
  return (
    <div className='bg-splash-bg bg-fixed bg-contain sm:bg-cover w-full h-screen'>
      <div className='w-full h-full flex flex-col items-center bg-mask'>
        <div className='pt-20 sm:pt-52 text-md text-green-400'>MANAGED IT SOLUTIONS</div>
        <h1 className='h-max mt-2 w-4/5 sm:w-1/2 text-center text-white font-sans font-extrabold text-4xl sm:text-6xl'>
          Reliable, scalable and built for your business.
        </h1>
        <div className='w-1/2 mt-9 text-slate-400 text-center'>
          Mind Risers Consortium is a forward-thinking app and website development company with many years of experience to make what you wish.
        </div>
        <button className='text-green-500 border-green-500 duration-500 border-2 p-3 px-6 mt-9 rounded-md hover:bg-green-500 text-xl hover:text-white'>
          <Link to='contact'>
            Get Started
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Splash
