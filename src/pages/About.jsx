import MainLayout from "../components/layout/MainLayout.jsx";

export default function About() {
  return (
    <MainLayout>
      <section className="mx-auto w-[min(1120px,calc(100%-2rem))] py-16">
        {/* Hero */}
        <div className="rounded-3xl border border-dark/10 bg-white p-8 shadow-2xl shadow-black/10 md:p-12">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            ABOUT PAYIANI TECHNOLOGIES
          </span>

          <h1 className="mt-5 text-4xl font-bold text-dark md:text-6xl">
            Your Tech World starts here
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-muted">
            Payiani Technologies is a modern technology company dedicated to
            helping businesses, organizations, startups, and institutions
            leverage innovative digital solutions to improve efficiency,
            increase productivity, and accelerate growth.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted">
            We specialize in designing and developing secure, scalable, and
            high-performing software solutions tailored to our clients'
            unique business requirements. Whether you need a professional
            company website, a custom business management system, secure
            payment integration, cloud deployment, cybersecurity consulting,
            or ICT advisory services, our team is committed to delivering
            technology solutions that create measurable value.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-muted">
            At Payiani Technologies, we believe technology should simplify
            business operations rather than complicate them. That's why we
            combine technical expertise, industry best practices, and
            innovative thinking to build reliable digital products that help
            our clients remain competitive in today's rapidly evolving digital
            landscape.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
            <h2 className="text-3xl font-bold text-dark">Our Mission</h2>

            <p className="mt-4 leading-8 text-muted">
              To empower businesses through innovative, secure, and reliable
              technology solutions that enhance operational efficiency,
              strengthen digital transformation, and enable sustainable
              growth.
            </p>
          </div>

          <div className="rounded-3xl border border-dark/10 bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-dark">Our Vision</h2>

            <p className="mt-4 leading-8 text-muted">
              To become one of Africa's leading technology companies,
              recognized for delivering world-class software solutions,
              cybersecurity services, ICT consultancy, and digital innovation
              that transform businesses across industries.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12 rounded-3xl border border-dark/10 bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-dark">Our Core Values</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-primary">Innovation</h3>
              <p className="mt-2 text-muted">
                We continuously embrace emerging technologies and modern
                development practices to deliver future-ready solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-primary">Integrity</h3>
              <p className="mt-2 text-muted">
                We build lasting relationships through honesty,
                professionalism, transparency, and accountability.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-primary">Quality</h3>
              <p className="mt-2 text-muted">
                We are committed to delivering high-quality products that meet
                international standards for performance, security, and
                reliability.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-primary">Customer Focus</h3>
              <p className="mt-2 text-muted">
                Every solution we develop is centered around our clients'
                objectives, ensuring maximum value and long-term success.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-primary">Security</h3>
              <p className="mt-2 text-muted">
                We prioritize data protection, cybersecurity, and privacy in
                every solution we design and deploy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-primary">Continuous Learning</h3>
              <p className="mt-2 text-muted">
                Technology evolves rapidly, and so do we. We continuously
                improve our skills to deliver cutting-edge digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 rounded-3xl border border-dark/10 bg-dark p-10 text-white">
          <h2 className="text-3xl font-bold">
            Why Businesses Choose Payiani Technologies
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6">
              ✔ Custom software built around your business needs.
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              ✔ Secure, scalable, and modern web applications.
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              ✔ Professional payment gateway and M-Pesa integrations.
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              ✔ Reliable web hosting, cloud deployment, and DevOps support.
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              ✔ Expert ICT consultancy and technology advisory services.
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              ✔ Long-term technical support and system maintenance.
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center">
          <h2 className="text-3xl font-bold text-dark">
            Building the Future, One Solution at a Time
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted">
            Whether you're a startup launching your first product, a growing
            business looking to digitize operations, or an established
            organization seeking enterprise-grade software solutions,
            Payiani Technologies is your trusted technology partner. We are
            passionate about transforming ideas into secure, scalable, and
            impactful digital solutions that drive long-term success.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}