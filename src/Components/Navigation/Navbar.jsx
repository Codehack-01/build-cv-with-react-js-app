import React from 'react'
import { useState, Link } from "react";
import './navbar.scss';
import Logo from "../../assets/Kmg.png"
import { FaBehance, } from "react-icons/fa";



const Navbar = () => {

    return (

        <>

        <div className="row b-g-all fixed-top pt-3">
            <div className='bg-all'>
            <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid navbar-flex">
                <a className="navbar-brand" href="#"><img src={Logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav flex-grow-1 justify-content-end">
                        <li className="nav-item-1 active">
                            <a className="nav-link home" aria-current="page" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item-1">
                            <a className="nav-link about" href="#">About</a>
                        </li>
                        <li className="nav-item-1">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item-1">
                            <a class="nav-link" href="#">Resume</a>
                        </li>
                        <li className="nav-item-1">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
            </nav>
            </div>
        
        </div>
        
        
        {/* <div className="row b-g-all fixed-top pt-2">
                <div class="col-sm-12 col-md-12 col-lg-1"></div>
                <div class="col-sm-12 col-md-12 col-lg-12">
        <div className='bg-all'>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#"><img src={Logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
                </button>
                <div class="col-sm-12 col-md-12 col-lg-6"></div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link home" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item-1">
                    <a className="nav-link about" href="#"> About</a>
                    </li>
                    <li className="nav-item-1">
                    <a className="nav-link" href="#">Project</a>
                    </li>
                    <li className="nav-item-1">
                    <a className="nav-link" href="#">Resume</a>
                    </li>
                    <li className="nav-item-1">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-1"></div>
        </div> 
        
         */}
        
        
        </>
        
        
    )
}

export default Navbar
