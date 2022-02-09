import { Link } from 'react-router-dom'

// const HomeAboutUs = () => {
//   return (
//     <section id='about-us' className='h-max py-20 sm:py-32 px-12 md:px-12 lg:px-44'>
//       <h3 className='text-green-400 text-2xl font-semibold'>About Us</h3>
//       <p className='text-black font-bold text-2xl sm:text-4xl w-full md:w-1/2 pt-9'>We are a progressive software development and management firm.</p>
//       <p className='w-2/3 sm:w-1/2 mt-8'>
//         We hold one goal above all others: 100% client satisfaction. Our in-house team of designers and developers uphold the highest standards for project planning and execution.
//       </p>
//       <button className='duration-500 items-center text-white fill-white hover:fill-black bg-green-500 px-4 py-3 mt-8 hover:text-black hover:bg-slate-300 rounded-md'>
//         <Link to='services' className='flex flex-row space-x-2 '>
//           <span className='text-md font-semibold'>
//               Discover More
//           </span>
//           {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:fill-black" viewBox="0 0 20 20">
//             <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
//           </svg> */}
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         </Link>
//       </button>
//     </section>
//   )
// }


import Matrix from '../../assets/matrix.jpg'

const HomeAboutUs = () => {
  return (
    <section className="h-max flex flex-col lg:flex-row py-20 sm:py-32 px-5 sm:px-32 space-y-12 lg:space-y-0">
      <div className='w-full lg:w-1/2 px-4 pl-10 flex flex-col space-y-9 xl:pt-12'>
        <h1 className='font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl w-5/6' >About Us</h1>
        <p>
          We hold one goal above all others: 100% client satisfaction. Our in-house team of designers and developers uphold the highest standards for project planning and execution.
        </p>
          <button className='w-max duration-500 items-center text-white fill-white hover:fill-black bg-green-500 px-4 py-3 mt-8 hover:text-black hover:bg-slate-300 rounded-md'>
            <Link to='services' className='flex flex-row space-x-2 '>
              <span className='text-md font-semibold'>
                  Discover More
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </button>

      </div>
      <div className='w-full lg:w-1/2 px-4' >
        <img src={Matrix} alt='Services' className='rounded-md w-full object-cover' />
      </div>
    </section>
  )
}



export default HomeAboutUs
