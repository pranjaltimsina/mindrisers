import AboutUs from './AboutUs'
import BottomContact from './BottomContact'
import Discover from './Discover'
import Jumpstart from './Jumpstart'
import Mission from './Mission'
import OurProjects from './OurProjects'
import OurServices from './OurServices'
import Partners from './Partners'
import Splash from './Splash'
import Statistics from './Statistics'
import Testimonials from './Testimonials'

const HomePage = () => {
  return (
    <main>
      <Splash />
      <AboutUs />
      <Mission />
      <OurServices />
      <Discover />
      <Statistics />
      <Jumpstart />
      <OurProjects />
      <Testimonials />
      <Partners />
      <BottomContact />
    </main>
  )
}

export default HomePage
