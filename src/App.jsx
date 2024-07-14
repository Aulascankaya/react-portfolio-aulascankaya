import { ToastContainer } from "react-toastify";
import "./App.css";

import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Profil } from "./components/Profil";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className={`App dark:bg-dark-bg bg-white}`}>
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
