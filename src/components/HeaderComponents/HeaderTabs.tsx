import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTabs = () => {
  return (
    <ul className='flex flex-row space-x-5 font-sans font-medium text-md md:text-md md:space-x-'>
      <li className='nav-button'><Link to='/'>Home</Link></li>
      <li className='nav-button'>About Us</li>
      <li className='nav-button'>
        <Link to='services' className='flex flex-row space-x-1 items-center'>
          <span>
            Services
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </li>
      <li className='nav-button'><Link to='careers'>Careers</Link></li>
    </ul>
  )
}

export default HeaderTabs
