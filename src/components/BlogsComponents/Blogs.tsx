import { useContext } from "react"

import { Outlet } from 'react-router-dom';

import BlogCard from "./BlogCard"
import BlogsBanner from "./BlogsBanner"

import BlogThumbnail from '../../assets/blog-thumbnail.jpg'

import webDev from '../../assets/blogs/web-dev.md'
import softwareDev from '../../assets/blogs/software-dev.md'
import digitalMarketing from '../../assets/blogs/digital-marketing.md'
import appDev from '../../assets/blogs/app-dev.md'
import trainings from '../../assets/blogs/trainings.md'
import placements from '../../assets/blogs/placements.md'
import { overlayContext } from '../../overlayContext'


const Blogs = () => {
  const {hidden, setHidden} = useContext(overlayContext)

  return (
    <main className={`h-max w-full ${hidden? 'overflow-hidden h-full' : ''}`}>
      <Outlet />
      <BlogsBanner />
      <section className='flex flex-row flex-wrap justify-evenly w-full bg-neutral-100 h-max pb-20'>
        <BlogCard
          title="Web Development"
          blurb="We make websites that develop your business"
          thumbnail={BlogThumbnail}
          md={webDev}
          url='web-development'
          />
        <BlogCard
          title="App Development"
          blurb="Best destination to get your own application developed"
          thumbnail={BlogThumbnail}
          md={appDev}
          url='app-development'
          />
        <BlogCard
          title="Software Development"
          blurb="Providing the simplest solution for the most complex problem"
          thumbnail={BlogThumbnail}
          md={softwareDev}
          url='software-development'
          />
        <BlogCard
          title="Digital Marketing"
          blurb="Choose what matters to your business and your customers"
          thumbnail={BlogThumbnail}
          md={digitalMarketing}
          url='digital-marketing'
          />
        <BlogCard
          title="Trainings"
          blurb="We help the caterpillars and transform them into butterflies"
          thumbnail={BlogThumbnail}
          md={trainings}
          url='trainings'
          />
        <BlogCard
          title="Placements"
          blurb="Lifting your people and business"
          thumbnail={BlogThumbnail}
          md={placements}
          url='placements'
          />
      </section>
    </main>
  )
}

export default Blogs
