import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Activities from "@/components/Activities";
import NoticeBoard from "@/components/NoticeBoard";
import Theme2026 from "@/components/Theme2026";
import Committee from "@/components/Committee";
import Publication from "@/components/Publication";
import History from "@/components/History";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Sponsorship from "@/components/Sponsorship";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-light selection:bg-maroon selection:text-white">
      <Navbar />
      
      <div className="pt-20 lg:pt-0">
        <Hero />
        <About />
        <Stats />
        <Activities />
        <Gallery />
        <NoticeBoard />
        <Theme2026 />
        <Sponsorship />
        <Committee />
        <Publication />
        <History />
        <Location />
      </div>
      
      <Footer />
      
    </main>
  );
}
