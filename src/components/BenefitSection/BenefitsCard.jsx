import { BiSolidMessageDetail } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

const BenefitsCard = ({ item }) => {
    return <>
        <div className="col position-relative main-card">
            <div className={`card h-100 gradient-border benefit-card 
            ${item.color == 'orange' && 'gradient-borderOrange'}
            ${item.color == 'purple' && 'gradient-borderPurple'}
            ${item.color == 'yellowGreen' && 'gradient-borderYellowGreen'}
            ${item.color == 'orangeRed' && 'gradient-borderOrangeRed'}
            ${item.color == 'darkBlue' && 'gradient-borderdarkBlue'}
            `}>
                {/* <img src="image-2.png" className="card-img" alt="..."></img> */}
                <div className="card-body text-start benefit-card-body">
                    <h5 className="card-title text-white mb-4">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer border-none">
                    <button className={`btn float-start 
                    ${item.color == 'orange' && 'message-btnOrange'}
                    ${item.color == 'purple' && 'message-btnPurple '}
                    ${item.color == 'yellowGreen' && 'message-btnYellowGreen '}
                    ${item.color == 'orangeRed' && 'message-btnOrangeRed'}
                    ${item.color == 'darkBlue' && 'message-btndarkBlue '}
                    ${item.color == 'blue' && 'message-btnBlue'}
                    `} ><BiSolidMessageDetail className="message-icon" /></button>
                    <button className="btn float-end text-white explore-more-btn">EXPLORE MORE  <IoIosArrowForward className="arrow-icon" /></button>
                </div>
            </div>

            <div className="col position-absolute benefit-card-img ">
                <img src="image-2.png" className="card-img benefit-img" alt="..."></img>
            </div>
        </div>

    </>

}

export default BenefitsCard;