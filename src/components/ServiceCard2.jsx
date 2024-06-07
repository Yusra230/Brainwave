import { BsSoundwave } from "react-icons/bs";
import { GiSoundWaves } from "react-icons/gi";
import { LiaCompactDiscSolid } from "react-icons/lia";
import { MdCellWifi } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const ServiceCard2 = () => {
    return <div className="service-card2">
        <div className="card serviceCard" >
            <div className="card-body">
                <h2 >Video Generation </h2>
                <p className="coll-para fs-6">The world’s most powerful AI photo and video art generation engine.What will you create?</p>
                <div className="d-flex justify-content-between">
                    <button className="btn service-icons"><GiSoundWaves className="icons" /></button>
                    <button className="btn service-icons"><BsSoundwave className="icons" /></button>
                    <button className="btn gradient-border-button service-icons"><LiaCompactDiscSolid className="icons" /></button>
                    <button className="btn service-icons"><MdCellWifi className="icons" /></button>
                    <button className="btn service-icons"><IoFilter className="icons" /></button>

                </div>
            </div>
        </div>

        <div className="card text-bg-dark mt-3">
            <img src="service-3.png" className="card-img service-card-img service-card-img2" alt="..." />
            <div className="card-img-overlay">
                <div className="speech-bubble">
                    Video generated!
                </div>

                <div className="service-card-play">
                    <div className=""></div>
                    <div className="d-flex align-items-center px-4">
                        <FaPlay className="fs-4" />
                        <div className="line"></div>
                    </div>
                </div>

            </div>
        </div>

    </div>

}

export default ServiceCard2;