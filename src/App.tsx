import { useState, useEffect } from "react";

import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./App.scss";

const App = () => {
  const [resumeData, setResumeData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadResume();
  }, []);

  useEffect(() => {
    if (resumeData) setIsLoading(false);
  }, [resumeData]);

  const loadResume = async () => {
    const response = await fetch("portfolio-data.json");
    const data = await response.json();
    setResumeData(data);
  };

  return (
    (!isLoading && (
      <div>
        <Home basicInfo={resumeData.basicInfo} />
        <About basicInfo={resumeData.basicInfo} />
        <Projects
          projects={resumeData.projects}
          basicInfo={resumeData.basicInfo}
        />
        <Skills skills={resumeData.skills} basicInfo={resumeData.basicInfo} />
        <Experience
          experience={resumeData.experience}
          basicInfo={resumeData.basicInfo}
        />
        <Footer basicInfo={resumeData.basicInfo} />
      </div>
    )) ||
    null
  );
};

export default App;
