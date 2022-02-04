interface PageCardProps {
  child: any
}

const PageCard = ({ child }: PageCardProps) => {
  return (
    <div className='pagecard w-full max-h-min h-max sm:h-auto sm:w-1/2 text-black'>
      {child}
    </div>
  )
}

export default PageCard
