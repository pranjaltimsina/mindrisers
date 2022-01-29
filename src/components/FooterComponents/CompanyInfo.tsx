import HeaderLeft from '../HeaderComponents/HeaderLeft'
import SocialLinks from './SocialLinks'

const CompanyInfo = () => {
  return (
    <div className='flex flex-col w-full sm:w-1/3'>
      <HeaderLeft />
      <p className='w-full'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis!
      </p>
      <SocialLinks />
    </div>
  )
}

export default CompanyInfo
