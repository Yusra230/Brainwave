import { TiTick } from "react-icons/ti";
import ParaWithIcon from "./ParaWithIcon";

const Pricing = ({ item }) => {
    return <div class="col">
        <div class="card mb-4 shadow-sm text-start pricing-card">
            <div class="card-header py-3">
                <h2 class={`my-0 fw-normal ${item.id == 1 && 'basic-color'} ${item.id == 2 && 'premium-color'} ${item.id == 3 && 'enterprise-color'} `} >{item.title}</h2>
            </div>
            <div class="card-body">
                <p className="para-color pricing-card-description">{item.description}</p>
                <h1 class="card-title pricing-card-title d-flex align-items-center fs-1">$<span className="display-1 fw-bold">{item.price} </span><small class="fw-light"> /mo</small></h1>
                <button type="button" class={`w-100 btn btn-lg btn-light mb-4 pricing-btn ${item.id == 2 && 'gradient-border-button premium-btn'}`}>GET STARTED</button>

                <ParaWithIcon paraObj = {item.paraObj.col1}></ParaWithIcon>
                <ParaWithIcon paraObj = {item.paraObj.col2}></ParaWithIcon>
                <ParaWithIcon paraObj = {item.paraObj.col3}></ParaWithIcon>
            </div>
        </div>
    </div>
}

export default Pricing;