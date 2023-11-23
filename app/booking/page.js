import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'
import CalendarApp from '../(components)/CalendarApp'

const BookingPage = () => {
    const {userId} = auth()
    // if (userId) {
    //     redirect('/sign-in')
    // }
  return (
    <div>
        <CalendarApp />
    </div>
  )
}

export default BookingPage