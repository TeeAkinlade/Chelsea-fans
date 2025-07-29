import BanterCentral from "../components/BanterCentral"
import FixtureHighlight from "../components/FixtureHighlight"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ShopSection from "../components/ShopSection"
import WhyJoinSection from "../components/WhyJoinSection"

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <FixtureHighlight />
        <ShopSection />
        <BanterCentral />
        <WhyJoinSection />
        <Footer/>
    </div>
  )
}

export default HomePage