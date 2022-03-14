import React from 'react';
import logo from "./../../img/logo.png"
import basket from "./../../img/basket.png"
const Header = () => {
    return (
            <div className="header">
                <div className="container">
                        <div className='header-header col-xl-4 col-lg-6 col-md-12'>
                            <img  src={logo} alt="img"/>
                            <div>
                            <button className="header-btn">Войти</button>
                            <img src={basket} alt=""/>
                        </div>
                    </div>
                    </div>

        </div>
    );
};

export default Header;
