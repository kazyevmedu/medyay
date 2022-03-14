import Date from "././date"
import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="Hero">
                <div className="container">

                    <div>
                        <input className='Hero-input' type="text" placeholder="Поиск по ресторанам и кухням"/>
                    </div>
                    <div>
                        <h1>Рестораны в Москве</h1>
                    </div>
                    <div className="row">
                        {
                            Date.map(el => {
                                return (
                                    <div className="col-xl-4 col-lg-6 col-md-12 ">
                                        <img src={el.image} alt=""/>
                                        <h4 >{el.item}</h4>
                                        <p>{el.title}</p>
                                        <h5>{el.time}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;