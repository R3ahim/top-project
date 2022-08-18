import React from 'react'
import Hero from './Hero/Hero'
import Iconic from './IconicCard/Iconic'
import MakeAppointment from './MakeApoinment/MakeApinment'
import Phone from './Phone/Phone'
import Service from './Service/Serivces'

function Home() {
  return (
    <div>
        <Hero/>
        <Iconic/>
        <Service/>
        <MakeAppointment/>
        <Phone></Phone>
   
    </div>
  )
}

export default Home