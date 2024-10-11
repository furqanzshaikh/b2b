import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle2 from '@/components/about/AboutStyle2';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import ServiceDetailsContentABM from '@/components/services/ServiceDetailsContentABM';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Services"
}

const Service2Page = () => {
    const title = 'Select Key Accounts'
    return (
        <>
            <LayoutStyle7 breadCrumb="ABM Marketing" title="Our Services">
                {/* <AboutStyle2 />
                <ProcessStyle1 />
                <TestimonialStyle1 /> */}
                <ServiceDetailsContentABM />
            </LayoutStyle7>
        </>
    );
};

export default Service2Page;