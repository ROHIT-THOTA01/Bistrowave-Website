import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuBtn() {
  return(
    <div>
      <Link to='/menu'>
        <button type='button' className='btn btn-outline-danger btn-lg'>Our Full Menu</button>
      </Link>
    </div>
  )
}