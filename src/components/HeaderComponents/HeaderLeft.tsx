import { Link } from 'react-router-dom'

import Logo from '../../assets/mindrisers.png'

const HeaderLeft = () => {
  return (
    <Link to='/'>
      <div id='header-left' className='flex flex-row items-center space-x-3 cursor-pointer'>
        <img src={Logo} alt='MindRisers' width={45}/>
        <h1 className='font-sans font-bold text-2xl leading-9'>MindRisers</h1>
      </div>
    </Link>
  )
}

export default HeaderLeft
