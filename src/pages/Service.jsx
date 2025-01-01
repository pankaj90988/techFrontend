import React, { useEffect, useState } from 'react'
import './Service.css'
import ServiceImage from '../assets/registration-3.png'

const Service = () => {

  const [servicedata, setServicedata] = useState([]);
  
  const getServices = async () => {
    try {
      const response = await fetch('https://techbackend-h4vp.onrender.com/api/data/service', {
        method: "GET",
      });
     

      if (response.ok) {
        const data = await response.json();
        const alldata = await data.message;
        setServicedata(alldata);

      }
      console.log(servicedata);
    } catch (error) {
      console.log("Something went wrong with internal server");
    }
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <section className="service-section-wrapper">
        <div className="service-container">
          <h1 className="main-heading">Services</h1>
        </div>

        {
          <div className="card-container">

            {
              servicedata.length > 0 ? (

                servicedata.map((elem, index) => {
                  console.log(servicedata);
                  const { price, description, provider, service } = elem;
                  return (
                    <>{servicedata != null ?
                      <div className="card" key={index}>
                        <div className="card-image">
                          <img src={ServiceImage} alt="service image" width="200" />
                        </div>

                        <div className="card-details">
                          <div className="price-provider">
                            <p>{provider}</p>
                            <p>${price}</p>
                          </div>
                          <h2>{service}</h2>
                          <p>{description}</p>
                        </div>
                      </div> :
                      <h1>loading...</h1>
                    }</>
                  )
                })

              ) :
                (<h1>Data Loading....</h1>)
            }
          </div>
        }
      </section>
    </>
  )
}

export default Service