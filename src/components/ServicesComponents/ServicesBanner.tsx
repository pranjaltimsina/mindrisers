const ServicesBanner = () => {
  return (
    <div className='w-full bg-office-bg bg-fixed'>
      <div className='w-full h-full flex flex-col justify-center items-center bg-light-mask text-white'>
        <h1 className='font-sans text-4xl sm:text-6xl w-max pt-12 sm:pt-28 font-bold'>
          Services
        </h1>
        <p className='pt-4 pb-12 sm:pb-28 text-gray-200 w-1/3 text-center'>
          We provide you with an array of services, which we can assure you will be done on time and on budget.
        </p>
      </div>
    </div>
  )
}

export default ServicesBanner

