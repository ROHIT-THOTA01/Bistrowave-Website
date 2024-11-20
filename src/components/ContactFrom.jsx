import React from 'react'
import {Form} from 'react-bootstrap'
import Swal from 'sweetalert2'


function ContactFrom() {

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append("access_key", "4a5a3f85-7c85-422c-9ff1-b1207beeb531")

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json
    }).then((res) => res.json());

    if(res.success) {
      Swal.fire({
        title: "Thank You!",
        text: "Booking Successful!",
        icon: "success"
      });
    }

  }

  return (
    <div className='container'>
      <h2 className='text-center text-success mb-3 fw-bold'>BOOK TABLE</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='row mb-3'>
          <div className="col">
            <Form.Label htmlFor='name'>Name</Form.Label>
            <Form.Control type='text' id='name' name='name' required />
          </div>
        </Form.Group>
        <Form.Group className='row mb-3'>
          <div className="col-md-6">
            <Form.Label htmlFor='tel'>Phone Number</Form.Label>
            <Form.Control type='tel' id='phone-number' name='phone' required />
          </div>
          <div className="col-md-6">
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control type='email' id='email-address' name='email' required />
          </div>
        </Form.Group>
        <Form.Group className='row mb-3'>
          <div className="col-md-6">
            <Form.Label htmlFor='date'>Date</Form.Label>
            <Form.Control type='date' id='date' name='date' required />
          </div>
          <div className="col-md-6">
            <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
            <Form.Control type='number' id='guests-number' name='total-guests' required />
          </div>
        </Form.Group>
        <Form.Group className='row mb-3'>
          <div className="col-md-6">
            <Form.Label htmlFor='reservation-type'>Type of Reservation</Form.Label>
            <Form.Select id='reservation-type' name='reservation-type'>
              <option value="" selected>Choose Type</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </Form.Select>
          </div>
          <div className="col-md-6">
            <Form.Label htmlFor='occasion'>Occation</Form.Label>
            <Form.Select id='occasion' name='occusion'>
              <option value="" selected>Choose Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="meeting">Meeting</option>
              <option value="casual-dining">Casual Dining</option>
            </Form.Select>
          </div>
        </Form.Group>  
        <Form.Group className='mb-4'>
          <Form.Label htmlFor='information'>Additional Information</Form.Label>
          <Form.Control name='additional-information' type='textarea' id='information' />
        </Form.Group>
        <button className='btn btn-outline-success btn-lg w-100'>confirm</button>
      </Form>
    </div>
  )
}

export default ContactFrom
