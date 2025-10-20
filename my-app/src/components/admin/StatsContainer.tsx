import { fetchStats } from '@/utils/actions';
import React from 'react'
import StatsCards from './StatsCard';

const StatsContainer = async() => {


  const data = await fetchStats();

  return (
     <div className='mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3'>
      <StatsCards title='users' value={data?.usersCount || 0} />
      <StatsCards title='properties' value={data?.propertiesCount || 0} />
      <StatsCards title='bookings' value={data?.bookingsCount || 0} />
    </div>
  )
}

export default StatsContainer