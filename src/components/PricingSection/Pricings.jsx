import { TiTick } from "react-icons/ti";
import ParaWithIcon from "../Design/ParaWithIcon";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pricing = ({ item }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: false,
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={cardRef} className="col">
            <div className="card mb-4 shadow-sm text-start pricing-card">
                <div className="card-header py-3">
                    <h2 className={`my-0 fw-normal ${item.id == 1 && 'basic-color'} ${item.id == 2 && 'premium-color'} ${item.id == 3 && 'enterprise-color'}`}>{item.title}</h2>
                </div>
                <div className="card-body">
                    <p className="para-color pricing-card-description">{item.description}</p>
                    <h1 className="card-title pricing-card-title d-flex align-items-center fs-1">$<span className="display-1 fw-bold">{item.price} </span><small className="fw-light"> /mo</small></h1>
                    <button type="button" className={`w-100 btn btn-lg btn-light mb-4 pricing-btn ${item.id == 2 && 'gradient-border-button premium-btn'}`}>GET STARTED</button>

                    <ParaWithIcon paraObj={item.paraObj.col1}></ParaWithIcon>
                    <ParaWithIcon paraObj={item.paraObj.col2}></ParaWithIcon>
                    <ParaWithIcon paraObj={item.paraObj.col3}></ParaWithIcon>
                </div>
            </div>
        </div>
    );
}


export default Pricing;