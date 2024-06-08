import Benefits from './components/BenefitSection/BenefitsSection'
import Collaboration from './components/Collaboration'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import PricingSection from './components/PricingSection/PricingSection'
import RoadMapSection from './components/Raod Map Section/RoadMapSection'
import ServicesSection from './components/Service Section/ServicesSection'
import SignUp from './components/SignUp Section/SignUpSection'


function App() {

  return (
    <>
     <Header/>
     <Hero/>
     <Benefits></Benefits>
     <Collaboration/>
     <SignUp/>
     <ServicesSection/>
     <PricingSection/>
     <RoadMapSection/>
     <Footer/>
    </>
  )
}

export default App
