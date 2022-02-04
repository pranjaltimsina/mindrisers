import CompanyInfo from './CompanyInfo'
import FooterBottom from './FooterBottom'
import FooterContact from './FooterContact'
import FooterPageLinks from './FooterPageLinks'

const Footer = () => {
  return (
    <footer className='text-white w-full h-max sm:h-max '>
      <div className='flex h-max w-full flex-col sm:flex-row sm:justify-between bg-slate-800 px-10 sm:px-56 pt-20 pb-10 overflow-x-hidden'>
        <CompanyInfo />
        <FooterPageLinks />
        <FooterContact />
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
