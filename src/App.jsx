import { ToastContainer } from "react-toastify";
import "./App.css";

import { Header } from "./Components/Header";
import { Intro } from "./Components/Intro";
import { Profil } from "./Components/Profil";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className={`App dark:bg-dark-bg bg-white`}>
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
