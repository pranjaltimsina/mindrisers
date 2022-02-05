import StatisticsImage from '../../assets/statistics-img.jpg'

const Statistics = () => {
  return (
    <section className="bg-statistics-bg bg-fixed bg-contain h-max">
      <div className='w-full h-full flex flex-col items-center bg-mask lg:flex-row py-20 sm:py-32 px-5 sm:px-32 space-y-12 lg:space-y-0'>
        <div className='w-full lg:w-1/2 px-4 pl-10 flex flex-col space-y-9'>
          <h4 className='text-md font-medium font-sans text-green-500 tracking-widest'>STATISTICS</h4>
          <h1 className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-5/6' >Consumer insights. Market innovation.</h1>
          <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem saepe et molestias, ullam commodi ut.
          </p>
        </div>
        <div className='w-full lg:w-1/2 px-4' >
          <img src={StatisticsImage} alt='Services' className='rounded-md h-full object-cover' />
        </div>
      </div>
    </section>
  )
}

export default Statistics


