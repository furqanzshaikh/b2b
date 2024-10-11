import Image from 'next/image';
import React from 'react';
import anim1Thumb from '@/assets/img/shape/anim-1.png'
import anim2Thumb from '@/assets/img/shape/anim-2.png'
import anim3Thumb from '@/assets/img/shape/anim-3.png'
import anim4Thumb from '@/assets/img/shape/anim-4.png'
import aboutThumb from "@/assets/img/about/1.webp"
import signatureThumb from "@/assets/img/signature.png"
import About1Card from './About1Card';

const AboutStyle1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                    <Image src={anim1Thumb} alt="Image Not Found" />
                    <Image src={anim2Thumb} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">Who We Are</div>
                            <h2 className="title mb-25">Our Mission: Enhancing Demand Marketing for B2B Companies</h2>
                            <p>
                            We are a global demand generation company operating on a pay-for-performance basis. Our goal is to assist B2B companies in generating qualified leads and nurturing them into loyal customers. We provide comprehensive marketing solutions designed to help marketers in Enterprise Tech companies reduce sales cycles and maximize their return on marketing investments. By leveraging AI, we identify the right buyers at the right time and use personalized buyer journeys to boost market demand.
<br />
We aim to unify the marketing and sales processes, creating a seamless buyer experience that fosters growth for our clients. Digital growth efforts are impactful as they can be tested, measured, and optimized for efficiency. These efforts not only improve performance but also generate valuable insights and position companies as leaders in their respective fields.
                              </p>
                            <div className="owner-info">

                            </div>
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">
                                <Image  src={aboutThumb} alt="Image Not Found" />
                                <About1Card />
                                <div className="thumb-shape-bottom" >
                                    <Image src={anim3Thumb} alt="Image Not Found" />
                                    <Image src={anim4Thumb} alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;