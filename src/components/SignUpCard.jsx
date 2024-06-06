import { IoAddCircle } from "react-icons/io5";
import { BsSoundwave } from "react-icons/bs";
import GradientButton from "./GradientButton";

const SignUpCard = ({ signUpObj }) => {
    console.log(signUpObj);
    return <div class="col-xl-12 col-xxl-8 px-4">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-6 signup-card d-flex flex-column">
                <img src={signUpObj.image} className="service-img"  alt="signUp Image" />
                <div className="container askinput">
                    <IoAddCircle className="input-icon margin-right" />
                    <input class="form-control disabled-input" type="text" value="Ask anything" aria-label="Disabled input example" disabled readonly/>
                    <BsSoundwave className="input-icon margin-left" />
                </div>
            </div>

            <div class="col-lg-5 coll-img mob-margin-top">
                <p className="color"><span className="span-color1">[</span> HOW IT WORK : 0{signUpObj.id} <span className="span-color2">]</span></p>
                <h1 className="main-heading mb-4 coll-heading">{signUpObj.title}</h1>
                <p className="coll-para">{signUpObj.description}</p>
                <GradientButton name = 'CONNECT NOW'></GradientButton>
            </div>
        </div>
    </div>

}

export default SignUpCard;