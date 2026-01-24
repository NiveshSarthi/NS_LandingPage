import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Properties } from '@/components/sections/Properties';
import { ExpertAdvice } from '@/components/sections/ExpertAdvice';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Properties />
      <Features />
      <ExpertAdvice />
      <Testimonials />
      <Footer />
    </main>
  );
}
