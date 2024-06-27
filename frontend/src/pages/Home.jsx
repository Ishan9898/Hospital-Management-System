import React from 'react';
import Hero from '../component/Hero';
import Biography from "../component/Biography";
import DepartMent from "../component/Departement";
import MessageForm from "../component/MessageForm";
const Home = () => {
  return (
    <div>
        <Hero title={"Welcome to the Asclepus Alliances"} 
            imageUrl={"/Hero1.png"}
        />
        <Biography 
            imageUrl={
                "/about.png"
            }
        />
        <DepartMent/>
        <MessageForm/>
    </div>
  )
}

export default Home