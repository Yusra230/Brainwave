import BenefitsCard from "./BenefitsCard";
import benefitsObj from "../../data/data";

const Benefits = () => {
   
    return <>
        <center>
            <div id="features" className="container">
                <h1 className="main-heading benefit-card-head ">Chat Smarter, Not Harder with Brainwave</h1>
            </div>
            <div className="benefits-card-section">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {benefitsObj.map(item=> <BenefitsCard key={item.color} item = {item}></BenefitsCard>)}
                </div>
            </div>
            <hr className="ruler" />
        </center>
    </>
}

export default Benefits;