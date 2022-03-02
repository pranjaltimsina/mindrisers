import DiscoverCard from './DiscoverCard'

import Australia from '../../assets/australia.jpg'
import USA from '../../assets/usa.jpg'
import UK from '../../assets/uk.jpg'

const StudyAbroad = () => {
  return (
    <section className='bg-white flex flex-col py-20 sm:py-24 px-5 sm:px-14 md:px-18 lg:px-32 xl:px-44'>
      <h1 className='w-full text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-sans'>Study Abroad</h1>
      <div className='flex flex-col  md:flex-row flex-wrap w-full justify-between'>
        <DiscoverCard
          title='Australia'
          info='Study in the best universities in Australia.'
          image={
            <img src={Australia} alt='Database Migrations'/>
          }
          bgColor='bg-neutral-100'
        />
        <DiscoverCard
          title='United States of America'
          info="Our experienced consultants will help you with everything related to studying in the USA"
          image={
            <img src={USA} alt='Managed Hostings'/>
          }
          bgColor='bg-neutral-100'
        />
        <DiscoverCard
          title='United Kingdom'
          info='We will help you get placed in top tier universities in the UK'
          image={
            <img src={UK} alt='Web Development'/>
          }
          bgColor='bg-neutral-100'
        />
      </div>
    </section>
  )
}

export default StudyAbroad
