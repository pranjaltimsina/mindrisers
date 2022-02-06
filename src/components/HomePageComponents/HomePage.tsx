import React, { Suspense } from 'react'

import AboutUs from './AboutUs'
import Splash from './Splash'

// const BottomContact = React.lazy(() => import('./BottomContact'))
const Discover = React.lazy(() => import('./Discover'))
const Jumpstart = React.lazy(() => import('./Jumpstart'))
const Mission = React.lazy(() => import('./Mission'))
// const OurProjects = React.lazy(() => import('./OurProjects'))
const OurServices = React.lazy(() => import('./OurServices'))
const Partners = React.lazy(() => import('./Partners'))
const Statistics = React.lazy(() => import('./Statistics'))
const Testimonials = React.lazy(() => import('./Testimonials'))

const HomePage = () => {
  return (
    <main>
      <Splash />
      <AboutUs />
      <Suspense fallback={<div>Loading...</div>}>
        <Mission />
        <OurServices />
        <Discover />
        <Statistics />
        <Jumpstart />
        {/* <OurProjects /> */}
        <Testimonials />
        <Partners />
        {/* <BottomContact /> */}
      </Suspense>
    </main>
  )
}

export default HomePage
