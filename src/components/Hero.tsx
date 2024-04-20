import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='hero py-5 px-3'>
      <div className="h-100 container d-flex justify-content-end align-items-center">
        <div className='w-100 d-none d-sm-block'>
        </div>
        <div className='w-100'>
          <h1>Enjoy Your Event</h1>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolore recusandae commodi sed maxime nisi at cupiditate corrupti obcaecati et.</p>
          <Link href="#" className="btn btn-dark mt-3" role="button" data-bs-toggle="button">View Events</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero