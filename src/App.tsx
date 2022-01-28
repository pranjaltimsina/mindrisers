import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/HeaderComponents/Header'
import HomePage from './components/HomePageComponents/HomePage'
import ContactUs from './components/ContactUsComponents/ContactUs'
import NotFound from './components/404Components/NotFound'
import Services from './components/ServicesComponents/Services'
import Careers from './components/CareersComponents/Careers'
import Footer from './components/FooterComponents/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='services' element={<Services />} />
        <Route path='careers' element={<Careers />} />
        <Route path='*'element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
