import Prabhu from '../../assets/partners/prabhu-pay.png'
// import Pentagram from '../../assets/partners/pentagram.jpg'
// import RealPath from '../../assets/partners/realpath.jpg'
import TummyTruck from '../../assets/partners/tummy-truck.png'
import Vianet from '../../assets/partners/vianet.png'

interface partnerInterface {
  image: any,
  name: string
}

const Partner = ({ image, name }: partnerInterface) => {
  return (
    <img
      src={image}
      alt={name}
      className='h-32 w-32'
    />
  )
}

const Partners = () => {
  return (
    <section className='bg-neutral-100 h-max flex flex-col py-20 sm:pt-24 sm:px-10 md:px-20 lg:px-40 xl:px-48 px-5 space-y-12'>
      <div className='flex flex-col'>
        <h3 className='w-full text-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'>We strive to work with the best</h3>
        <p className='w-full text-center'>
          We have worked with successful companies, who have nothing but good things to say about us.
        </p>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap justify-evenly space-y-10 md:space-y-0 md:space-x-16 items-center'>
        <Partner
          image={Prabhu}
          name='PrabhuPay'
        />
        <Partner
          image={TummyTruck}
          name='TummyTruck'
        />
        <Partner
          image={Vianet}
          name='Vianet'
        />
        {/* <Partner
          image={Pentagram}
          name='Pentagram'
        /> */}
        {/* <Partner
          image={RealPath}
          name='realpath'
        /> */}
      </div>
    </section>
  )
}

export default Partners
