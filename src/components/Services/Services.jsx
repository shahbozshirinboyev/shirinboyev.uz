import './Services.css'

function Services() {
  return (
    <div className='container mx-auto px-2 tablet:px-0 grid grid-cols-1 laptop:grid-cols-2 gap-12 my-32'>

      <div className='group'>
        <div className='flex justify-between items-center'>
          <span className='text-4xl font-extrabold number__font-services'>01</span>
          <div className='rotate-45 group-hover:-rotate-45 transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </div>
        </div>
        <h2 className='text-5xl font-extrabold mt-3'>Web Development</h2>
        <p className='mt-12 text-lg opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut odio illum. Cumque, ad facere.</p>
        <hr className='opacity-50 mt-4' />
      </div>

      <div className='group'>
        <div className='flex justify-between items-center'>
          <span className='text-4xl font-extrabold number__font-services'>02</span>
          <div className='rotate-45 group-hover:-rotate-45 transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </div>
        </div>
        <h2 className='text-5xl font-extrabold mt-3'>UI/UX Design</h2>
        <p className='mt-12 text-lg opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut odio illum. Cumque, ad facere.</p>
        <hr className='opacity-50 mt-4' />
      </div>

      <div className='group'>
        <div className='flex justify-between items-center'>
          <span className='text-4xl font-extrabold number__font-services'>03</span>
          <div className='rotate-45 group-hover:-rotate-45 transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </div>
        </div>
        <h2 className='text-5xl font-extrabold mt-3'>Logo Design</h2>
        <p className='mt-12 text-lg opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut odio illum. Cumque, ad facere.</p>
        <hr className='opacity-50 mt-4' />
      </div>

      <div className='group'>
        <div className='flex justify-between items-center'>
          <span className='text-4xl font-extrabold number__font-services'>04</span>
          <div className='rotate-45 group-hover:-rotate-45 transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </div>
        </div>
        <h2 className='text-5xl font-extrabold mt-3'>SEO</h2>
        <p className='mt-12 text-lg opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut odio illum. Cumque, ad facere.</p>
        <hr className='opacity-50 mt-4' />
      </div>

    </div>
  )
}

export default Services