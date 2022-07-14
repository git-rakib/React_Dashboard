import React from 'react'
import { useAuth } from '../../context/AuthContext'
import user from '../../assets/img/user.jpg'

function UserComponent() {
    const { currentUser } = useAuth();
  return (
    <div className='bg-white rounded-xl p-6 box-shadow-1 ml-8 mt-8 col-span-2'>
   <div className='grid grid-flow-row grid-cols-2'>
   <div>
      <span className='text-[20px] text-green-500 font-semibold'>Congratulations {currentUser.displayName}</span>
      <p className='text-[16px] text-gray-400 mt-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
      <button className='py-2 px-4 rounded-lg bg-blue-50 text-gray-500 mt-6'>View Sales</button>
    </div>
    <div className='flex items-end justify-center'>
      <img className='mt-6 w-5/12' src={user} alt='' />
    </div>
   </div>
</div>
  )
}

export default UserComponent