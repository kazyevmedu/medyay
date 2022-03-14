import React from 'react';
import logo1 from "./../../img/logo1.png"
import Shape from "./../../img/Shape.png"


const Footer = () => {
    return (
        <div>
            <div className="footer ">
                <div className="container">
                    <div className="row">
                        <div className="footer-footer">
                            <img className="uber-ote col-xl-4 col-lg-6 col-md-12" src={logo1} alt="img"/>
                            <div className="footer-input"/>
                        </div>
                        <div className="col-4">

                            <img className="footer-img col-xl-4 col-lg-6 col-md-12" src={Shape} alt=""/>
                            <select className="footer-select col-xl-4 col-lg-6 col-md-12">
                                <option>Русский</option>
                                <option>english</option>
                                <option>fgvbhnjm</option>
                            </select>
                            <h5>#UberEats</h5>


                        </div>
                        <div className="col-4 footer-p">
                            <p>Об UberEats</p>
                            <p>Станьте партнёром по доставке</p>
                            <p>Станьте парнёром-рестораном</p>
                        </div>
                        <div className="col-4 footer-p">
                            <p>Все города</p>
                            <p>Цены</p>
                            <p>Помощь</p>
                            <p>FAQs</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;