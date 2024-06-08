import { TiTick } from "react-icons/ti";
import { TbProgress } from "react-icons/tb";

const RoadMapCard1 = ({ roadMapObj }) => {
    return <div className="card text-bg-dark service1 gradient-border mob-view">
        <img src="grid.png" className="card-img roadmap-img" alt="..." />
        <img src={roadMapObj.image} className={`road-map-image-1 mb-4 ${roadMapObj.id == 2 && 'road-map-image-2'}`} alt="" />
        <div className="card-img-overlay px-5 mt-5">
            <div className="d-flex justify-content-between">
                <p className="color"><span className="span-color1">[</span> MAY 2023 <span className="span-color2">]</span></p>
                <button className="btn btn-light">
                 <TiTick className="fs-5" /> Done
                </button>
            </div>

            <div className="service-card-text-box road-map-card-text-box">
                <h2 className="mb-4">{roadMapObj.title}</h2>
                <p className="service-card-text-box-para fs-6">{roadMapObj.description}</p>
            </div>

        </div>
    </div>
}

export default RoadMapCard1;