// normal import 
import React from 'react'

// images import 
import agent from '../../../assets/images/Logo/Agent.svg'
import partner from '../../../assets/images/Logo/partner.svg'
import Lawyer from '../../../assets/images/Logo/Lawyer.svg'
import Kazi from '../../../assets/images/Logo/Kazi.svg'
import Shop from '../../../assets/images/Logo/Shop.svg'
import courses from '../../../assets/images/Logo/online.svg'
import Blog from '../../../assets/images/Logo/Blog.svg'
import { Link } from 'react-router-dom'

export const Services = () => {
  return (
    <div>
      <h1 className='font-bold ml-6 mt-10 mb-4'>All Services</h1>
      <div className='grid grid-cols-4 ml-5 gap-3 mr-6'>
        <div className='bg-service-mov rounded-lg'>
        <img src={partner} className='w-8 mx-auto mt-1' alt="Not Available"></img>
        <h1 className='text-[11px] text-white font-bold text-center pb-1'>Find Match</h1>
        </div>
        
        <div className=' bg-service-mov rounded-lg'>
        <img src={Lawyer} className='w-8 mx-auto mt-1'  alt="Not Available"></img>
        <h1 className='text-[11px] text-white font-bold text-center pb-1'>Lawyer</h1>
        </div>

        <div className=' bg-service-mov rounded-lg'>
        <img src={agent} className='w-8 mx-auto mt-1' alt="Not Available"></img>
        <h1 className='text-[11px] text-white font-bold text-center pb-1'>Agent</h1>
        </div>
        
        <div className='bg-service-mov rounded-lg'>
        <img src={Kazi} className='w-8 mx-auto mt-1' alt="Not Available"></img>
        <h1 className='text-[11px] text-white font-bold text-center pb-1'>Kazi</h1>
        </div>
        
        <div className='bg-service-mov rounded-lg'>
        <img src={Shop} className='w-8 mx-auto mt-1' alt="Not Available"></img>
        <h1 className='text-[11px] text-white font-bold text-center pb-1'>Shop</h1>
        </div>
       
       <div className='bg-service-mov rounded-lg'>
       <img src={courses} className='w-8 mx-auto mt-1' alt="Not Available"></img>
       <h1 className='text-[11px] text-white font-bold text-center pb-1'>Courses</h1>
       </div>
        
        <div className='bg-service-mov rounded-lg'>
          <Link to='/allposts'>
          <img src='https://i.ibb.co/kyBKkbT/Vector.png' className='w-8 mx-auto mt-1 rounded-full' alt="Not Available"></img>
        <h1 className='text-[11px] text-white font-bold text-center pb-1'>Posts</h1>
          </Link>
       
        </div> 
        
        <div className='bg-service-mov rounded-lg'>
        <img src={Blog} className='w-8 mx-auto mt-1' alt="Not Available"></img>
        <h1 className='text-[11px] text-white font-bold text-center pb-1'>Blog</h1>
        </div> 
        
      </div>
    </div>
  )
}
