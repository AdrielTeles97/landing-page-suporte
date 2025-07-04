import AboutSection from "@/components/sections/AboutSection";
import ContactPage from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductsSection from "@/components/sections/ProductsSection";



export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <HowItWorks />
      <ContactPage />
    </main>
  )
}