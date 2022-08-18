import React from 'react'
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
function Serivces() {
   
        const services = [
            {
                _id: 1,
                name: 'Fluoride Treatment',
                description: '',
                img: fluoride
            },
            {
                _id: 2,
                name: 'Cavity Filling',
                description: '',
                img: cavity
            },
            {
                _id: 3,
                name: 'Teeth Whitening',
                description: '',
                img: whitening
            },
        ];
  return (

<div className='my-28'>
            <div className='text-center'>
                <h3 className='text-secondary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={service.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{service.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>)
                }
            </div>
        </div>

  )
}

export default Serivces