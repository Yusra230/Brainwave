import Pricing from "./Pricings";
import { pricingPlan } from "../../data/data";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
    const mainPicRef = useRef(null);
    const headRef = useRef(null);

    useEffect(() => {
        if (mainPicRef.current && headRef.current) {
            gsap.fromTo(
                mainPicRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: mainPicRef.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: false,
                    },
                }
            );

            gsap.fromTo(
                headRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: headRef.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: false,
                    },
                }
            );
        }
    }, []);

    return (
        <center id="pricing">
            <div className="pricing-section-img-section">
                <img ref={mainPicRef} src="4-small.png" className="pricing-section-main-pic" alt="" />
                <img src="stars.svg" className="pricing-section-star-pic" alt="" />
            </div>

            <div ref={headRef} className="mob-text-start pricing-head">
                <p className="color"><span className="span-color1">[</span> GET STARTED WITH BRAINWAVE <span className="span-color2">]</span></p>
                <h1 className="main-heading mb-4 coll-heading">Pay once, Use Forever</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 mb-3 pricing">
                {pricingPlan.map(item => <Pricing key={item.id} item={item}></Pricing>)}
            </div>
        </center>
    );
}

export default PricingSection;