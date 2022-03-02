import React, { useState } from 'react'

import TrainingModal from '../ServicesComponents/TrainingModal'

interface DiscoverCardInterface {
  image: any,
  title: string,
  info: string,
  isTraining?: boolean,
  modalTitle?: string,
  modalContent?: any,
  downloadLink?: any,
  bgColor?: string
}

const DiscoverCard = ({ image, title, info, isTraining, modalTitle, modalContent, downloadLink, bgColor='bg-white' }: DiscoverCardInterface) => {
  const [expand, setExpand] = useState(false)


  const handleOnClick = () => {
    if (!isTraining) return
    setExpand((current) => !current)
  }
  return (
    <>
      <div onClick={handleOnClick} className={`image-box ${bgColor} md:w-[45%] lg:w-[30%] mt-12 flex flex-col rounded-md hover:rounded-none duration-500`}>
        <div className='image-box max-h-56'>
          {image}
        </div>
        <h4 className='font-sans text-neutral-600 font-bold text-xl p-5'>{title}</h4>
        <p className="font-sans text-neutral-700 text-base p-5">
          {info}
        </p>
        <p className="font-sans text-green-500 text-base p-5 underline underline-offset-4 font-normal cursor-pointer w-max decoration-current duration-500 hover:decoration-white" >Learn More</p>
      </div>
      {expand && (
        <TrainingModal title={modalTitle} content={modalContent} downloadLink={downloadLink} close={setExpand} />
      )}
    </>
  )
}

export default DiscoverCard
