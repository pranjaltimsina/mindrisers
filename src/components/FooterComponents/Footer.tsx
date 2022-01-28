import CompanyInfo from './CompanyInfo'
import FooterBottom from './FooterBottom'
import FooterContact from './FooterContact'
import FooterPageLinks from './FooterPageLinks'

const Footer = () => {
  return (
    <footer className='text-white h-screen sm:h-max '>
      <div className='flex h-full flex-col sm:flex-row bg-slate-800'>
        <CompanyInfo />
        <FooterPageLinks />
        <FooterContact />
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
