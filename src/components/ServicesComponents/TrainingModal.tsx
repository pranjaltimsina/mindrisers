interface trainingModalInterface {
  title: any,
  content: any,
  downloadLink: any
  close: any
}

const TrainingModal = ({ title, content, downloadLink, close }: trainingModalInterface) => {
  return (
    <div className='overlay' onClick={() => close((current: any) => !current)}>
      <div onClick={(e) => e.stopPropagation()} className='w-full h-full sm:w-3/4 sm:h-4/5 md:w-2/3 md:h-4/5 lg:w-2/5 bg-white rounded-md flex flex-col justify-between overflow-auto'>
        <div className='flex flex-row justify-between items-center px-6 sm:px-10 py-4 h-max'>
          <h4 className='w-max font-semibold font-sans text-lg'>{title}</h4>
          <svg onClick={() => close((current: any) => !current)} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        {content}
        <div className='w-full h-max flex flex-row justify-center items-center my-7'>
          <button className='w-max px-10 py-4 bg-green-400 font-semibold text-white rounded-md hover:bg-slate-500 hover:text-black duration-500'>Download</button>
        </div>
      </div>
    </div>
  )
}

export default TrainingModal
