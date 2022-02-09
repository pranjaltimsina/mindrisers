import React, { useEffect } from 'react'

import AboutUsBanner from "./AboutUsBanner"
import HomeAboutUs from '../HomePageComponents/HomeAboutUs'
import Mission from "../HomePageComponents/Mission"
import Partners from "../HomePageComponents/Partners"
import OurCulture from "./OurCulture"
import OurTeam from "./OurTeam"
import ApplyNow from "./ApplyNow"


const AboutUs = () => {
  useEffect(() => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  }), [])


  return (
    <main>
      <AboutUsBanner />
      <HomeAboutUs />
      <Mission />
      <OurCulture />
      <OurTeam />
      <Partners />
      <ApplyNow />
    </main>
  )
}

export default AboutUs
