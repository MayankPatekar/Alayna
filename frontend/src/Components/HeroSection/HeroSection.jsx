import React from "react";
import './HeroSection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

export default function HeroSection(){
    return(
        <div>
            
            <Carousel showStatus={false} showThumbs={false} autoPlay axis="horizontal" interval="5000" transitionTime="2000" infiniteLoop>
                <div>
                    <img src="./images/S1.png" alt="hero-img" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="./images/S2.png" alt="hero-img"/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="./images/S3.png" alt="hero-img"/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="./images/S4.png" alt="hero-img" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
            </Carousel>
        </div>
    )
}