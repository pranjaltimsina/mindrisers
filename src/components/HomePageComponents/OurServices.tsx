import ComputerMan from '../../assets/computer-man.jpg'

const OurServices = () => {
  return (
    <section className="bg-stone-900 h-max flex flex-col md:flex-row py-20 sm:py-32 px-5 sm:px-32 space-y-24 md:space-y-0">
      <div className='w-full md:w-1/2 px-4' >
        <img src={ComputerMan} alt='Services' className='rounded-md' />
      </div>
      <div className='w-full md:w-1/2 px-4 pl-10 flex flex-col space-y-9'>
        <h4 className='text-md font-medium font-sans text-green-500 tracking-widest'>OUR SERVICE</h4>
        <h1 className='text-white font-bold text-5xl w-5/6' >Managed IT solutions tailored to your business.</h1>
        <p className='text-white'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat similique, aut vitae ducimus libero earum quis, minus sint ex doloremque quod illo asperiores, quos cum molestiae quas aspernatur porro reprehenderit.
        </p>
        <button className='rounded-md bg-green-400 text-white hover:bg-slate-400 hover:text-black duration-500 h-max py-3 w-max px-4'>
          Learn More
        </button>
      </div>
    </section>
  )
}

export default OurServices
