import './App.css'
import Header from "./components/Header";
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
}
