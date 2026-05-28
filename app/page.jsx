import HomeWrapper from "@/components/portfolio-new/HomeWrapper";

export const metadata = {
  title:
    "Jashwanth Manikandan || Creative Visual Artist Portfolio",
  description:
    "Creative visual artist specialized in 3D modelling, 2D animation, cinematic video editing, and modern digital design.",
};

const customLinks = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#services", text: "Services" },
  { href: "#portfolio", text: "Projects" },
  { href: "#collaborations", text: "Collaborations" },
  { href: "#blog", text: "Movies" },
  { href: "#contact", text: "Contact" },
];

export default function Home() {
  return <HomeWrapper customLinks={customLinks} />;
}
