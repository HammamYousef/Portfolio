import { companies } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const Companies = () => {
  return (
    <div className="mt-20 lg:mt-0">
          <InfiniteMovingCards 
              items={companies}
              direction="right"
              speed="normal"
            />
    </div>
  )
}

export default Companies