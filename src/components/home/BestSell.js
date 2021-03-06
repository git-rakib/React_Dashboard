import React from 'react'
import { useAuth } from '../../context/AuthContext'
import trophy from '../../assets/img/trophy1.png'
import '../style/custom.css'


function BestSell() {
  const { currentUser } = useAuth();
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1 xm:col-span-2 lg:col-auto'>
        <div className='grid grid-flow-row xl:grid-cols-2 lg:grid-cols-1 xm:grid-cols-1 sm:grid-cols-2'>
        <div>
          <span className='2xl:text-[20px] xm:text-[20px] xl:text-[16px] text-green-500 font-semibold'>Congratulations {currentUser.displayName}</span>
          <p className='2xl:text-[16px] xl:text-[14px] text-gray-400'>Best seller of the month</p>
          <h4 className='text-[#6A6CF6] text-[22px] mt-3'>$48.9K</h4>
          <h6 className='text-[#A3ACB7] 2xl:text-[16px] xl:text-[14px] mb-3'>78% target</h6>
          <button className='2xl:py-2 2xl:px-4 xm:py-2 xm:px-4 lg:py-1 lg:px-2 rounded-md 2xl:text-[16px] xl:text-[14px] 2xl:rounded-lg bg-[#6A6CF6] text-gray-100 xl:mt-4 lg:mt-0'>View Sales</button>
        </div>
        <div className='flex items-end justify-center lg:invisible sm:visible xm:invisible xl:visible'>
          <img className='animation-trophy absolute mt-6 2xl:w-32 sm:w-28' src={trophy} alt='' />
        </div>
        </div>
    </div>
  )
}

export default BestSell