import { Link } from "react-router-dom"

const FooterPageLinks = () => {
  return (
    <div className='w-max pb-8 md:pb-8'>
      <h4 className='font-bold tracking-wide mb-4 text-xl md:pt-2'>
        Company
      </h4>
      <ul className='text-neutral-300'>
        <li className='hover:text-neutral-400 cursor-pointer'>
          <Link to='about'>
            About Us
          </Link>
        </li>
        <li className='hover:text-neutral-400 cursor-pointer'>
          <Link to='services'>
            Services
          </Link>
        </li>
        {/* <li className='hover:text-neutral-400 cursor-pointer'>Careers</li> */}
        <li className='hover:text-neutral-400 cursor-pointer'>
          <Link to='contact'>
            Contact Us
          </Link>
        </li>
        <li className='hover:text-neutral-400 cursor-pointer'>
          <Link to='blogs'>
            Blogs
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterPageLinks
