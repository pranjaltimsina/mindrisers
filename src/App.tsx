import React, { Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/HeaderComponents/Header'
import HomePage from './components/HomePageComponents/HomePage'
import NotFound from './components/404Components/NotFound'
import Footer from './components/FooterComponents/Footer'

import { overlayContext } from './overlayContext'
import BlogWrapper from './components/BlogsComponents/BlogWrapper'

// lazy loaded
const ContactUs = React.lazy(() => import('./components/ContactUsComponents/ContactUs'))
const Services = React.lazy(() => import('./components/ServicesComponents/Services'))
const Careers = React.lazy(() => import('./components/CareersComponents/Careers'))
const AboutUs = React.lazy(() => import('./components/AboutUsComponents/AboutUs'))
const Blogs = React.lazy(() => import('./components/BlogsComponents/Blogs'))
const Admin = React.lazy(() => import('./components/AdminComponents/Admin'))


const App = () => {
  const [hidden, setHidden] = useState(false)

  return (
    <overlayContext.Provider value={{hidden, setHidden}}>
      <div className={`${hidden? 'overflow-hidden h-screen' : ''}`}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='contact'
              element={
                <Suspense fallback={<div className='h-screen'>Loading...</div>}>
                  <ContactUs />
                </Suspense>
              }
            />
            <Route
              path='about'
              element={
                <Suspense fallback={<div className='h-screen'>Loading...</div>}>
                  <AboutUs />
                </Suspense>
              }
            />
            <Route
              path='services'
              element={
                <Suspense fallback={<div className='h-screen'>Loading...</div>}>
                  <Services />
                </Suspense>
              }
            />
            <Route
              path='careers'
              element={
                <Suspense fallback={<div className='h-screen'>Loading...</div>}>
                  <Careers />
                </Suspense>
              }
            />
            <Route
              path='blogs'
              element={
                <Suspense fallback={<div className='h-screen'>Loading...</div>}>
                  <Blogs />
                </Suspense>
              }
            >
              <Route path=':name' element={<BlogWrapper />} />
            </Route>

            <Route
              path='admin'
              element={
                <Suspense fallback={<div className='h-screen'>Loading...</div>}>
                  <Admin />
                </Suspense>
              }
            />
            <Route path='*'element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </overlayContext.Provider>
  )
}

export default App
