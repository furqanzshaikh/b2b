import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <h2>Contact Information</h2>
                <p>
                    Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
                </p>
                <ul>
                    
                    <li >
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info">
                            <h5 className="title">Our Location</h5>
                            <p>
                            1st Floor, Arcadian, 31/2/1, BLD NO.12, North Road<br />  KP,Pune-411001
                            </p>
                        </div>
                    </li>
                    <li >
                        <div className="icon">
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className="info">
                            <h5 className="title">Official Email</h5>
                            <a href="mailto:contactus@digiintel.com">contactus@digiintel.com</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;