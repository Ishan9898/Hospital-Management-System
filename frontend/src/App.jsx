import React, { useContext, useEffect } from 'react'
import "./App.css"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Appointement from './pages/Appointement';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import { Context } from './main';
import Footer from './component/Footer';
const App = () => {
  const {isAuthenticated,setIsAuthenticated,setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async () =>{
      try{
        const responce = await axios.get("http://localhost:4000/api/v1/user/patient/me",{withCreadentials:true});
        setIsAuthenticated(true);
        setUser(responce.data.user);

      }
      catch(error){
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  },[isAuthenticated]);
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/appointement" element={<Appointement/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
        </Routes>
        <Footer/>
        <ToastContainer position='top-center'/>
      </Router>
    </div>
  )
}

export default App;