import MainLayout from '../components/layout/MainLayout.jsx'
import CallToAction from '../components/home/CallToAction.jsx'
import Hero from '../components/home/Hero.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import Stats from '../components/home/Stats.jsx'
import Technologies from '../components/home/Technologies.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <Technologies />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  )
}
