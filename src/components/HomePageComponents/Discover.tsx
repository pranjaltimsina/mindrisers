import DiscoverCard from './DiscoverCard'

import Database from '../../assets/discover/database.jpg'
import Hosting from '../../assets/discover/hosting.jpg'
import Webdev from '../../assets/discover/webdev.jpg'
import Mobile from '../../assets/discover/mobile.jpg'
import Enterprise from '../../assets/discover/enterprise.jpg'
import Marketing from '../../assets/discover/marketing.jpg'

const Discover = () => {
  return (
    <section className='bg-neutral-100 flex flex-col py-20 sm:py-24 px-5 sm:px-14 md:px-18 lg:px-32 xl:px-44'>
      <h1 className='w-full text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-sans'>Tech services we provide</h1>
      <div className='flex flex-col  md:flex-row flex-wrap w-full justify-between'>
        <DiscoverCard
          title='Database Migrations'
          info='We facilitate reliable, hassle-free database migrations.'
          image={
            <img src={Database} alt='Database Migrations'/>
          }
        />
        <DiscoverCard
          title='Managed Hostings'
          info="We manage and host what you want us to. You won't have to worry about hostings ever again."
          image={
            <img src={Hosting} alt='Managed Hostings'/>
          }
        />
        <DiscoverCard
          title='Web Development' info='We make the best in class modern web applications. Contact us for a quote.'
          image={
            <img src={Webdev} alt='Web Development'/>
          }
        />
        <DiscoverCard
          title='Mobile Apps'
          info='We make top-notch mobile applications for both Android and IOS.'
          image={
            <img src={Mobile} alt='Mobile Apps'/>
          }
        />
        <DiscoverCard
          title='Enterprise Softwares'
          info='The enterprise level applications we make are robust, secure and reliable.'
          image={
            <img src={Enterprise} alt='Enterprise Softwares'/>
          }
        />
        <DiscoverCard
          title='Digital Marketing'
          info='We provide all kinds of digital marketing services.'
          image={
            <img src={Marketing} alt='Digital Marketing'/>
          }
        />
      </div>
    </section>
  )
}

export default Discover
