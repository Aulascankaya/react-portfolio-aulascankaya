import { ToastContainer } from "react-toastify";
import "./App.css";

import { Header } from "./Components/Header";
import { Intro } from "./Components/Intro";
import { Profil } from "./Components/Profil";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Footer } from "./Components/Footer";
import { useState } from "react";
import { dataTR } from "./Datas/tr";

function App() {
  const [lang,setLang] = useState(dataTR)

  return (
    <div className={`App dark:bg-dark-bg bg-white`}>
      <ToastContainer />
      <Header lang={lang} setLang={setLang}/>
      <Intro  lang={lang}/>
      <Skills  lang={lang}/>
      <Profil  lang={lang}/>
      <Projects  lang={lang}/>
      <Footer  lang={lang}/>
    </div>
  );
}

export default App;
