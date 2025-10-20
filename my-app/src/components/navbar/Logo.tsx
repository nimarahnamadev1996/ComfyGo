import React from 'react'
import Link from 'next/link'
import { LucideTent } from 'lucide-react'



import { Button } from '../ui/button'



const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
         <LucideTent className='w-6 h-6' />
      </Link>
    </Button>
  )
}

export default Logo