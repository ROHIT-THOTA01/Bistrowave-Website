import React from 'react'
import './About.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import chefImg1 from '../utils/utils/img/chef1.jpg'
import chefImg2 from '../utils/utils/img/chef2.jpg'
import chefImg3 from '../utils/utils/img/chef3.jpg'
import ImageGallery from '../components/ImageGallery'
import { Reviews } from '../components/Reviews'
 
export default function About() {
  return (
    <div className='about-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light text-uppercase'>About</h1>
        </div>
      </header>   

      <div className='container my-5'>
        <p className='about-text'>
          Welcome to Bistrowave, where culinary creativity meets warm hospitality. Nestled in the heart of Hyderabad, we’re a cozy, inviting spot that combines the finest ingredients with expert techniques to bring you an exceptional dining experience.
          Our chefs are passionate about crafting dishes that capture the essence of traditional flavors, reimagined with a modern twist. Each plate is prepared with fresh, locally sourced ingredients, and our menu offers a variety of choices that cater to every palate—from timeless classics to innovative seasonal specials.
        </p>
        <div className='row'>
          <div className='col-lg-4'>
            <img src={chefImg1} className='img-fluid my-4' alt='' />
          </div>
          <div className='col-lg-4'>
            <img src={chefImg2} className='img-fluid my-4' alt='' />
          </div>
          <div className='col-lg-4'>
            <img src={chefImg3} className='img-fluid my-4' alt="" />
          </div>
        </div>
        <h2 className='text-uppercase text-center my-4'>Our Mission</h2>
        <p className='about-text'>
          At Bistrowave, we believe that great food brings people together. Our mission is to create a welcoming space where guests can enjoy delicious meals in a relaxed, comfortable setting. Whether you’re dining with friends, family, or colleagues, we strive to provide an exceptional experience that leaves you feeling satisfied and inspired.
        </p>
        <h2 className="text-center mb-4">Why Choose Us?</h2>
      <Row className="gy-4">
        <Col md={6} lg={3}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-bold">Fresh Ingredients</Card.Title>
              <Card.Text>
                Sourced from trusted local suppliers to ensure quality in every dish.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={3}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-bold">Skilled Chefs</Card.Title>
              <Card.Text>
                Dedicated to creating innovative dishes that honor traditional flavors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={3}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-bold">Inviting Ambiance</Card.Title>
              <Card.Text>
                Enjoy a warm, welcoming atmosphere that’s perfect for family gatherings, romantic evenings, or casual meals with friends.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={3}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-bold">Customer-Centric Service</Card.Title>
              <Card.Text>
                Your satisfaction is our top priority, and our staff is here to make your experience exceptional.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <p className="text-center mt-4">
        Whether you’re a food lover or just looking for a place to relax and enjoy a good meal, we’re excited to have you. Come visit us and taste the difference!
      </p>
      </div>
      <div className='bg-dark text-light'>
        <ImageGallery />
      </div>
      <div className='my-5'>
        <Reviews />
      </div>
    </div>
  )
}
