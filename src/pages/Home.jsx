import HeroSection from "../components/HeroSection";
import Calculator from "../components/Calculator";
import Blog from "../components/Blog";

function Home() {
  return (
    <main className="text-satoshi text-white">
      <HeroSection />
      <Calculator />
      <Blog />
    </main>
  );
}

export default Home;
