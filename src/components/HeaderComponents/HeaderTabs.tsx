import React from 'react';

const HeaderTabs = () => {
  return (
    <ul className='flex flex-row space-x-5 font-sans font-medium text-md md:text-md md:space-x-'>
      <li className='nav-button'>Home</li>
      <li className='nav-button'>About Us</li>
      <li className='nav-button flex flex-row space-x-1 items-center'>
        <span>
          Services
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </li>
      <li className='nav-button'>Careers</li>
    </ul>
  )
}

export default HeaderTabs
