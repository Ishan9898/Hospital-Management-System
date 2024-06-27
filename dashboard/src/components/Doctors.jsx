import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const Doctors = () => {
  const [doctors,setDoctors] = useState([]);
  const {isAuthenticated} = useContext(Context);

useEffect(()=>{
      const fetchDoctors = async () =>{
        try {
          const Data = await axios.get("http://localhost:4000/api/v1/user/doctors",
        {withCredentials:true});
        setDoctors(Data.doctors);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };
      fetchDoctors();
},[]);
if(!isAuthenticated){
  return <Navigate to={"/login"}/>
}
  return (
  <>
    <section className="page doctors">
        <h1>Doctors</h1>
        <div className="banner">
          {
            doctors && doctors.length>0 ? (doctors.map(element=>{
              return(
                <div className="card">
                  <img src={element.docAvatar && element.docAvatar.url} alt="Doctor Avatar" />
                  <h4>{`${element.firstName} ${element.lastName}`}</h4>
                  <div className="details">
                  <p>Email: <span>{element.email}</span></p>
                  <p>phone: <span>{element.phone}</span></p>
                  <p>DOB: <span>{element.dob.substring(0,10)}</span></p>
                  <p>Departement: <span>{element.departement}</span></p>
                  <p>NIC: <span>{element.nic}</span></p>
                  <p>Gender: <span>{element.gender}</span></p>
                </div>
                </div>
              )
            })):<h1>No registered Doctors found</h1>
          }
        </div>
    </section>
  </>
  )
  
}

export default Doctors;