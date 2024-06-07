import GradientButton from "./GradientButton";
import ParaWithIcon from "./ParaWithIcon";
import { paraObj } from "../data/data";

const Collaboration = () => {

    return <>
        <div className="px-4">
            <div className="row align-items-center g-lg-12 py-5">
                <div className="col-lg-6 text-lg-start">
                    <h1 className="main-heading mb-5 coll-heading">AI Chat App for seamless collaboration</h1>
                    <ParaWithIcon paraObj={paraObj.col1}></ParaWithIcon>
                    <p className="coll-para">With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
                    <ParaWithIcon paraObj={paraObj.col2}></ParaWithIcon>
                    <ParaWithIcon paraObj={paraObj.col3}></ParaWithIcon>
                    <GradientButton name='TRY IT NOW'></GradientButton>
                </div>
                <div className="col-lg-5 coll-img">
                    <p className="coll-para coll-mob">With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
                    <img src="collaboration.PNG" className="mob-img" alt="" />
                </div>
            </div>
        </div>
        <hr className="ruler" />

    </>
}

export default Collaboration;