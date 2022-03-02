import { useContext } from 'react'

import Blog from "./Blog"

import webDev from '../../assets/blogs/web-dev.md'
import softwareDev from '../../assets/blogs/software-dev.md'
import digitalMarketing from '../../assets/blogs/digital-marketing.md'
import appDev from '../../assets/blogs/app-dev.md'
import trainings from '../../assets/blogs/trainings.md'
import placements from '../../assets/blogs/placements.md'
import testBlog from '../../assets/blogs/test.md'
import { useNavigate, useParams } from 'react-router-dom'

import { overlayContext } from '../../overlayContext'

const BlogWrapper = () => {

  const { name } = useParams();
  const { setHidden } = useContext(overlayContext)
  let currBlog;
  const navigator = useNavigate()
  const goBack = () => {
    setHidden(false)
    navigator('/blogs')
  }
  const fetchBlog = () => {
    currBlog = <div>Blog Not found</div>
    if (name === 'test-blog')
      currBlog = <Blog title='Test Blog' md={testBlog} back={goBack}/>
    if (name === 'web-development')
      currBlog = <Blog title='Web Development' md={webDev} back={goBack}/>
    if (name === 'app-development')
      currBlog = <Blog title='App Development' md={appDev} back={goBack}/>
    if (name === 'software-development')
      currBlog = <Blog title='Software Development' md={softwareDev} back={goBack}/>
    if (name === 'trainings')
      currBlog = <Blog title='Trainings' md={trainings} back={goBack}/>
    if (name === 'placements')
      currBlog = <Blog title='Placements' md={placements} back={goBack}/>
    if (name === 'digital-marketing')
      currBlog = <Blog title='Digital Marketing' md={digitalMarketing} back={goBack}/>
    }

    fetchBlog()


  return (
    <main>
      {currBlog}
    </main>
  )
}

export default BlogWrapper

