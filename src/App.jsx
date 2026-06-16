import './index.css'
import Header from "./components/sections/Header";
import Home from './components/sections/Home';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Project';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    
    <div class="bg-card-gradient text-white">
      <Header/>

      <main>
        <Home/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>

    </div>
  );
}
