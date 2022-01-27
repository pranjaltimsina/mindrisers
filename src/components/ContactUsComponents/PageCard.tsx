interface PageCardProps {
  child: any
}

const PageCard = ({ child }: PageCardProps) => {
  return (
    <div className='w-full h-1/2 sm:h-auto sm:w-1/2 sm:aspect-video border-2 border-green-400 flex flex-row justify-center items-center text-black'>
      {/* {child} */}
    </div>
  )
}

export default PageCard
