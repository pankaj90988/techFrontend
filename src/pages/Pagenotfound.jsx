import React from 'react'
import { NavLink } from 'react-router-dom'
import './Pagenotfound.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);



const Pagenotfound = () => {

  useGSAP(() => {
    gsap.from(".error-page-container h2, .error-page-container h4, .error-page-container p, .error-page-container .btns button", {
      y: 70,
      scale: 0.5,
      duration: 0.5,
      delay: 0.2,
      opacity: 0,
      stagger: 0.3,
      // scrollTrigger: {
      //   trigger: ".about-container",
      //   scroller: "body",
      //   // markers: true,
      //   scrub: 5,
      //   toggleActions: "play none none reverse",
      //   start: "top 80%",
      //   end: "bottom 90%",

      // }
    })
  });


  return (
    <>
      <section className='error-section-wrapper'>
        <div className="error-page-container">
          <h2>404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="btns">
            <NavLink to='/'><button>Return Home</button></NavLink>
            <NavLink to='/contact'><button>Report Problem</button></NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pagenotfound