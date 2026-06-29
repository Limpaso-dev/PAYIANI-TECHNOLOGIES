import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "../common/ScrollToTop.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-light text-dark">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}