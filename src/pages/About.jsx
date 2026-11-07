import MainLayout from "../components/layout/MainLayout.jsx";
import CtaBand from "../components/common/CtaBand.jsx";
import PageHeader from "../components/common/PageHeader.jsx";

const values = [
  ["Innovation", "We continuously embrace emerging technologies and modern development practices to deliver future-ready solutions."],
  ["Integrity", "We build lasting relationships through honesty, professionalism, transparency, and accountability."],
  ["Quality", "We are committed to delivering high-quality products that meet international standards for performance, security, and reliability."],
  ["Customer Focus", "Every solution we develop is centered around our clients' objectives, ensuring maximum value and long-term success."],
  ["Security", "We prioritize data protection, cybersecurity, and privacy in every solution we design and deploy."],
  ["Continuous Learning", "Technology evolves rapidly, and so do we. We continuously improve our skills to deliver cutting-edge digital solutions."],
];

const reasons = [
  "Custom software built around your business needs.",
  "Secure, scalable, and modern web applications.",
  "Professional payment gateway and M-Pesa integrations.",
  "Reliable web hosting, cloud deployment, and DevOps support.",
  "Expert ICT consultancy and technology advisory services.",
  "Long-term technical support and system maintenance.",
];

export default function About() {
  return (
    <MainLayout>
      <PageHeader eyebrow="About Payiani Technologies" title="Your Tech World starts here">
        <p className="mt-6">
          Payiani Technologies is a Nairobi-based technology company dedicated
          to helping businesses, organizations, startups, and institutions
          across Kenya leverage innovative digital solutions to improve
          efficiency, increase productivity, and accelerate growth.
        </p>
        <p className="mt-5">
          We specialize in designing and developing secure, scalable, and
          high-performing software solutions tailored to our clients' unique
          business requirements. Whether you need a professional company
          website, a custom business management system, secure payment
          integration, cloud deployment, cybersecurity consulting, or ICT
          advisory services, our team is committed to delivering technology
          solutions that create measurable value.
        </p>
        <p className="mt-5">
          At Payiani Technologies, we believe technology should simplify
          business operations rather than complicate them. That's why we
          combine technical expertise, industry best practices, and innovative
          thinking to build reliable digital products that help our clients
          remain competitive in today's rapidly evolving digital landscape.
        </p>
      </PageHeader>

      {/* Mission & Vision */}
      <section className="section-shell grid gap-12 md:grid-cols-2">
        <div className="border-t-2 border-primary pt-6">
          <h2 className="text-3xl font-bold text-dark">Our Mission</h2>
          <p className="mt-4 leading-8 text-muted">
            To empower businesses through innovative, secure, and reliable
            technology solutions that enhance operational efficiency,
            strengthen digital transformation, and enable sustainable growth.
          </p>
        </div>
        <div className="border-t-2 border-dark pt-6">
          <h2 className="text-3xl font-bold text-dark">Our Vision</h2>
          <p className="mt-4 leading-8 text-muted">
            To become one of Africa's leading technology companies, recognized
            for delivering world-class software solutions, cybersecurity
            services, ICT consultancy, and digital innovation that transform
            businesses across industries.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-y border-dark/10 bg-white">
        <div className="section-shell">
          <h2 className="text-3xl font-bold text-dark">Our Core Values</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, text]) => (
              <div key={title}>
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="mt-2 leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-dark text-white">
        <div className="section-shell">
          <h2 className="text-3xl font-bold">Why Businesses Choose Payiani Technologies</h2>
          <ul className="mt-8 grid gap-x-10 md:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3 border-b border-white/10 py-4 text-white/80">
                <span className="text-primary" aria-hidden="true">✓</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="section-shell text-center">
        <h2 className="text-3xl font-bold text-dark">Building the Future, One Solution at a Time</h2>
        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted">
          Whether you're a startup launching your first product, a growing
          business looking to digitize operations, or an established
          organization seeking enterprise-grade software solutions, Payiani
          Technologies is your trusted technology partner. We are passionate
          about transforming ideas into secure, scalable, and impactful digital
          solutions that drive long-term success.
        </p>
      </section>

      <CtaBand label="Contact Us" />
    </MainLayout>
  );
}
