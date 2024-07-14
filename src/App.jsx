import { ToastContainer } from "react-toastify";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Profil } from "./components/Profil";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Intro />
      <Skills />
      <Profil />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
