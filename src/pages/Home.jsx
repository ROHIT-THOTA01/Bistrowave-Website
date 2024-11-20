import React, {useState, useEffect, useCallback} from 'react'
import './Home.css'
import MenuBtn from '../components/MenuBtn'
import { Link } from 'react-router-dom'
import AboutImg from '../utils/utils/img/about.jpg'
import ImageGallery from '../components/ImageGallery'
import ContactInfo from '../components/ContactInfo'
import ContactImg from '../utils/utils/img/contact.jpg'

export default function Home() {

  // Set the discount end time as a fixed time 3 hours from the first page load
  const [discountEndTime] = useState(new Date().getTime() + 3 * 60 * 60 * 1000);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = discountEndTime - now;

    if (difference > 0) {
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      return { hours, minutes, seconds };
    } else {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
  }, [discountEndTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);


  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                <h2 className='mb-0 text-black fw-normal'>Welcome To</h2>
                <h1 className='mb-4 text-black fw-bold text-center text-sm-start'>Bistrowave</h1>
                <div className='discount-section p-3 mb-3 rounded'>
                  <h3 className='text-light'>40% off on your first visit</h3>
                    <p className='mb-1 text-light'>
                      Hurry! offer ends in: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </p>
                </div>
                <MenuBtn />
              </div>
            </div>
          </div>
      </header>

      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
            <img src={AboutImg} className='img-fluid w-100 shadow' alt='about img' />
          </div>
          <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
            <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
            <p className='mb-5 about-text'>
              Welcome to Bistrowave, where culinary creativity meets warm hospitality. Nestled in the heart of Hyderabad, we’re a cozy, inviting spot that combines the finest ingredients with expert techniques to bring you an exceptional dining experience.
              Our chefs are passionate about crafting dishes that capture the essence of traditional flavors, reimagined with a modern twist. Each plate is prepared with fresh, locally sourced ingredients, and our menu offers a variety of choices that cater to every palate—from timeless classics to innovative seasonal specials.
            </p>
            <Link to='/about'>
              <button type='button' className='btn btn-outline-danger btn-lg'>More About Us</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='menu-section py-5 text-light shadow'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
          <div className='row mb-5 w-100'>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5 text-warning'>Food</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'> Chicken Biryani </p>
                  <p className='fs-3 mx-2 text-success fw-bold'>&#8377;{300}</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'> Mutton Mandi </p>
                  <p className='fs-3 mx-2 text-success fw-bold'>&#8377;{500}</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'> Panner Butter Masala </p>
                  <p className='fs-3 mx-2 text-success fw-bold'>&#8377;{350}</p>
                </li>
              </ul>
            </div>

            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5 text-warning'>Drinks</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Clover Club</p>
                  <p className='fs-3 mx-2 text-success fw-bold'>&#8377;{120}</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Expresso Martini</p>
                  <p className='fs-3 mx-2 text-success fw-bold'>&#8377;{90}</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Mojito</p>
                  <p className='fs-3 mx-2 text-success fw-bold'>&#8377;{60}</p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>
      <ImageGallery />

      <div className='bg-dark text-light py-5 shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
              <ContactInfo />
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={ContactImg} className='img-fluid w-50' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
