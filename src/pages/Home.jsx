import MainLayout from '../components/layout/MainLayout.jsx'
import CallToAction from '../components/home/CallToAction.jsx'
import Hero from '../components/home/Hero.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import Stats from '../components/home/Stats.jsx'
import Technologies from '../components/home/Technologies.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import IndustriesServed from '../components/home/IndustriesServed.jsx'
import Process from '../components/services/Process.jsx'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <ServicesPreview />
      <IndustriesServed />
      <Process />
      <WhyChooseUs />
      <Technologies />
      <FeaturedProjects />
      <section className="section-shell pt-0">
        <p className="mx-auto max-w-3xl border-y border-dark/10 py-8 text-center text-lg leading-8 text-muted">
          We use accessible digital solutions to support climate justice, helping communities, schools, and organizations build knowledge, share local priorities, and take informed action for a more sustainable future.
        </p>
      </section>
      <Testimonials />
      <CallToAction />
    </MainLayout>
  )
}
