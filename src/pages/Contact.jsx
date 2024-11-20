import React from 'react'
import './Contact.css'
import ContactInfo from '../components/ContactInfo'
import ContactFrom from '../components/ContactFrom'

export default function Contact() {
  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light text-uppercase'>Contact</h1>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center bg-light rounded">
            <ContactInfo />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center contact-form">
            <ContactFrom />
          </div>
        </div>
      </div>

    </div>
  )
}
