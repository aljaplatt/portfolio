import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Tech from "../Tech/Tech";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
