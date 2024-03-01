import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
