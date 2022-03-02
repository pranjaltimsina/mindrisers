import { useContext } from "react"

import { Outlet } from 'react-router-dom';

import BlogCard from "./BlogCard"
import BlogsBanner from "./BlogsBanner"

import webDevThumbnail from '../../assets/discover/webdev.jpg'
import appThumbnail from '../../assets/discover/mobile.jpg'
import softwareDevelopmentThumbnail from '../../assets/discover/database.jpg'
import marketingThumbnail from '../../assets/discover/marketing.jpg'
import placementsThumbnail from '../../assets/office.jpg'
import trainingsThumbnail from '../../assets/statistics-bg.jpg'

import webDev from '../../assets/blogs/web-dev.md'
import softwareDev from '../../assets/blogs/software-dev.md'
import digitalMarketing from '../../assets/blogs/digital-marketing.md'
import appDev from '../../assets/blogs/app-dev.md'
import trainings from '../../assets/blogs/trainings.md'
import placements from '../../assets/blogs/placements.md'
import testBlog from '../../assets/blogs/test.md'

import { overlayContext } from '../../overlayContext'


const Blogs = () => {
  const { hidden } = useContext(overlayContext)

  return (
    <main className={`h-max w-full ${hidden? 'overflow-hidden h-full' : ''}`}>
      <Outlet />
      <BlogsBanner />
      <section className='flex flex-row flex-wrap justify-evenly w-full bg-neutral-100 h-max pb-20'>
        <BlogCard
          title="Test Blog"
          blurb="We make websites that develop your business"
          thumbnail={webDevThumbnail}
          md={testBlog}
          url='test-blog'
          imgAlt='Web Development'
          />
        <BlogCard
          title="Web Development"
          blurb="We make websites that develop your business"
          thumbnail={webDevThumbnail}
          md={webDev}
          url='web-development'
          imgAlt='Web Development'
          />
        <BlogCard
          title="App Development"
          blurb="Best destination to get your own application developed"
          thumbnail={appThumbnail}
          md={appDev}
          url='app-development'
          imgAlt='App Development'
          />
        <BlogCard
          title="Software Development"
          blurb="Providing the simplest solution for the most complex problem"
          thumbnail={softwareDevelopmentThumbnail}
          md={softwareDev}
          url='software-development'
          imgAlt='Software Development'
          />
        <BlogCard
          title="Digital Marketing"
          blurb="Choose what matters to your business and your customers"
          thumbnail={marketingThumbnail}
          md={digitalMarketing}
          url='digital-marketing'
          imgAlt='Digital Marketing'
          />
        <BlogCard
          title="Trainings"
          blurb="We help the caterpillars and transform them into butterflies"
          thumbnail={trainingsThumbnail}
          md={trainings}
          url='trainings'
          imgAlt='Trainings'
          />
        <BlogCard
          title="Placements"
          blurb="Lifting your people and business"
          thumbnail={placementsThumbnail}
          md={placements}
          url='placements'
          imgAlt='Placements'
          />
      </section>
    </main>
  )
}

export default Blogs
