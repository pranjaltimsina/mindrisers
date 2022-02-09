import React, { useEffect } from 'react'

import Discover from '../HomePageComponents/Discover'
import Jumpstart from '../HomePageComponents/Jumpstart'
import OurServices from '../HomePageComponents/OurServices'
import Partners from '../HomePageComponents/Partners'
import Testimonials from '../HomePageComponents/Testimonials'
import ServicesBanner from './ServicesBanner'

const Services = () => {
  useEffect(() => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  }), [])

  return (
    <main>
      <ServicesBanner />
      <Jumpstart />
      <OurServices />
      <Discover />
      <Testimonials />
      <Partners />
    </main>
  )
}

export default Services
