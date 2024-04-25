import Category from "../../components/catogery/Catogery"
import HeroSection from "../../components/heroSection/HeroSection"
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard"
import Layout from "../../components/layout/Layout"
import Testimonial from "../../components/testimonial/Testtimonial"
import Track from "../../components/track/Track"
const HomePage = () => {
  return (
    <div>
        <Layout>
          <HeroSection/>
          <Category/>
          <HomePageProductCard/>
          <Track/>
          <Testimonial/>
        </Layout>
    </div>
  )
}

export default HomePage
