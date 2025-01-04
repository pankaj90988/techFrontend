import React, { useEffect, useState } from 'react'
import Image1 from '../assets/me-at-work.jpg'
import Image2 from '../assets/calculator.png'
import Image3 from '../assets/liferaiser.png'
import Image4 from '../assets/receipe.png'
import Image5 from '../assets/rock_paper.png'
import Image6 from '../assets/rpa.png'
import Image7 from '../assets/tic-tak-toe.png'
import Image8 from '../assets/dice_rolling.png'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Gallery = () => {
    const sectionStyle = {
        padding: "3rem",
    }
    const sectionStyleAt721 = {
        padding: "0rem",
    }
    const imgContStyle = {
        width: "300px",
        height: "200px",
    }
    const imgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        border: "1px solid grey"
    }

    const [screenWidth, setscreenWidth] = useState(1448);
    
      useEffect(() => {
        const currentWidth = window.innerWidth;
        setscreenWidth(currentWidth);
      }, [screenWidth]);

    useGSAP(() => {
        gsap.from(".img-cont img", {
            y: 70,
            scale: 0.4,
            duration: 0.5,
            delay: 0.2,
            opacity: 0,
            // transition: 3,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".gallery-section",
                scroller: "body",
                // markers: true,
                scrub: 5,
                toggleActions: "play none none reverse",
                start: "top 95%",
                end: "bottom 100%",

            }
        })
    });



    return (
        <>
            <section className='gallery-section' style={screenWidth<721?sectionStyleAt721:sectionStyle}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem',marginTop:"2rem" }}>Gallery</h1>
                <div className="gallery-cont" style={{ padding: "1.5rem", display: 'flex', justifyContent: 'center', gap: "2rem", flexWrap: 'wrap',}}>

                    <div className="img-cont" style={imgContStyle}>
                        <img src={Image1}
                            alt="me-at-work"
                            style={imgStyle}
                        />
                    </div>
                    <div className="img-cont" style={imgContStyle}>
                        <img src={Image2}
                            alt="calculator"
                            style={imgStyle}
                        />
                    </div>
                    <div className="img-cont" style={imgContStyle}>
                        <img src={Image3}
                            alt="liferaiser"
                            style={imgStyle}
                        />
                    </div>
                    <div className="img-cont" style={imgContStyle}>
                        <img src={Image4}
                            alt="reciepe"
                            style={imgStyle}
                        />
                    </div>
                    <div className="img-cont" style={imgContStyle}>
                        <img src={Image5}
                            alt="rock-paper"
                            style={imgStyle}
                        />
                    </div>
                    <div className="img-cont" style={imgContStyle}>
                        <img src={Image6}
                            alt="rpa"
                            style={imgStyle}
                        />
                    </div>
                    <div className="img-cont" style={imgContStyle}>
                        <img src={Image7}
                            alt="ticc-tak-toe"
                            style={imgStyle}
                        />
                    </div>
                    <div className="img-cont" style={imgContStyle}>
                        <img src={Image8}
                            alt="dice rolling"
                            style={imgStyle}
                        />
                    </div>
                    <div className="img-cont" style={imgContStyle}>
                        <img src={Image7}
                            alt="tic tak toe"
                            style={imgStyle}
                        />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Gallery