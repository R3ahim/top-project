import React from 'react'
import phone from '../../../assets/images/phone.png'

function Phone() {
  return (
    <div className='mt-28 mb-10'>
        <h1 className='text-center font-bold text-4xl'>Phone Contacting</h1>
        <div className='flex justify-center items-center ms:flex-row'>

   
        <div class="mockup-phone border-primary">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-1"><img src={phone} className={'h-[500px]'} alt=''/></div>
  </div>
</div>


<div className='flex-1 px-5'>
                <h3 className='text-xl text-secondary font-bold'>Appointment</h3>
                <h2 className='text-3xl py-5'>Make an Appointment Today</h2>
                <p className=' pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
              <button className='btn btn-secondary'>Buy now</button>
    </div>
</div>
    </div>
  )
}

export default Phone