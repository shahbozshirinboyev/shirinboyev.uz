import "./Statistic.css";

function Statistic() {
  return (
    <div className='container mx-auto px-2 tablet:px-0 grid grid-cols-2 gap-4 laptop:grid-cols-4 mt-10'>
      <div className='flex items-center justify-start gap-2'>
        <p className='text-5xl font-extrabold leading-10 number__font'>12</p>
        <p className='leading-5 font-semibold'>Years of<br />experience</p>
      </div>
      <div className='flex items-center justify-start gap-2'>
        <p className='text-5xl font-extrabold leading-10 number__font'>26</p>
        <p className='leading-5 font-semibold'>Projects<br />completed</p>
      </div>
      <div className='flex items-center justify-start gap-2'>
        <p className='text-5xl font-extrabold leading-10 number__font'>8</p>
        <p className='leading-5 font-semibold'>Technologies<br />mastered</p>
      </div>
      <div className='flex items-center justify-start gap-2'>
        <p className='text-5xl font-extrabold leading-10 number__font'>523</p>
        <p className='leading-5 font-semibold'>Code<br />commits</p>
      </div>
    </div>
  )
}

export default Statistic