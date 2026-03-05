import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const education = [
    { year: "2025", program: "BS Information Technology", school: "USTP" },
    { year: "2022", program: "STEM", school: "Liceo de Cagayan" },
    { year: "2018", program: "Junior Highschool", school: "MOGCHS" },
    { year: "2012", program: "Elementary", school: "Macabalan ES" },
    { year: "2010", program: "Kindergarten", school: "Macabalan ES" }
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      {/* 2. Pass the data through props here */}
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
    </div>
  );
}

export default App;
