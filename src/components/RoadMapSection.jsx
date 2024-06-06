import RoadMapCard1 from "./RoadMapCard1";
import { roadMapObj } from "../data/data";

const RoadMapSection = () => {
   
    return <>
        <div id="roadMap" className="text-center mob-text-start pricing-head">
            <p className="color"><span className="span-color1">[</span> READY TO GET STARTED <span className="span-color2">]</span></p>
            <h1 class="main-heading mb-4 coll-heading">What we’re working on</h1>
        </div>

        <div className="service mb-4">
            <div class="col-xl-12 col-xxl-11">
                <div class="row align-items-center g-lg-4">
                    <div class="col-lg-6 text-center text-lg-start mt-0">
                        <RoadMapCard1 roadMapObj={roadMapObj[0]}></RoadMapCard1>
                    </div>

                    <div class="col-lg-6 coll-img text-center text-lg-start roadmap-card-margin">
                        <RoadMapCard1 roadMapObj={roadMapObj[1]}></RoadMapCard1>
                    </div>
                </div>
            </div>
        </div>

        <div className="service">
            <div class="col-xl-12 col-xxl-11">
                <div class="row align-items-center g-lg-4">
                    <div class="col-lg-6 text-center text-lg-start roadmap-card-margn-2">
                        <RoadMapCard1 roadMapObj={roadMapObj[2]}></RoadMapCard1>
                    </div>

                    <div class="col-lg-6 coll-img text-center text-lg-start">
                        <RoadMapCard1 roadMapObj={roadMapObj[3]}></RoadMapCard1>

                    </div>
                </div>
            </div>
        </div>

        </>
}

export default RoadMapSection;