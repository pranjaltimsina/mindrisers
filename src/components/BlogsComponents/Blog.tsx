import { useState, useEffect, useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { overlayContext } from '../../overlayContext'

interface BlogInterface {
  apiURl?: string,
  md: string,
  back: any,
  title: string,
  url?: string
}

// const Blog = ({ apiURl }: BlogInterface) => {
const Blog = ({ apiURl, md, back, title, url }: BlogInterface) => {
  const [mdText, setmdText] = useState('')
  const { setHidden } = useContext(overlayContext)

  useEffect(() => {
    setHidden(true)
    fetch(md).then(res => res.text()).then(text => setmdText(text))
  })

  const handleBack = () => {
    setHidden(false)
    back()
  }

  return (
<<<<<<< HEAD
    <main onScroll={handleScroll} className='w-screen h-screen fixed top-0 right-0 z-50 backdrop-blur-xl bg-white'>
=======
    <main className='w-screen h-screen fixed top-0 right-0 z-50 backdrop-blur-xl bg-mask-white'>
>>>>>>> main
      <header className='w-full flex flex-row justify-between px-4 sm:px-12 md:px-40 lg:px-52 xl:px-60 2xl:px-72 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20: overscroll-contain overflow-hidden'>
        <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className='text-black font-sans font-bold text-2xl'>{title}</span>
      </header>
      <div className='w-full h-full flex justify-center'>
        <article className='prose lg:prose-lg blog-wrapper w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%] h-full px-10 overflow-auto pb-56 '>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} >
            {mdText}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  )
}

export default Blog
