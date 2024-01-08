import React from 'react'
import Nav from './Nav'
import Overview from './Overview'

const Main = () => {
  return (
    <div className='flex justify-between gap-24'>
      <div className='w-1/5'>
        <Nav active={0}/>
      </div>
      
      <Overview />
    </div>
  )
}

export default Main