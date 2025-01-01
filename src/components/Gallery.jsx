import React from 'react'
import Image1 from '../assets/black-1.jpg'

const Gallery = () => {
    return (
        <>
            <section className='gallery-section' style={{ padding: "3rem" }}>
                <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Gallery</h1>
                <div className="gallery-cont" style={{ padding: "1.5rem", display: 'flex', justifyContent: 'center', gap: "2rem", flexWrap: 'wrap' }}>

                    <div className="img-cont">
                        <img src={Image1}
                            alt=""
                            width="300"
                            height="200"
                            style={{ border: "1px solid red" }}
                        />
                    </div>
                    <div className="img-cont">
                        <img src={Image1}
                            alt=""
                            width="300"
                            height="200"
                            style={{ border: "1px solid red" }}
                        />
                    </div>
                    <div className="img-cont">
                        <img src={Image1}
                            alt=""
                            width="300"
                            height="200"
                            style={{ border: "1px solid red" }}
                        />
                    </div>
                    <div className="img-cont">
                        <img src={Image1}
                            alt=""
                            width="300"
                            height="200"
                            style={{ border: "1px solid red" }}
                        />
                    </div>
                    <div className="img-cont">
                        <img src={Image1}
                            alt=""
                            width="300"
                            height="200"
                            style={{ border: "1px solid red" }}
                        />
                    </div>
                    <div className="img-cont">
                        <img src={Image1}
                            alt=""
                            width="300"
                            height="200"
                            style={{ border: "1px solid red" }}
                        />
                    </div>
                    <div className="img-cont">
                        <img src={Image1}
                            alt=""
                            width="300"
                            height="200"
                            style={{ border: "1px solid red" }}
                        />
                    </div>
                    <div className="img-cont">
                        <img src={Image1}
                            alt=""
                            width="300"
                            height="200"
                            style={{ border: "1px solid red" }}
                        />
                    </div>
                    <div className="img-cont">
                        <img src={Image1}
                            alt=""
                            width="300"
                            height="200"
                            style={{ border: "1px solid red" }}
                        />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Gallery