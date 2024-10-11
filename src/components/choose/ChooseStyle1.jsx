import Image from 'next/image';
import React from 'react';
import shape17 from '@/assets/img/shape/17.png'

const ChooseStyle1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area default-padding text-light">
                <div className="cover-bg " style={{ backgroundImage: `url(/assets/img/banner/7.jpg)` }}></div>
                <div className="shape-left-top">
                    <Image src={shape17} alt="Shape" />
                </div>
          
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="choose-us-style-one">
                                <h2 className="title mb-35">Why Do You Need a Lead Generation Company?</h2>
                                <ul className="list-item">
                                    <li>
                                        <h4>Increase Sales Lead Conversion</h4>
                                        <p>
                                        Want to speed up your sales and focus on closing deals? We can help by improving your B2B lead generation strategy.                                        </p>
                                    </li>
                                    <li  data-wow-delay="300ms">
                                        <h4>Get More Leads</h4>
                                        <p>
                                        Boost your business with high-quality leads. Our proven methods will help you attract, engage, and convert potential customers more effectively than ever before                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseStyle1;