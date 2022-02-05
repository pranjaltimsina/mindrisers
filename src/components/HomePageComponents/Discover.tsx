import DiscoverCard from './DiscoverCard'
import Placeholder from '../../assets/discover-card-img.jpg'

const Discover = () => {
  return (
    <section className='bg-neutral-100 flex flex-col py-20 sm:py-24 px-5 sm:px-14 md:px-18 lg:px-32 xl:px-44'>
      <h1 className='w-full text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-sans'>Discover the tech innovations</h1>
      <div className='flex flex-col  md:flex-row flex-wrap w-full justify-between'>
        <DiscoverCard title='This' info='this' image={
          <img src={Placeholder} alt='This'/>
        }/>
        <DiscoverCard title='This' info='this' image={
          <img src={Placeholder} alt='This'/>
        }/>
        <DiscoverCard title='This' info='this' image={
          <img src={Placeholder} alt='This'/>
        }/>
        <DiscoverCard title='This' info='this' image={
          <img src={Placeholder} alt='This'/>
        }/>
        <DiscoverCard title='This' info='this' image={
          <img src={Placeholder} alt='This'/>
        }/>
        <DiscoverCard title='This' info='this' image={
          <img src={Placeholder} alt='This'/>
        }/>
      </div>
    </section>
  )
}

export default Discover
