import React from 'react'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'


const Header = () => {
  return (
      <header className='sticky bg-white top-0 flex flex-row justify-between items-center pt-4 pb-4 px-4 sm:px-12 md:px-12 lg:px-44 font-sans duration-500'>
        <HeaderLeft />
        <HeaderRight />
      </header>
  )
}

export default Header
