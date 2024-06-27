// import React, { useContext, useEffect, useState } from 'react'
// import { Context } from '../main'
// import { Navigate } from 'react-router-dom';
// import axios from 'axios';
// import { GoCheckCircle } from 'react-icons/go';
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { toast } from 'react-toastify';
// const Dashboard = () => {
//   const {isAuthenticated,user} = useContext(Context)
//   const [appointements,setAppointements] = useState([]);
//   useEffect(()=>{
//     const fetchAppointments = async () =>{
//       try {
//         const data = await axios.get("http://localhost:4000/api/v1/message/getall"
//       ,  {withCredentials:true}
//     );
//     setAppointements(data.appointements);
//       } catch (error) {
//         setAppointements([]);
//         console.log(error);
//       }
//     };
//     fetchAppointments();
//   })
//   const handleUpdateStatus = async (appointementsId,status) =>{
//     try{
//       const {data} = await axios.put(
//         `http://localhost:4000/api/v1/appointement/update/${appointementsId}`,
//         {status},
//         {withCredentials:true}
//       );
//       setAppointements((prevAppointements)=>
//         prevAppointements.map((appointement) =>
//           appointement._id ==   appointementId?
//           {
//             ...appointement,status
//           }
//           :appointement
//         )
//       )
//       toast.successs(data.message);
//     }
//     catch(error){
//       toast.error(error.response.data.message);
//     }
//   }
//   if(!isAuthenticated){
//     return <Navigate to={"/login"}/>
//   }
//   return (
//     <>
//       <section className="dashboard page">
//         <div className="banner">
//           <div className="firstBox">
//             <img src="/Doctor3.png" alt="Doctor"/>
//             <div className="content">
//               <div>
//               <p>Hello</p>
//               <h5>{user && `${user.firstName} ${user.lastName}`}</h5>
//               </div>
//               <p>
//                 bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
//               </p>
//             </div>
//           </div>
//           <div className="secondBox">
//             <p>Toatal Appointment</p>
//             <h3>{`${appointements.length}`}</h3>
//           </div>
//           <div className="secondBox">
//             <p>Toatal doctors</p>
//             <h3>1</h3>
//           </div>
//         </div>
//         <div className="banner">
//           <h5>
//             appointements
//           </h5>
//           <table>
//             <thead>
//               <tr>
//               <th>Patient</th>
//               <th>Date</th>
//               <th>Doctor</th>
//               <th>Departement</th>
//               <th>Status</th>
//               <th>Visited</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//                     appointements && appointements.length>0 ? 
                    
//                 appointements.map((appointement)=>{
//                   return (
//                     <tr key = {appointement._id}>
//                       <td>{`${appointement.firstName} ${appointement.lastName}`}</td>
//                     <td>{appointement.appointement_date.substring(0,16)}</td>
//                     <td>{`${appointement.doctor.firstName} ${appointement.doctor.lastName}`}</td>
//                     <td>
//                       {appointement.department}
//                     </td>
//                     <td>
//                     <select
//                     className={
//                       appointement.status === "Pending"
//                       ? "value-pending"
//                       : appointement.status === "Rejected"
//                       ? "value-rejected"
//                       : "calue-accepteed"
//                     }
//                     value={appointement.status}
//                     onChange={(e)=> handleUpdateStatus(appointement._id,e.target.value)}
//                     >
//                       <option value="Pending" className="value-pending">Pending</option>
//                       <option value="Accepted" className="value-accepted">Accepted</option>
//                       <option value="Rejected" className="value-rejected">Rejected</option>
//                     </select>
//                     </td>
//                     <td>
//                           {appointement.hasVisited == true ? (
//                             <GoCheckCircle className="green"/>

//                           ):
//                           (
//                             <AiFillCloseCircle className="red"/>
//                           )
//                           }
//                     </td>
//                     </tr>
//                   )
//                 })
                    
//                     : 
//                       <h1>No Appointements</h1>
                      
//               }
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   )
// };

// export default Dashboard

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const { isAuthenticated, admin } = useContext(Context);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
          <img src="/Doctor3.png" alt="Doctor"/>
            <div className="content">
              <div>
                <p>Hello ,</p>
                <h5>
                  {admin &&
                    `${admin.firstName} ${admin.lastName}`}{" "}
                </h5>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, nam molestias. Eaque molestiae ipsam commodi neque.
                Assumenda repellendus necessitatibus itaque.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Appointments</p>
            <h3>1500</h3>
          </div>
          <div className="thirdBox">
            <p>Registered Doctors</p>
            <h3>10</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Appointments</h5>
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Doctor</th>
                <th>Department</th>
                <th>Status</th>
                <th>Visited</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0
                ? appointments.map((appointment) => (
                    <tr key={appointment._id}>
                      <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                      <td>{appointment.appointment_date.substring(0, 16)}</td>
                      <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                      <td>{appointment.department}</td>
                      <td>
                        <select
                          className={
                            appointment.status === "Pending"
                              ? "value-pending"
                              : appointment.status === "Accepted"
                              ? "value-accepted"
                              : "value-rejected"
                          }
                          value={appointment.status}
                          onChange={(e) =>
                            handleUpdateStatus(appointment._id, e.target.value)
                          }
                        >
                          <option value="Pending" className="value-pending">
                            Pending
                          </option>
                          <option value="Accepted" className="value-accepted">
                            Accepted
                          </option>
                          <option value="Rejected" className="value-rejected">
                            Rejected
                          </option>
                        </select>
                      </td>
                      <td>{appointment.hasVisited === true ? <GoCheckCircleFill className="green"/> : <AiFillCloseCircle className="red"/>}</td>
                    </tr>
                  ))
                : "No Appointments Found!"}
            </tbody>
          </table>

          {}
        </div>
      </section>
    </>
  );
};

export default Dashboard;