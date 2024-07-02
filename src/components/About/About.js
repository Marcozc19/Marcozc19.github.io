import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import me from '../../assets/self_intro/me.jpg'

// function importAll(r) {
//     return r.keys().map(r);
//     }
function About() {
    // const images = importAll(require.context('../../assets/self_intro', false, /\.(png|jpe?g|svg)$/));

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}<br/><br/>{aboutData.description3}<br/><br/>{aboutData.description4}</p>
                </div>
                {/* <div className='about-img' style={{width:'30%', height:'20%'}}>
                    <Carousel autoPlay infiniteLoop showThumbs={false}>
                    {images.map((image, index) => (
                        <div key={index} className="carousel-image-container">
                        <img src={image} alt={`Slide ${index + 1}`}  className="carousel-image"/>
                        <p className="legend">{`Slide ${index + 1}`}</p>
                        </div>
                    ))}
                    </Carousel>
                </div> */}
                <div className="about-img">
                    <img 
                        src={me}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
