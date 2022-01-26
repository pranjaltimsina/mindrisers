import { Link } from 'react-router-dom'

const HeaderButtonRight = () => {
  return (
    <Link to='contact'>
      <button className='rounded-lg h-10 px-5 text-md bg-green-400 text-white hover:bg-slate-300 hover:text-black duration-300'>
        Contact Us
      </button>
    </Link>
  )
}

export default HeaderButtonRight
