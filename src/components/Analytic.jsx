import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Analytic = () => {

  
  useGSAP(() => {
    gsap.from(".first-data", {
      y: 70,
      scale: 1.5,
      duration: 0.5,
      delay: 0.2,
      opacity: 0,
      // transition: 3,
      stagger: 0.4,
      scrollTrigger:{
        trigger:".analyse-container",
        scroller:"body",
        // markers:true,
        scrub:5,
        toggleActions: "play none none reverse",
        start:"top 80%",
        end:"bottom 90%"
      }
    })
  });




  return (
    <>
      <section className='Analyse-section-wrapper'>
        <div className="analyse-container">
          <div className="first-data">
            <h2>10+</h2>
            <p>Registered Companies</p>
          </div>
          <div className="first-data">
            <h2>500+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="first-data">
            <h2>80+</h2>
            <p>Well known Developers</p>
          </div>
          <div className="first-data">
            <h2>24/7</h2>
            <p>Services</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Analytic