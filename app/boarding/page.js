import { auth } from '@clerk/nextjs'
import React from 'react'
import { BoardingForm } from '../(components)/BoardingFrom'

const Boarding = () => {

  const {userId} = auth()
  // console.log(userId)

  return (
    <div>
      <BoardingForm userId={userId} />
    </div>
  )
}

export default Boarding