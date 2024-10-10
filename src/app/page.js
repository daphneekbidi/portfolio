import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from './components/skills';
import Work from "./components/work";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Footer />
    </>
  );
}
