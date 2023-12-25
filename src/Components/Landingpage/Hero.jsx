    import React from 'react'
    import './hero.scss';
    import { Heroimage } from "../../assets";
    import { FaLinkedin, FaBehance, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <>
        <div className="row pt-5">
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        <div class="col-sm-12 col-md-12 col-lg-10">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-6">
                    <div className='hero-text'>
                        <h1>I’m Moruf Adebola, <br /> Product Designer</h1>
                    </div>
                    <div>
                        <p>A product designer with years of experience, currently <br />
                        shaping in coding the future, building digital worlds productsbr <br />
                            within energetic and dynamic cross-functional settings.
                        </p>
                    </div>
                    <div className='st-btn'>
                    <button>Portfolio</button>
                    <button>Hire me</button>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5">
                    <div className='hero-image'>
                        <img src= {Heroimage} alt="" />
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
                    <div className='hero-image'>
                        <p>This site is Part portfolio, Part hand crafted works, Full work in progress. <br />
                        To learn more about current projects and get InTouch, hit the link below.
                        </p>
                        <p><FaLinkedin/>LinkedIn <FaBehance/>Behance <FaGithub/>GitHub</p>
                    </div>
                    </div>
                </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-1"></div>
        
        </>
    )
    }

    export default Hero
