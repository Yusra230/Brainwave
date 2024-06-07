import Pricing from "./Pricings";
import { pricingPlan } from "../data/data";

const PricingSection = () => {

    return <>
        <center id="pricing" >
            <div className="pricing-section-img-section">
                <img src="4-small.png" className="pricing-section-main-pic" alt="" />
                <img src="stars.svg" className="pricing-section-star-pic" alt="" />
            </div>

            <div className="mob-text-start pricing-head">
                <p className="color"><span className="span-color1">[</span> GET STARTED WITH BRAINWAVE <span className="span-color2">]</span></p>
                <h1 className="main-heading mb-4 coll-heading">Pay once, Use Forever</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 mb-3 pricing">
                {pricingPlan.map(item => <Pricing key={item.id} item = {item}></Pricing>)}
            </div>
        </center>
    </>
}

export default PricingSection;