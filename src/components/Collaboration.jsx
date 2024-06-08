import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParaWithIcon from './Design/ParaWithIcon';
import { paraObj } from '../data/data';
import GradientButton from './Design/GradientButton';

gsap.registerPlugin(ScrollTrigger);

const Collaboration = () => {
    const collRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        if (collRef.current && imgRef.current) {
            gsap.fromTo(
                collRef.current,
                { x: -200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: collRef.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: true,
                    },
                }
            );

            gsap.fromTo(
                imgRef.current,
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: imgRef.current,
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <>
            <div className="px-4">
                <div className="row align-items-center g-lg-12 py-5">
                    <div className="col-lg-6 text-lg-start collaboration" ref={collRef}>
                        <h1 className="main-heading mb-5 coll-heading">AI Chat App for seamless collaboration</h1>
                        <ParaWithIcon paraObj={paraObj.col1}></ParaWithIcon>
                        <p className="coll-para">With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
                        <ParaWithIcon paraObj={paraObj.col2}></ParaWithIcon>
                        <ParaWithIcon paraObj={paraObj.col3}></ParaWithIcon>
                        <GradientButton name='TRY IT NOW'></GradientButton>
                    </div>
                    <div className="col-lg-5 coll-img" ref={imgRef}>
                        <p className="coll-para coll-mob">With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
                        <img src="collaboration.PNG" className="mob-img" alt="" />
                    </div>
                </div>
            </div>
            <hr className="ruler" />
        </>
    );
}

export default Collaboration;
