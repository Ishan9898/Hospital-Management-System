import React from 'react'
import Hero from '../component/Hero';
import AppointmentForm from "../component/AppointmentForm";
const Appointment = () => {
    return (
      <div>
        <Hero
          title={"Schedule Your Appointment | Asclepius Alliance"}
          imageUrl={"/signin.png"}
        />
        <AppointmentForm/>
      </div>
    );
  };
  
  export default Appointment;