import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Header } from "./Components/Header";
import { Intro } from "./Components/Intro";
import { Profil } from "./Components/Profil";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Footer } from "./Components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";




function App() {

  const darkMode = useSelector((state) => state.darkMode);
  const lang = useSelector((state) => state.language);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark:bg-dark-bg' : 'bg-white'}`}>
      <ToastContainer />
      <Header lang={lang} />
      <Intro  lang={lang}/>
      <Skills  lang={lang}/>
      <Profil  lang={lang}/>
      <Projects  lang={lang}/>
      <Footer  lang={lang}/>
    </div>
  );
}

export default App;
