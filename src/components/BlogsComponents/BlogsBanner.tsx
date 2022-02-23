const BlogsBanner = () => {
  return (
    <div className='w-full bg-blogs bg-fixed'>
      <div className='w-full h-full flex flex-col justify-center items-center bg-light-mask text-white'>
        <h1 className='font-sans text-4xl sm:text-6xl w-max pt-12 sm:pt-28 font-bold'>
          Blogs
        </h1>
        <p className='pt-4 pb-12 sm:pb-28 text-gray-200 w-4/5  md:w-1/3 text-center'>
          Got a moment to read our latest blogs?
        </p>
      </div>
    </div>
  )
}

export default BlogsBanner

