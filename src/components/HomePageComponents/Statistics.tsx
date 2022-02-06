import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import StatisticsImage from '../../assets/statistics-img.jpg'

interface statisticInterface {
  value: number,
  label: string
}

const Statistic = ({ value, label }: statisticInterface) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='w-40 h-40 sm:w-36 sm:h-36 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32'>
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          strokeWidth={6}
          styles={{
            path: {
              // Path color
              stroke: `rgb(34, 197, 94)`
            },
            text: {
              // Text color
              fill: `#fff`,
              fontWeight: 'bold'
            }
          }}
        />
      </div>
      <p className='text-white font-medium text-center pt-4 text-base md:text-base xl:text-lg 2xl:text-xl'>{label}</p>
    </div>
  )
}

const Statistics = () => {
  return (
    <section className="bg-statistics-bg bg-fixed bg-contain h-max">
      <div className='w-full h-full flex flex-col items-center bg-mask lg:flex-row py-20 sm:py-32 px-5 sm:px-32 space-y-12 lg:space-y-0'>
        <div className='w-full lg:w-1/2 px-4 pl-10 flex flex-col space-y-9'>
          <h4 className='text-md font-medium font-sans text-green-500 tracking-widest'>STATISTICS</h4>
          <h1 className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-5/6' >Consumer insights. Market innovation.</h1>
          <p className='text-white'>
            Each of our solutions are tailored to your business.
          </p>
          <div className='flex flex-col space-y-10 lg:space-y-0 lg:flex-row w-full lg:space-x-9 items-center pr-5'>
            <Statistic value={87} label='Projects Done' />
            <Statistic value={90} label='Problems Solved'/>
            <Statistic value={75} label='Revenue Increase'/>
          </div>
        </div>
        <div className='w-full lg:w-1/2 px-4' >
          <img src={StatisticsImage} alt='Services' className='rounded-md w-full object-cover' />
        </div>
      </div>
    </section>
  )
}

export default Statistics


