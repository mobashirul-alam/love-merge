import React from 'react'
import { LawyerActivityMov } from '../../../Wrapper/Home/mobileversion/mobilelawyeractivity/LawyerActivityMov'
import { CompletedCase } from './CompletedCase'
import { FirstCard } from './FirstCard'
import { PendingCase } from './PendingCase'
import { RunningCase } from './RunningCase'

export const LawyerActivity = () => {
  return (
    <div>
      <div className='hidden md:block'>
        <FirstCard></FirstCard>
        <PendingCase></PendingCase>
        <RunningCase></RunningCase>
        <CompletedCase></CompletedCase>
      </div>

      <div className='md:hidden'>
        <LawyerActivityMov></LawyerActivityMov>
      </div>
    </div>
  )
}
