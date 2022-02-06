import HeaderLeft from '../HeaderComponents/HeaderLeft'
import SocialLinks from './SocialLinks'

const CompanyInfo = () => {
  return (
    <div className='flex flex-col w-full md:w-1/3 items-center md:items-start'>
      <HeaderLeft />
      <p className='w-1/2 text-justify md:w-full text-sm text-neutral-300 pt-4 pb-7 md:pb-0'>
        MindRisers Consortium is a forward-thinking app and website development company with extensive experience in creating apps and supporting technologies.
      </p>
      {/* <SocialLinks /> */}
    </div>
  )
}

export default CompanyInfo
