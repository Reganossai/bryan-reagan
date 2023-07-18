import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Togo from '../assets/togo.avif';

const About = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='body-contentt'>
            
            <p>This website provides a tutorial to educate aspiring developers with low or no level or web development knowledge so as to give them a basic knowledge of how to code, how to develop websites or web apps and the basic steps involved in web development. Sit tight and have a wonderful learning experience.</p>
            <img src={Togo} className='about-back' alt='about' />
        </div>
        <Footer/>
    </div>
  )
}

export default About