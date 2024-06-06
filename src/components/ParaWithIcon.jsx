import { TiTick } from "react-icons/ti";

const ParaWithIcon = ({paraObj}) => {
    return <p className="para-heading mb-4 d-flex"> <span className="tick-icon-box tick-icon"><TiTick className="tick-icon" /></span>{paraObj}</p>
}

export default ParaWithIcon;