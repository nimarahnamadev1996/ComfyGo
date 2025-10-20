import ChartsContainer from '@/components/admin/ChartsContainer'
import { ChartsLoadingContainer, StatsLoadingContainer } from '@/components/admin/Loading'
import StatsContainer from '@/components/admin/StatsContainer'
import React, { Suspense } from 'react'

const AdminPage = () => {
  return (
    <div>

      <Suspense fallback={<StatsLoadingContainer/>}>
        <StatsContainer/>
      </Suspense>

      <Suspense fallback={<ChartsLoadingContainer/>}>
        <ChartsContainer/>
      </Suspense> 
    </div>

  )
}

export default AdminPage