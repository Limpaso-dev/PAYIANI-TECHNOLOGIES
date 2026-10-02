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
      <section className="section-shell pt-0">
        <p className="mx-auto max-w-4xl rounded-3xl border border-dark/10 bg-white p-6 text-center leading-7 text-muted shadow-sm md:p-8">
          We use accessible digital solutions to support climate justice, helping communities, schools, and organizations build knowledge, share local priorities, and take informed action for a more sustainable future.
        </p>
      </section>
      <Testimonials />
      <CallToAction />
    </MainLayout>
  )
}
