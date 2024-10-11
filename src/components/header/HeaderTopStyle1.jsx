import React from 'react';


const HeaderTopStyle1 = () => {
    return (
        <>
            <div className="top-bar-area top-bar-style-one bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-8 offset-xl-3 pl-30 pl-md-15 pl-xs-15">
                            <ul className="item-flex">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>  Mumbai, Maharashtra 
                                </li>
                                <li>
                                    <i className="fas fa-solid fa-envelope"></i><a href="mailto:info@digital.com"> contactus@digiintel.com </a>
                                </li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopStyle1;