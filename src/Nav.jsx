import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between p-3 bg-amber-300'>
    <div>Subina</div>
    <ul className='flex gap-3'>
      <li>Home</li>
      <li>About</li>
      <li>Service</li>
      <li>Contact</li>
      <li>Gallery</li>
    </ul>
    </nav>
  )
}

export default Nav