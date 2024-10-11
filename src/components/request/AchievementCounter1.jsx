"use client"
import React from 'react';
import CountUp from 'react-countup';

const AchievementCounter1 = () => {
    return (
        <>
            <div className="achivement-counter">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="flaticon-handshake"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><CountUp end={50} enableScrollSpy /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Happy
                                customers</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="flaticon-employee"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><CountUp end={5} enableScrollSpy /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Industries
                                Served</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AchievementCounter1;