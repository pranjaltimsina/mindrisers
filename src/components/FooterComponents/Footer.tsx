import CompanyInfo from './CompanyInfo'
import FooterBottom from './FooterBottom'
import FooterContact from './FooterContact'
import FooterPageLinks from './FooterPageLinks'

const Footer = () => {
  return (
    <footer className='text-white w-full h-max sm:h-max '>
      <div className='flex h-max w-full flex-col md:flex-row items-center md:items-start justify-between bg-neutral-800 px-8 sm:px-12 md:px-14 lg:px-28 xl:px-36 2xl:px-48 pt-10 md:pt-20 pb-10 overflow-x-hidden'>
        <CompanyInfo />
        <FooterPageLinks />
        <FooterContact />
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
