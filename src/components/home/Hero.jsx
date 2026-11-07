import Button from "../common/Button.jsx";
import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffdf7] to-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[80vh] w-[min(1280px,calc(100%-2rem))] items-center py-14">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[58%_42%]">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Payiani Technologies · Your Tech World Starts Here
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-dark md:text-5xl xl:text-6xl">
              Software Development &amp;{" "}
              <span className="text-primary">IT Solutions</span> Company in
              Kenya
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
              We build secure, scalable and innovative digital solutions.
              Payiani Technologies helps businesses, schools, hospitals, NGOs
              and SACCOs drive digital transformation through custom software
              development, website development, IT consultancy, cybersecurity
              services and digital literacy training.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button as="a" href="/contact">
                Request a Quote
              </Button>

              <Button
                as="a"
                href="/services"
                className="border border-primary bg-white text-primary hover:bg-primary hover:text-white"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Person working on a laptop, representing Payiani Technologies' web and software development services"
              width={500}
              height={750}
              fetchPriority="high"
              className="w-full max-w-[480px] rounded-lg object-cover shadow-[0_35px_80px_rgba(0,0,0,.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
