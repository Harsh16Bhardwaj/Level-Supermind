import React from "react";
import Navbar from "./assets/components/navbar";
import Footer from "./assets/components/footer/footer";
import Landing from "./assets/components/landing";
import Socials from "./assets/components/footer/socials";
import Login from "./assets/components/login/register.jsx";
import Feedback from './assets/components/feedback/Feedback.jsx';
import Demo from './assets/components/demo/demo.jsx';

export default function App() {
  return (
    <>
      <div className="main">
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
