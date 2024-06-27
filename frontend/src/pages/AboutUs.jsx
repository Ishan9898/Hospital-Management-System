import React from 'react';
import Hero from '../component/Hero.jsx';
import Biography from '../component/Biography.jsx';
const AboutUs = () => {
  return (
    <>
        <Hero title={"Learn More About Us | Asclepius Alliance"} imageUrl={"/about.png"}/>
        <Biography
            imageUrl={"/whoweare.png"}
        /> 
    </>
  )
}

export default AboutUs;