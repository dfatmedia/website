import React, { useEffect, useState } from "react";
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';

const elements = [
    { type: "h1", text: "Creative" },
    { type: "image" },
    { type: "h1", text: "Solutions for Your Business" },    
    { type: "p", text: "We are a design agency focused on creating impactful solutions. Through creative strategy and precise execution, we bring your brand to life with designs that connect, engage, and elevate." },
    { type: "button" },
    { type: "image" }
];

const Home = () => {
    const [visibleIndex, setVisibleIndex] = useState(-1);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setVisibleIndex(prev => prev + 1);
            index++;

            if (index >= elements.length) clearInterval(interval);
        }, 300); // 🔥 Faster transitions (Overlapping effect)

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                {/* Left Side: "Creative" + Cylindrical Image + "Solutions for Your Business" */}
                <div className="left-section">
                    <div className={`fade-in ${visibleIndex >= 0 ? "visible" : ""} text-image-row`}>
                        <h1>{elements[0].text}</h1>
                        <div className={`fade-in ${visibleIndex >= 1 ? "visible" : ""} image-container0`}>
                            <img src="/smallicon.png" alt="smallimage" className="home-image0" />
                        </div>
                    </div> 
                    <div className={`fade-in ${visibleIndex >= 2 ? "visible" : ""}`}>
                        <h1 className="large-heading">{elements[2].text}</h1>
                    </div>
                </div>               

                {/* Right Side: Paragraph + Button */}
                <div className="right-section">
                    <div className={`fade-in ${visibleIndex >= 3 ? "visible" : ""}`}>
                        <p>{elements[3].text}</p>
                    </div>
                    <div className={`fade-in ${visibleIndex >= 4 ? "visible" : ""} button-container`}>
                        <Button />
                    </div>
                </div>
            </div>

            {/* Large Image */}
            <div className={`fade-in ${visibleIndex >= 5 ? "visible" : ""} image-container`}>
                <img src="/Asset1.jpg" alt="Home Image" className="home-image1" />
            </div>
        </>
    );
};

export default Home;
