import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}
