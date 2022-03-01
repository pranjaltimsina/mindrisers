import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTabs = () => {
  return (
    <ul className='flex flex-col items-center space-y-7 sm:space-y-0 lg:flex-row lg:space-x-5 h-full sm:justify-evenly font-sans font-medium text-xl sm:text-lg '>
      <li className='nav-button'><Link to='/'>Home</Link></li>
      {/* <li className='nav-button'><Link to='about'>About Us</Link></li> */}
      <li className='nav-button'><Link to='services'>Services</Link></li>
      <li className='nav-button'><Link to='tech-services'>Tech Services</Link></li>
      <li className='nav-button'><Link to='study-abroad'>Study Abroad</Link></li>
      <li className='nav-button'><Link to='trainings'>Trainings</Link></li>
      <li className='nav-button'><Link to='blogs'>Blogs</Link></li>
      {/* <li className='nav-button'>
        <Link to='services' className='flex flex-row space-x-1 items-center'>
          <span>
            Services
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </li> */}
      {/* <li className='nav-button'><Link to='careers'>Careers</Link></li> */}
    </ul>
  )
}

export default HeaderTabs
