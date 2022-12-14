import React from 'react'
import HeroImg from '../../../assets/images/chair.png'

function Hero() {
  return (
    <div>
<div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={HeroImg} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-secondary text-white">Appointment</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero