import './App.css'
import Navbar from "./layouts/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {

  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
