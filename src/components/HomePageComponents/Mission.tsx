interface statisticInterface {
  icon: React.HTMLProps<HTMLOrSVGElement>,
  statNum: number,
  text: string
}

const Statistic = ({ icon, statNum, text }: statisticInterface) => {
  return (
    <div className='flex flex-col w-max justify-center items-center'>
      {icon}
      <h1 className='font-sans text-4xl md:text-7xl font-bold pb-4'>{statNum}</h1>
      <p>{text}</p>
    </div>
  )
}

const Mission = () => {
  return (
    <section className='flex flex-col w-full h-max bg-neutral-100 py-20 sm:py-32 px-5 sm:px-32 lg:px-44 space-y-24'>
      <div className='flex flex-col md:flex-row w-full justify-between'>
        <div className='w-full md:w-1/2'>
          Stuff
        </div>
        <div className='w-full md:w-1/2 space-y-8'>
          <h1 className='font-sans text-3xl md:text-4xl font-bold'>
            We are on a mission to provide the best IT services in Nepal
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nemo modi eveniet repellat accusamus, possimus eum delectus itaque dicta optio atque reprehenderit distinctio repellendus sequi. Quidem impedit culpa animi perspiciatis?
          </p>
        </div>
      </div>
      <div className='flex flex-row w-full justify-between '>
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            }
          statNum={15}
          text='YEARS'
        />
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          }
          statNum={48}
          text='DEVELOPERS'
        />
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          }
          statNum={1237}
          text='CUSTOMERS'
        />
        <Statistic
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          }
          statNum={777}
          text='PROJECTS'
        />
      </div>
    </section>
  )
}

export default Mission
