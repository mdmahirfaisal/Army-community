import React from 'react';
import logo from './logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="head-top">
            <div className="container my-3 header">
                <img className="logo" src={logo} alt="" />
                <div>
                    <h1>COVID-19: Bangladesh army community </h1>
                    <h4 className="m-0 text-dark">says troops will be on the streets until govt recalls</h4>
                    <h3 className="m-0 text-dark">Total investment: ( <span className="text-danger fw-bold">$ {320000}</span> )  </h3>
                </div>
            </div>
        </div>
    );
};

export default Header;