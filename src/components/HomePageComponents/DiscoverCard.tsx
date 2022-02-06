interface DiscoverCardInterface {
  image: any,
  title: string,
  info: string
}

const DiscoverCard = ({ image, title, info }: DiscoverCardInterface) => {
  return (
    <div className='image-box bg-white md:w-[45%] lg:w-[30%] mt-12 flex flex-col rounded-md hover:rounded-none duration-500'>
      <div className='image-box'>
        {image}
      </div>
      <h4 className='font-sans text-neutral-600 font-bold text-xl p-5'>{title}</h4>
      <p className="font-sans text-neutral-700 text-base p-5">
        {info}
      </p>
      <p className="font-sans text-green-500 text-base p-5 underline underline-offset-4 font-normal cursor-pointer w-max decoration-current duration-500 hover:decoration-white" >Learn More</p>
    </div>
  )
}

export default DiscoverCard
