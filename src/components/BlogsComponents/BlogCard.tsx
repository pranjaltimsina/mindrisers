import React, { useState } from 'react'

import Blog from './Blog'

interface BlogCardInterface {
  thumbnail: any,
  title: string,
  blurb: string,
  link: string
}

const BlogCard = ({ thumbnail, title, blurb, link }: BlogCardInterface) => {
  const [expand, setExpand] = useState(false)


  const handleOnClick = () => {
    setExpand((current) => !current)
  }
  return (
    <>
      <div onClick={handleOnClick} className='image-box bg-white md:w-[45%] lg:w-[30%] mt-12 flex flex-col rounded-md hover:rounded-none duration-500'>
        <div className='image-box max-h-56'>
          {thumbnail}
        </div>
        <h4 className='font-sans text-neutral-600 font-bold text-xl p-5'>{title}</h4>
        <p className="font-sans text-neutral-700 text-base p-5">
          {blurb}
        </p>
        <p className="font-sans text-green-500 text-base p-5 underline underline-offset-4 font-normal cursor-pointer w-max decoration-current duration-500 hover:decoration-white" >Read Now</p>
      </div>
      {expand && (
        <Blog apiURl='www.google.com'/>
      )}
    </>
  )
}

export default BlogCard
