import React, { useState, useContext, useEffect } from 'react'

import Blog from './Blog'

import { overlayContext } from '../../overlayContext'

interface BlogCardInterface {
  thumbnail: any,
  title: string,
  blurb: string,
  md: string,
}

const BlogCard = ({ thumbnail, title, blurb, md }: BlogCardInterface) => {
  const [expand, setExpand] = useState(false)
  const {hidden, setHidden} = useContext(overlayContext)

  const handleOnClick = () => {
    setExpand((current) => !current)
  }

  useEffect(() => {
    setHidden(expand)
  }, [expand, setHidden])

  return (
    <>
      <div onClick={handleOnClick} className='cursor-pointer h-[450px] image-box bg-white w-[80%] md:w-[45%] lg:w-[28%] xl:w-[26%] mt-12 flex flex-col rounded-md hover:rounded-none duration-500'>
        <div className='image-box max-h-56'>
          <img src={thumbnail} alt="Blog Thumbnail" />
        </div>
        <h4 className='font-sans text-neutral-600 font-bold text-xl p-5'>{title}</h4>
        <p className="font-sans text-neutral-700 text-base p-5">
          {blurb}
        </p>
        <p className="font-sans text-green-500 text-base p-5 underline underline-offset-4 font-normal cursor-pointer w-max decoration-current duration-500 hover:decoration-white" >Read Now</p>
      </div>
      {expand && (
        <Blog
          md={md}
          title={title}
          back={handleOnClick}
        />
      )}
    </>
  )
}

export default BlogCard
