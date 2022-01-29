import ContactBanner from './ContactBanner'
import PageCard from './PageCard'

const ContactUs = () => {
  return (
    <main className='h-max bg-white'>
      <ContactBanner />
      <div className='w-full flex flex-row flex-wrap h-max'>
        <PageCard child={'Hello'}/>
        <PageCard child={'Hello'}/>
        <PageCard child={'Hello'}/>
        <PageCard child={'Hello'}/>
      </div>
    </main>
  )
}

export default ContactUs
