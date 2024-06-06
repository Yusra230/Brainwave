import SignUpActiveCards from "./SignUpActiveCards";
import SignUpCard from "./SignUpCard";
import { useState } from "react";
import signUpObj from "../data/signUpData";
const SignUp = () => {

    const [clicked, setClicked] = useState('true1');

    return <> <div className="sign-up-container">
        {clicked == 'true1' && <SignUpCard signUpObj={signUpObj[0]} ></SignUpCard>}
        {clicked == 'true2' && <SignUpCard signUpObj={signUpObj[1]} ></SignUpCard>}
        {clicked == 'true3' && <SignUpCard signUpObj={signUpObj[2]} ></SignUpCard>}
        {clicked == 'true4' && <SignUpCard signUpObj={signUpObj[3]} ></SignUpCard>}
    </div>
        <div className="">
            <div class="row row-cols-1 row-cols-md-3 g-2">
                {signUpObj.map(item => <SignUpActiveCards item={item} clicked={clicked} setClicked={setClicked}></SignUpActiveCards>)}
            </div>
        </div>

    </>
}

export default SignUp;