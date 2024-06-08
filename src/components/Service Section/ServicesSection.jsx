import { TiTick } from "react-icons/ti";
import ServiceCard1 from "./ServiceCard1";
import ServiceCard2 from "./ServiceCard2";
import ParaWithIcon from "../Design/ParaWithIcon";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const genHeadRef = useRef(null);
    const genImgRef = useRef(null);
    const genTextRef = useRef(null);
    const serviceCard1Ref = useRef(null);
    const serviceCard2Ref = useRef(null);

    useEffect(() => {
        if (genHeadRef.current && genImgRef.current && genTextRef.current) {
            gsap.fromTo(
                genHeadRef.current,
                { y: 200, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: genHeadRef.current,
                        start: 'top 100%',
                        end: 'top 70%',
                        scrub: false,
                    },
                }
            );

            gsap.fromTo(
                genImgRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: genImgRef.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: false,
                    },
                }
            );

            gsap.fromTo(
                genTextRef.current,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: genTextRef.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: false,
                    },
                }
            );
        }

        if (serviceCard1Ref.current && serviceCard2Ref.current) {
            gsap.fromTo(
                serviceCard1Ref.current,
                { x: -200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: serviceCard1Ref.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: false,
                    },
                }
            );

            gsap.fromTo(
                serviceCard2Ref.current,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: serviceCard2Ref.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: false,
                    },
                }
            );
        }
    }, []);

    const paraObj = {
        col1: 'Photo generating',
        col2: 'Photo enhance',
        col3: 'Seamless Integration',
    };

    return (
        <>
            <center id="howToUse" className="service mb-4">
                <div ref={genHeadRef} className="mb-4">
                    <h1 className="main-heading mb-4 coll-heading">Generative AI made for creators.</h1>
                    <p className="coll-para mob-text-start ">Brainwave unlocks the potential of AI-powered applications</p>
                </div>

                <div className="col-xl-12 col-xxl-11 services-container">
                    <div className="row align-items-center g-lg-5">
                        <div ref={genImgRef} className="col-lg-8 text-center text-lg-start" id="gen-img">
                            <img src="service-1.png" className="d-block mx-lg-auto img-fluid service-img" alt="AI image" loading="lazy"></img>
                        </div>

                        <div ref={genTextRef} className="col-lg-4 coll-img text-center text-lg-start" id="gen-text" style={{ opacity: 0, transform: 'translateX(100px)' }}>
                            <h2 className="display-6 mb-5 coll-heading mob-margin">Smartest AI</h2>
                            <p className="coll-para">Brainwave unlocks the potential of AI-powered applications</p>
                            <center className="text-center">
                                <ParaWithIcon paraObj={paraObj.col1}></ParaWithIcon>
                                <ParaWithIcon paraObj={paraObj.col2}></ParaWithIcon>
                                <ParaWithIcon paraObj={paraObj.col3}></ParaWithIcon>
                            </center>
                        </div>
                    </div>

                    <div className="container askinput ai-input">
                        <img src="loading.png" className="loading-icon" alt="" />
                        <input className="form-control disabled-input text-white" type="text" value="AI is generating" aria-label="Disabled input example" disabled readOnly />
                    </div>
                </div>
            </center>

            <div className="service">
                <div className="col-xl-12 col-xxl-11">
                    <div className="row align-items-center g-lg-4">
                        <div ref={serviceCard1Ref} className="col-lg-6 text-lg-start" id="serve-card1">
                            <ServiceCard1 />
                        </div>

                        <div ref={serviceCard2Ref} className="col-lg-6 coll-img text-lg-start" id="serve-card2">
                            <ServiceCard2 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ServicesSection;