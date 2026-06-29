import { Mail, Phone, MapPin } from "lucide-react";
import { APP_NAME } from "../../utils/constants";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-dark text-white">
      {/* Top Section */}
      <div className="mx-auto grid w-[min(1200px,calc(100%-2rem))] gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt={APP_NAME}
              className="h-12 w-12 object-contain"
            />

            <h2 className="text-xl font-bold uppercase tracking-wider">
              {APP_NAME}
            </h2>
          </div>

          <p className="mt-6 leading-7 text-gray-400">
            PAYIANI Technologies is committed to delivering innovative,
            secure, and scalable digital solutions that empower businesses,
            organizations, and startups to thrive in today's digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-primary">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="/" className="transition hover:text-primary">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="transition hover:text-primary">
                About Us
              </a>
            </li>

            <li>
              <a href="/services" className="transition hover:text-primary">
                Services
              </a>
            </li>

            <li>
              <a href="/portfolio" className="transition hover:text-primary">
                Portfolio
              </a>
            </li>

            <li>
              <a href="/contact" className="transition hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-primary">
            Our Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>System Development</li>
            <li>Cybersecurity</li>
            <li>Cloud Hosting</li>
            <li>ICT Consultancy</li>
            <li>M-Pesa API Integration</li>
            <li>Payment Gateway Integration</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-primary">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-primary" size={18} />
              <span>Nairobi, Kenya</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={18} />
              <span>+2547 5735 8237</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={18} />
              <span>payianitechnologies@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[min(1200px,calc(100%-2rem))] flex-col items-center justify-between gap-4 py-6 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <p>
            © {year}{" "}
            <span className="font-semibold text-primary">
              {APP_NAME}
            </span>
            . All Rights Reserved.
          </p>

          <p>Empowering Businesses Through Technology.</p>

          <p>
            Developed & Managed by{" "}
            <span className="font-semibold text-primary">
              PAYIANI Technologies
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}