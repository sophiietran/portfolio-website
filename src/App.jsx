import './App.css'
import Header from "./components/sections/Header";
import Home from './components/sections/HomeSection';
import About from './components/sections/AboutSection';
import Experience from './components/sections/ExperienceSection';
import Projects from './components/sections/ProjectSection';
import Contact from './components/sections/ContactSection';

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About name = "about"/>
        <Experience name = "experience"/>
        <Projects name = "projects"/>
        <Contact name="contact"/>
      </main>
    </>
  );
}
