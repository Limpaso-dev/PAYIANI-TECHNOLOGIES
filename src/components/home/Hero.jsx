import Button from "../common/Button.jsx";
import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffdf7] to-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto flex min-h-[88vh] w-[min(1280px,calc(100%-2rem))] items-center">
        <div className="grid w-full items-center gap-20 lg:grid-cols-[58%_42%]">
          {/* LEFT */}
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-primary">
              PAYIANI TECHNOLOGIES
            </span>

            <h1 className="mt-8 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-dark md:text-6xl xl:text-7xl">
              We Build Secure,
              <br />
              Scalable &
              <br />
              <span className="text-primary">
                Innovative Digital Solutions.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
             Payiani Technologies delivers innovative, secure, and scalable technology solutions, from custom web development and cybersecurity to cloud hosting, enterprise software, ICT consultancy, deployment, and seamless payment integrations-helping Organizations & Businesses accelerate growth and digital transformation.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
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
          <div className="relative flex justify-center lg:justify-end">
            {/* Image */}
            <img
              src={heroImage}
              alt="PAYIANI Technologies"
              className="w-full max-w-[520px] rounded-[32px] object-cover shadow-[0_35px_80px_rgba(0,0,0,.15)]"
            />

            {/* Floating Card */}
            <div className="absolute -right-8 top-8 rounded-2xl bg-white px-6 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -left-6 bottom-10 rounded-2xl bg-white px-6 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span className="font-semibold text-gray-700">
                  100% Reliable
                </span>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -right-4 bottom-24 rounded-2xl bg-dark px-6 py-4 shadow-xl">
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}