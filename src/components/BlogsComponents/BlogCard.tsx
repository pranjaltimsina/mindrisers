import React, { useState, useContext, useEffect } from 'react'

import { overlayContext } from '../../overlayContext'
import { useNavigate } from 'react-router-dom'

interface BlogCardInterface {
  thumbnail: any,
  title: string,
  blurb: string,
  md: string,
  url: string,
  imgAlt: string
}

const BlogCard = ({ thumbnail, title, blurb, md, url, imgAlt }: BlogCardInterface) => {
  const navigator = useNavigate()
  const [expand, setExpand] = useState(false)
  const { setHidden } = useContext(overlayContext)

  const handleOnClick = () => {
    setExpand((current) => !current)
    navigator(url)
    // window.location.href =`https://mindrisers.pages.dev/blogs/${url}`
  }

  useEffect(() => {
    setHidden(expand)
  }, [expand, setHidden])

  return (
    <>
      <div onClick={handleOnClick} className='cursor-pointer h-[450px] image-box bg-white w-[80%] md:w-[45%] lg:w-[28%] xl:w-[26%] mt-12 flex flex-col rounded-md hover:rounded-none duration-500'>
        <div className='image-box max-h-56'>
          <img src={thumbnail} alt={imgAlt} />
        </div>
        <h4 className='font-sans text-neutral-600 font-bold text-xl p-5'>{title}</h4>
        <p className="font-sans text-neutral-700 text-base p-5">
          {blurb}
        </p>
        <p className="font-sans text-green-500 text-base p-5 underline underline-offset-4 font-normal cursor-pointer w-max decoration-current duration-500 hover:decoration-white" >Read Now</p>
      </div>
      {/* {expand && (
        <Blog
          md={md}
          title={title}
          back={handleOnClick}
        />
      )} */}
    </>
  )
}

export default BlogCard
