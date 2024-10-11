import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle2 from '@/components/about/AboutStyle2';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import ServiceDetailsContentPay from '@/components/services/ServiceDetailsContentPay';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Services"
}

const Service2Page = () => {
 
    
    return (
        <>
            <LayoutStyle7 breadCrumb="Pay For Performance" title="Our Services">
                {/* <AboutStyle2 />
                <ProcessStyle1 />
                <TestimonialStyle1 /> */}
                <ServiceDetailsContentPay />
            </LayoutStyle7>
        </>
    );
};

export default Service2Page;