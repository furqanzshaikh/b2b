import Image from 'next/image';
import React from 'react';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json';
import SingleFaq1 from '../faq/SingleFaq1';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';
import thumbFull from '@/assets/img/service/2-full.webp';
import Card from '../utilities/Card';

const ServiceDetailsContent = () => {
    return (
        <>
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="thumb">
                                    <Image src={thumbFull} alt="Thumb" width={1460} height={782} />
                                </div>
                                <h2>Appointment Generation
                                </h2>
                                <p>
                                Appointment Generation in B2B involves setting up qualified meetings between sales teams and potential clients. Here are the key service details typically involved in B2B Appointment Generation:                                </p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="content">
                                                <h3>Included Services</h3>
                                                <ul className="feature-list-item">
                                                    <li>Consulting Service</li>
                                                    <li>24/7 Alltime Supporting</li>
                                                    <li>Marketing Service</li>
                                                    <li>Expert Team Members</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>The Challange</h3>
                                                <p>
                                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3>What we do?</h3>
                                <p>
                                Appointment Generation in B2B involves setting up qualified meetings between sales teams and potential clients through a strategic and multi-faceted approach. It begins with identifying and profiling target accounts using market research and data analysis, followed by defining an Ideal Customer Profile (ICP) based on firmographics, industry, and other criteria. Lead scoring models prioritize leads, and qualification criteria such as budget, authority, need, and timing (BANT) are established. A multi-channel outreach strategy, including email, phone calls, social media, and direct mail, is employed with personalized messaging tailored to each prospect’s needs. Structured outreach cadences ensure consistent follow-ups, supported by custom content like case studies and email templates. Technology tools like CRM systems and LinkedIn Sales Navigator streamline the process, while automated follow-ups and nurturing campaigns keep prospects engaged. Performance is measured through key metrics and regular reporting, with continuous improvement driven by feedback loops and quality assurance practices. Executive involvement ensures strategic alignment and builds credibility with high-level decision-makers.                                </p>

                                {/* <div className="faq-style-one dark mt-40">
                                    <h3 className="mb-30">Common Question for this project</h3>
                                    <div className="accordion" id="faqAccordion">
                                        {Faq1Data.slice(0, 3).map(faq =>
                                            <SingleFaq1 faq={faq} key={faq.id} />
                                        )}
                                    </div>
                                </div> */}

                                {/* <div className="services-more mt-40">
                                    <h2>Popular Services</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-personal"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>Investment Planning</Link></h4>
                                                <p>
                                                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-career"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>Markets Research</Link></h4>
                                                <p>
                                                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget services-list-widget">
                                    <h4 className="widget-title">Marketing Services</h4>
                                    <div className="content">
                                        <ul>
                                            <li><Link href="/services-abm-marketing">ABM Marketing</Link></li>
                                            <li><Link href="/services-appointment-generation">Appointment Generation</Link></li>
                                            <li><Link href="/services-content-syndication">Content Syndication</Link></li>
                                            <li><Link href="/services-lead-generation">Lead Generation</Link></li>
                                            <li><Link href="/services-pay-for-performance">Pay For Performance</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <Card/>

                                {/* <div className="single-widget widget-brochure">
                                    <h4 className="widget-title">Brochure</h4>
                                    <ul>
                                        <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Download Brochure </Link></li>
                                        <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Company Details </Link></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
