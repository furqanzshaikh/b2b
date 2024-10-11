import Image from 'next/image';
import React from 'react';
import shape7 from '@/assets/img/shape/7.png';
import shape9 from '@/assets/img/shape/9.png';
import logoLight from '@/assets/img/logo-light.png';
import Link from 'next/link';
import FooterNewsLetter from '../form/FooterNewsLetter';
import SocialShare from '../utilities/SocialShare';
import Flogo from '@/assets/img/footer-logo.png'

const FooterStyle1 = ({ shape, shapeClass, logo, formStyle }) => {
    return (
        <>
            <footer className="bg-dark text-light ">
                <div className="footer-shape">
                    {/* <div className={`item ${shapeClass}`}> */}
                    {/* {shape ? <Image src={shape} alt="Shape" width={100} height={100} /> : <Image src={shape7} alt="Shape" width={100} height={100} />} */}
                    {/* </div> */}
                    {/* <div className="item">
                        <Image src={shape9} alt="Shape" width={100} height={100} />
                    </div> */}
                </div>
                <div className="container pb-4">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <Image src={Flogo}style={{    marginTop:'-28px',width: '180px',height: '100px', padding:0}} alt='logo' />
                                <p>When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.</p>
                                <div className="d-flex align-center gap-4"> <SocialShare /></div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul>
                                        <li>
                                            <Link href="/services-abm-marketing">ABM Marketing</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Contact us</h4>
                                    <p>1st Floor, Arcadian, 31/2/1, BLD NO.12, North Road, KP, Pune-411001,</p>
                                    <h5>contactus@digiintel.com</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mt-4">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="http://www.digiintel.com" target='_blank'>DigiIntel</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;
