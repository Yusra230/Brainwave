const Hero = () => {
    return <div id="home" className="px-4 my-5 text-center border-bottom bg-image">
        <div className="container">
            <div className="container">
                <h1 className="fw-bold hero-main-text">Explore the Possibilities of AI Chatting with <span className="hero-span">Brainwave <img src="curve.png" className="curve-img" alt="" /></span></h1>
            </div>
        </div>

        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 hero-para">Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-lg px-4 me-sm-3 get-started-btn">GET STARTED</button>
            </div>
        </div>
        <div className="">
            <div className="">
                <img src="robot.jpg" className="img-fluid border rounded-3 shadow-lg mb-4 robot-image" alt="Example" loading="lazy" />
            </div>
        </div>

        <h6 className="text-secondary mt-5 mb-5">HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</h6>

        <div className="d-flex justify-content-evenly logo-images flex-wrap">
            <img src="yourlogo.svg" className="logo" alt="" />
            <img src="yourlogo.svg" className="logo" alt="" />
            <img src="yourlogo.svg" className="logo" alt="" />
            <img src="yourlogo.svg" className="logo" alt="" />
            <img src="yourlogo.svg" className="logo" alt="" />
        </div>

    </div>
}

export default Hero;