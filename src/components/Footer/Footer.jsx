import React from 'react'

function Footer() {
  return (
         <div className='flex sm:flex-col md:flex-row py-8 justify-center md:justify-around sm:items-center md:items-start gap-4 bg-black w-full'>
          <div className='w-36 text-center'>
            <h2 className='text-white text-3xl capitalize'>Product</h2>
            <ul className='text-white '>
              <li className='text-lg'>Categories</li>
              <li className='text-lg'>New Arrival</li>
              <li className='text-lg'>Features</li>
              <li className='text-lg'>Collections</li>
            </ul>
          </div>
          <div className='w-36 text-center'>
            <h2 className='text-white text-3xl capitalize'>company</h2>
            <ul className='text-white'>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Services</li>
            </ul>
          </div>
          <div className='w-36 text-center '>
            <h2 className='text-white text-3xl capitalize'>Support</h2>
            <ul className='text-white '>
              <li>Support Center</li>
              <li>FAQ</li>
              <li>Privary Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
         </div>

  )
}

export default Footer