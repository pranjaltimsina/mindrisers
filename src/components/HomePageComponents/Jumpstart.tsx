interface JumpStartChildrenInterface {
  icon: React.HTMLProps<HTMLOrSVGElement>,
  title: string,
  info: string
}

const JumpstartChild = ({ icon, title, info }: JumpStartChildrenInterface) => {
  return (
    <div className='flex flex-col items-center w-1/2 md:w-[30%]'>
      {icon}
      <h4 className='font-bold text-2xl pt-3 text-center'>{title}</h4>
      <p className='text-neutral-700 text-center'>
        {/* {info} */}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

const Jumpstart = () => {
  return (
    <section className='h-max flex flex-col py-20 sm:pt-24 sm:px-10 md:px-20 lg:px-40 xl:px-48 px-5 space-y-12'>
      <div className='flex flex-col'>
        <p className="w-full text-center text-green-500 text-sm tracking-widest font-medium mb-5">WHY BUSINESSES CHOOSE US</p>
        <h3 className='w-full text-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'>Jumpstart your business</h3>
        <p className='w-full text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="flex flex-col items-center space-y-9 md:space-y-0 md:flex-row md:space-x-5 flex-nowrap py-7 justify-between ">
        <JumpstartChild
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill-green-500" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          }
          title="We're loyal"
          info="This is some info"
        />
        <JumpstartChild
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill-green-500" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
          </svg>
          }
          title="We're helpful"
          info="This is some info"
        />
        <JumpstartChild
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill-green-500" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
          }
          title="We're flexible"
          info="This is some info"
        />
      </div>
    </section>
  )
}

export default Jumpstart
