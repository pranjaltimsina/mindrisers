import Discover from '../HomePageComponents/Discover'
import Jumpstart from '../HomePageComponents/Jumpstart'
import OurServices from '../HomePageComponents/OurServices'
import Partners from '../HomePageComponents/Partners'
import Testimonials from '../HomePageComponents/Testimonials'
import ServicesBanner from './ServicesBanner'

const Services = () => {
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
