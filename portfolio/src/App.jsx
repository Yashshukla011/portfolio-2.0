import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./data/skills";
import Projects from "./data/projects";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import GitHubActivity from "./components/GitHubActivity";
import LeetCode from "./components/LeetCode";
import Stats from "./components/statas";
function App() {
return (
<> 
<div className="bg-[#0a0a0c]">
      <Navbar />
      <Hero />
      <Skills />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </div>
</>


);
}

export default App;
