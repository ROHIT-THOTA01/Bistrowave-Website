import React from 'react'
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import breakfastImg from '../utils/utils/img/breakfast.jpg'
import lunchImg from '../utils/utils/img/lunch.jpg'
import dinnerImg from '../utils/utils/img/dinner.jpg'
import dessertImg from '../utils/utils/img/dessert.jpg'

const breakfast = [
  {
    id: 1,
    name: 'Idli-Sambar',
    description: 'Soft rice cakes with lentil stew',
    price: `\u20B9 60`
  },{
    id: 2,
    name: 'Aloo parantha',
    description: 'Stuffed flatbread with spiced potatoes',
    price: `\u20B9 80`
  },{
    id: 3,
    name: 'Dosa',
    description: 'Crispy crepe with savory fillings',
    price: `\u20B9 50`
  },
];

const lunch = [
  {
    id: 1,
    name: 'Chicken Biryani',
    description: 'Fragrant rice dish with tender chicken',
    price: `\u20B9 300`
  },{
    id: 2,
    name: 'South Indian Thali',
    description: 'Assorted platter with rice, curry, and sides',
    price: `\u20B9 200`
  },{
    id: 3,
    name: 'Mutton Mandi',
    description: 'Slow-cooked rice dish with spiced mutton',
    price: `\u20B9 500`
  },
];

const dinner = [
  {
    id: 1,
    name: 'Panner Butter Masala',
    description: 'Creamy tomato curry with cottage cheese',
    price: `\u20B9 250`
  },{
    id: 2,
    name: 'Chicken Tikka Masala',
    description: 'Spicy tomato curry with grilled chicken',
    price: `\u20B9 350`
  },{
    id: 3,
    name: 'Veg Biryani',
    description: 'Fragrant rice dish with assorted vegetables',
    price: '\u20B9 200'
  },
];

const dessert = [
  {
    id: 1,
    name: 'Gulab Jamun',
    description: 'Deep-fried milk balls in sugar syrup',
    price: '\u20B9 50'
  },{
    id: 2,
    name: 'Cheese Cake',
    description: 'Creamy dessert with a biscuit base',
    price: '\u20B9 100'
  },{
    id: 3,
    name: 'Ice Cream',
    description: 'Chilled dessert with assorted flavors',
    price: '\u20B9 40'
  },
];

export default function Menu() {
  return (
    <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
        <h1 className='text-light text-uppercase'>Menu</h1>
        </div>
      </header>

      {/* breakfast */}
      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-6 text-uppercase fw-bold text-success'>Breakfast</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={breakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              { breakfast.map((breakfast) => (
                <div key={breakfast.id}>
                  <Card className='border-1 shadow'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'> {breakfast.name} </CardTitle>
                      <CardText className='text-center fs-5'> {breakfast.description} </CardText>
                      <CardText className='text-center fs-3 fw-bold text-warning'> {breakfast.price} </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lunch */}
      <div className='lunch bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-6 text-uppercase fw-bold text-success'>Lunch</h2>
          <div className='row'>
            
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              { lunch.map((lunch) => (
                <div key={lunch.id}>
                  <Card className='border-1 shadow bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'> {lunch.name} </CardTitle>
                      <CardText className='text-center fs-5'> {lunch.description} </CardText>
                      <CardText className='text-center fs-3 fw-bold text-warning'> {lunch.price} </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={lunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
            </div>
          </div>
        </div>
      </div>

      {/* Dinner */}
      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-6 text-uppercase fw-bold text-success'>Dinner</h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={dinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              { dinner.map((dinner) => (
                <div key={dinner.id}>
                  <Card className='border-1 shadow'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'> {dinner.name} </CardTitle>
                      <CardText className='text-center fs-5'> {dinner.description} </CardText>
                      <CardText className='text-center fs-3 fw-bold text-warning'> {dinner.price} </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* dessert */}
      <div className='lunch bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-6 text-uppercase fw-bold text-success'>Desserts</h2>
          <div className='row'>
            
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              { dessert.map((dessert) => (
                <div key={dessert.id}>
                  <Card className='border-1 shadow bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3'> {dessert.name} </CardTitle>
                      <CardText className='text-center fs-5'> {dessert.description} </CardText>
                      <CardText className='text-center fs-3 fw-bold text-warning'> {dessert.price} </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={dessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt='' />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
