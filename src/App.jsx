import React, { useEffect } from "react";
import Navbar from "./assets/components/navbar.jsx";
import Footer from "./assets/components/footer/footer";
import Landing from "./assets/components/landing";
import Socials from "./assets/components/footer/socials";
import Login from "./assets/components/login/register.jsx";
import Feedback from './assets/components/feedback/Feedback.jsx';
import Demo from './assets/components/demo/demo.jsx';
import Background from "./assets/components/background/Background.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function App() {


  return (
    <>
   
      <div className="main">
      <Background/>
        <Navbar/>
        <Landing/>
        <Demo/>
        <Login/>
        <Feedback/>

        <Footer/>
       
      </div>
    </>
  );
}
