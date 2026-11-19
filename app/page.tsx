import { Booking } from "./components/Booking";
import { Brands } from "./components/Brands";
import { FAQ } from "./components/FAQ";
import { FloatingCall } from "./components/FloatingCall";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Locations } from "./components/Locations";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Brands />
        <Locations />
        <Process />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
