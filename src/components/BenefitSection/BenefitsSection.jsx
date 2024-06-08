import BenefitsCard from "./BenefitsCard";
import benefitsObj from "../../data/data";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Benefits = () => {
    const containerRef = useRef(null);
    // const logosRef = useRef(null);
    useEffect(() => {

        if (containerRef.current) {

            gsap.fromTo(
                containerRef.current,
                { y: 200, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 100%', // Adjust as needed
                        end: 'top 70%',
                        scrub: true,
                        // markers: true,
                    },
                }
            );

        }
    }, []);

    return <>
        <center id="features">
            <div ref={containerRef} className="container">
                <h1 className="main-heading benefit-card-head ">Chat Smarter, Not Harder with Brainwave</h1>
            </div>
            <div className="benefits-card-section">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {benefitsObj.map(item => <BenefitsCard key={item.color} item={item}></BenefitsCard>)}
                </div>
            </div>
            <hr className="ruler" />
        </center>
    </>
}

export default Benefits;