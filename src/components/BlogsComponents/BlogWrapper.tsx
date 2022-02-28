import { useEffect, useRef } from 'react'

import Blog from "./Blog"

import webDev from '../../assets/blogs/web-dev.md'
import softwareDev from '../../assets/blogs/software-dev.md'
import digitalMarketing from '../../assets/blogs/digital-marketing.md'
import appDev from '../../assets/blogs/app-dev.md'
import trainings from '../../assets/blogs/trainings.md'
import placements from '../../assets/blogs/placements.md'
import { useNavigate, useParams } from 'react-router-dom'

const BlogWrapper = () => {
  let { urlPath } = useParams();
  console.log(urlPath)
  let currBlog;
  const navigator = useNavigate()
  const goBack = () => {
    navigator('/blogs')
  }
  // const childRef = useRef(null)
  const fetchBlog = () => {
    currBlog = <div>Blog Not found</div>
    if (urlPath === 'web-development')
      currBlog = <Blog title='Web Development' md={webDev} back={goBack}/>
    if (urlPath === 'app-development')
      currBlog = <Blog title='App Development' md={appDev} back={goBack}/>
    if (urlPath === 'software-development')
      currBlog = <Blog title='Software Development' md={softwareDev} back={goBack}/>
    if (urlPath === 'trainings')
      currBlog = <Blog title='Trainings' md={trainings} back={goBack}/>
    if (urlPath === 'placements')
      currBlog = <Blog title='Placements' md={placements} back={goBack}/>
    if (urlPath === 'digital-marketing')
      currBlog = <Blog title='Digital Marketing' md={digitalMarketing} back={goBack}/>
    }

  useEffect(fetchBlog ,[])

  return (
    {currBlog}
  )
}

export default BlogWrapper

