import RoadMapCard1 from "./RoadMapCard1";
import { roadMapObj } from "../../data/data";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RoadMapSection = () => {
    const pricingHeadRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            pricingHeadRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: pricingHeadRef.current, start: 'top 90%', end: 'top 70%' } }
        );

        gsap.fromTo(
            [card1Ref.current],
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: card1Ref.current, start: 'top 90%', end: 'top 70%' } }
        );

        gsap.fromTo(
            [card2Ref.current],
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: card2Ref.current, start: 'top 90%', end: 'top 70%' } }
        );

        gsap.fromTo(
            [card3Ref.current],
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: card3Ref.current, start: 'top 90%', end: 'top 70%' } }
        );

        gsap.fromTo(
            [card4Ref.current],
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: card4Ref.current, start: 'top 90%', end: 'top 70%' } }
        );
    }, []);

    return (
        <>
            <div id="roadMap" ref={pricingHeadRef} className="text-center mob-text-start pricing-head">
                <p className="color"><span className="span-color1">[</span> READY TO GET STARTED <span className="span-color2">]</span></p>
                <h1 className="main-heading mb-4 coll-heading">What we’re working on</h1>
            </div>

            <div className="service mb-4">
                <div className="col-xl-12 col-xxl-11">
                    <div className="row align-items-center g-lg-4">
                        <div className="col-lg-6 text-center text-lg-start mt-0" ref={card1Ref} id="roadmapCard1">
                            <RoadMapCard1 roadMapObj={roadMapObj[0]}></RoadMapCard1>
                        </div>

                        <div className="col-lg-6 coll-img text-center text-lg-start roadmap-card-margin" ref={card2Ref} id="roadmapCard2">
                            <RoadMapCard1 roadMapObj={roadMapObj[1]}></RoadMapCard1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service">
                <div className="col-xl-12 col-xxl-11">
                    <div className="row align-items-center g-lg-4">
                        <div className="col-lg-6 text-center text-lg-start roadmap-card-margn-2" ref={card3Ref} id="roadmapCard3">
                            <RoadMapCard1 roadMapObj={roadMapObj[2]}></RoadMapCard1>
                        </div>

                        <div className="col-lg-6 coll-img text-center text-lg-start" ref={card4Ref} id="roadmapCard4">
                            <RoadMapCard1 roadMapObj={roadMapObj[3]}></RoadMapCard1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoadMapSection;