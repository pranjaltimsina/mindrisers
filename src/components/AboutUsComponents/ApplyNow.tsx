const ApplyNow = () => {
  return (
    <section className="w-full flex flex-col space-y-6 md:space-y-0 md:flex-row py-10 px-5 md:px-24 md:space-x-5">
      <h1 className='font-bold text-center md:text-left text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl w-full md:w-3/5'>This is your chance to jumpstart your business</h1>
      <div className="w-full md:w-2/5 flex flex-col items-center md:items-start">
        <h2 className='font-sans font-bold text-base md:text-xl  lg:text-2xl text-center md:text-left'>Interested in joining our team?</h2>
        <p className="font-sans text-center md:text-left text-neutral-600">Email your resume and we'll get in touch with you</p>
        <button
          onClick={() => window.location.href = 'mailto:tech.mindrisers@gmail.com'}
          className="mt-4 w-max px-5 py-3 bg-green-500 font-medium text-white hover:bg-slate-300 hover:text-black duration-500 cursor-pointer rounded-md">
          Apply Now
        </button>
      </div>
    </section>
  )
}

export default ApplyNow
