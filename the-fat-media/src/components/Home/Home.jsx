import React, { useEffect, useState } from "react";

import './Home.css'
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Trigger the animation after the component is mounted
      setTimeout(() => setIsVisible(true), 200); // Add delay for a better effect
    }, []);
  


    return (
        <>
        <Navbar/>
         <div>
            <div className ={`container ${isVisible ? "visible" : ""}`}>
                <span className='span'>
                    <h1 className='span h1'>Creative Solutions for Your Business</h1>
                </span>
                <span className='span'>
                    <p className='span p'>
                        We are a design agency focused on creating impactful, and solutions. Through creative strategy and precise execution, we bring your brand to life with designs that connect, engage, and elevate.
                    </p>
                    <Button/>
                </span>
            </div>
            <div >
                <img src="/Asset1.jpg" alt="Home Image" className="home-image1" />
            </div>
         </div>
        </>

    );
};
export default Home;
