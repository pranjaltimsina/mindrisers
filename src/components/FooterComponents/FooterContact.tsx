import React from 'react'

const FooterContact = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className='w-full sm:w-80 flex flex-col space-y-4 px-10'>
      <h1 className='font-sans text-white font-semibold text-xl'>Let's talk</h1>
       <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
         <input className="footer-form-fields" placeholder='First Name' />
         <input className="footer-form-fields" placeholder='Last Name' />
         <input className="footer-form-fields" placeholder='Email Address' />
         <button type='submit' className='w-full h-10 rounded-md bg-green-400 hover:bg-slate-400 duration-500 text-white flex flex-row items-center space-x-3 px-10'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>
            Submit
          </span>
          </button>
       </form>
    </div>
  )
}

export default FooterContact
