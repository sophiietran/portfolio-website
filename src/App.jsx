import './index.css'
import Header from "./components/sections/Header";
import Home from './components/sections/Home';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Project';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <>
      <Header/>

      <main>
        <Home/>
        <Skills name="skills"/>
        <Experience name = "experience"/>
        <Projects name = "projects"/>
        <About name = "about"/>
        <Contact name="contact"/>
        <Footer name="footer"/>
      </main>
    </>
  );
}
