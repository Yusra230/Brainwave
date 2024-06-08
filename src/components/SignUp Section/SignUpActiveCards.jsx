import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger separately

const SignUpActiveCards = ({ item, clicked, setClicked }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1, // Adjust the duration as needed
                    ease: "power4.out", // Use a smooth easing function
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

    const cardClick = () => {
        console.log(`clicked ${item.id}`);
        setClicked(`true${item.id}`)
    }

    return (
        <div className="col signupActiveCard mb-3" onClick={cardClick} ref={cardRef}>
            <div className={`card h-100 ${clicked === `true${item.id}` ? 'activeCard' : 'borderr'}`}>
                <div className="card-body text-start">
                    <p className="card-id">0{item.id}.</p>
                    <h5 className="card-title text-white mb-3">{item.title}</h5>
                    <p className={`${clicked === `true${item.id}` ? 'card-text-block' : 'card-text-none'}`}>{item.description}</p>
                </div>
            </div>
        </div>
    );
}

export default SignUpActiveCards;
