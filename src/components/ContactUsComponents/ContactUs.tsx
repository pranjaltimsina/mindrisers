import ContactBanner from './ContactBanner'
import PageCard from './PageCard'

import Building from '../../assets/building.jpg'
import React from 'react'

const ContactDetails = () => {
  return (
    <div className='flex flex-col w-full h-full items-center'>
      <div className='w-4/5 h-1/3 border-b-2 border-b-gray-400 py-10'>
        <div className='flex flex-row items-center space-x-3'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <h4 className='w-max font-sans text-2xl font-semibold'>Phone</h4>
        </div>
        <div className='text-gray-400 text-2xl font-sans font-semibold pt-4'>
          +977 9845123590
        </div>
      </div>
      <div className='w-4/5 h-1/3 border-b-2 border-b-gray-400 py-10'>
        <div className='flex flex-row items-center space-x-3'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h4 className='w-max font-sans text-2xl font-semibold'>Email</h4>
        </div>
        <div className='text-gray-400 text-2xl font-sans font-semibold pt-4'>
          support@mindrisers.com
        </div>
      </div>
      <div className='w-4/5 h-1/3 py-10'>
        <div className='flex flex-row items-center space-x-3'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <h4 className='w-max font-sans text-2xl font-semibold'>Address</h4>
        </div>
        <div className='text-gray-400 text-2xl font-sans font-semibold pt-4'>
          Kathmandu, Nepal
        </div>
      </div>
    </div>
  )
}

const DropMessage = () => {

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className='flex flex-col w-full h-full items-center pt-8 pb-10 space-y-3'>
      <h1 className='w-4/5 text-left font-sans text-2xl font-semibold'>Drop us a message</h1>
      <form onSubmit={handleFormSubmit} className='w-4/5 flex flex-col'>
        <label className='font-md text-gray-500 font-medium'>Your name (required)</label>
        <input type='text' className='border-2 border-gray-300 rounded-md h-9 mb-5' />
        <label className='font-md text-gray-500 font-medium'>Your email (required)</label>
        <input type='email' className='border-2 border-gray-300 rounded-md h-9  mb-5' />
        <label className='font-md text-gray-500 font-medium'>Subject</label>
        <input type='text' className='border-2 border-gray-300 rounded-md h-9 mb-5' />
        <label className='font-md text-gray-500 font-medium'>Message</label>
        <textarea className='border-2 border-gray-300 rounded-md h-28 mb-5' />
        <input type='submit' className='rounded-md text-white font-medium  text-lg duration-500 bg-green-500 hover:bg-slate-400 hover:text-black w-max px-4 py-2 cursor-pointer' />
      </form>

    </div>
  )
}

const ContactUs = () => {
  return (
    <main className='h-max bg-white'>
      <ContactBanner />
      <div className='w-full flex flex-row flex-wrap h-max'>
        <PageCard child={<ContactDetails />}/>
        <PageCard child={<img src={Building} alt='Building' />}/>
        <PageCard child={
            <iframe
              title='Map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.518693059076!2d85.31902561513795!3d27.701267082794438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2sMind%20Risers%20Consortium%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1643962692431!5m2!1sen!2snp"
              width="760" height="556" loading="lazy"
            />
          }
        />
        <PageCard child={<DropMessage />}/>
      </div>
    </main>
  )
}

export default ContactUs
