import AboutUsBanner from "./AboutUsBanner"
import HomeAboutUs from '../HomePageComponents/HomeAboutUs'
import Mission from "../HomePageComponents/Mission"
import Partners from "../HomePageComponents/Partners"
import OurCulture from "./OurCulture"
import OurTeam from "./OurTeam"
import ApplyNow from "./ApplyNow"


const AboutUs = () => {
  return (
    <main>
      <AboutUsBanner />
      <HomeAboutUs />
      <Mission />
      <OurCulture />
      <OurTeam />
      <Partners />
      {/* <ApplyNow /> */}
    </main>
  )
}

export default AboutUs
