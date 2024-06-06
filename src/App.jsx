
import Benefits from './components/BenefitsSection'
import Collaboration from './components/Collaboration'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import PricingSection from './components/PricingSection'
import RoadMapSection from './components/RoadMapSection'
import ServicesSection from './components/ServicesSection'
import SignUp from './components/SignUpSection'

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
