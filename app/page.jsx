import Footer from "@/components/portfolio-new/Footer";
import Header from "@/components/portfolio-new/Header";
import PortfolioNewMain from "@/components/portfolio-new";
import Hero from "@/components/portfolio-new/Hero";

export const metadata = {
  title:
    "Jashwanth Manikandan || Creative Visual Artist Portfolio",
  description:
    "Creative visual artist specialized in 3D modelling, 2D animation, cinematic video editing, and modern digital design.",
};

const customLinks = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#portfolio", text: "Projects" },
  { href: "#collaborations", text: "Collaborations" },
  { href: "#blog", text: "Movies" },
  { href: "#contact", text: "Contact" },
];

export default function Home() {
  return (
    <>
      <div className="theme-bold">
        <div className="page" id="top">
          {/* Navigation Panel */}
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header links={customLinks} />
          </nav>
          {/* End Navigation Panel */}
          
          <main id="main">
            {/* Hero Section */}
            <section
              className="home-section parallax-mousemove-scene scrollSpysection"
              id="home"
            >
              <Hero />
            </section>
            {/* End Hero Section */}

            {/* Main Sections */}
            <PortfolioNewMain onePage />
          </main>

          {/* Footer */}
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer />
          </footer>
          {/* End Footer */}
        </div>
      </div>
    </>
  );
}
