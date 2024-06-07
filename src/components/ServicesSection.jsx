import { TiTick } from "react-icons/ti";
import ServiceCard1 from "./ServiceCard1";
import ServiceCard2 from "./ServiceCard2";
import ParaWithIcon from "./ParaWithIcon";
const ServicesSection = () => {
    const paraObj = {
        col1 : 'Photo generating',
        col2 : 'Photo enhance',
        col3 : 'Seamless Integration',
    };

    return <>
        <center id="howToUse" className="service mb-4">
            <h1 className="main-heading mb-4 coll-heading">Generative AI made for creators.</h1>
            <p className="coll-para mob-text-start ">Brainwave unlocks the potential of AI-powered applications</p>

            <div className="col-xl-12 col-xxl-11 services-container">
                <div className="row align-items-center g-lg-5">
                    <div className="col-lg-8 text-center text-lg-start">
                        <img src="service-1.png" className="d-block mx-lg-auto img-fluid service-img" alt="AI image" loading="lazy"></img>
                    </div>

                    <div className="col-lg-4 coll-img text-center text-lg-start">
                        <h2 className="display-6 mb-5 coll-heading mob-margin">Smartest AI</h2>
                        <p className="coll-para">Brainwave unlocks the potential of AI-powered applications</p>
                        <center className="text-center">
                        <ParaWithIcon paraObj = {paraObj.col1} ></ParaWithIcon>
                        <ParaWithIcon paraObj = {paraObj.col2} ></ParaWithIcon>
                        <ParaWithIcon paraObj = {paraObj.col3} ></ParaWithIcon>
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
                    <div className="col-lg-6 text-lg-start">
                        <ServiceCard1 />
                    </div>

                    <div className="col-lg-6 coll-img text-lg-start">
                        <ServiceCard2 />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ServicesSection;