import AboutSection from "@/components/sections/AboutSection";
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
    </main>
  )
}