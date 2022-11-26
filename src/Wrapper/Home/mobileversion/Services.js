import React from 'react'
import agent from '../../../assets/images/Logo/Agent.svg'
import partner from '../../../assets/images/Logo/partner.svg'
import Lawyer from '../../../assets/images/Logo/Lawyer.svg'
import Kazi from '../../../assets/images/Logo/Kazi.svg'
import Shop from '../../../assets/images/Logo/Shop.svg'
import courses from '../../../assets/images/Logo/online.svg'
import Blog from '../../../assets/images/Logo/Blog.svg'
export const Services = () => {
  return (
    <div>
        <h1 className='font-bold ml-10 mt-12'>All Services</h1>
        <div className='grid grid-cols-4 gap-3 ml-12'>
<img src={partner} className='w-12'></img>
<img src={Lawyer} className='w-12'></img>
<img src={agent} className='w-12'></img>
<img src={Kazi} className='w-12'></img>
<img src={Shop} className='w-12'></img>
<img src={courses} className='w-12'></img>
<img src={Blog} className='w-12'></img>
        </div>
    </div>
  )
}
