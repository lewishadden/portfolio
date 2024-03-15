import { useState, useEffect } from "react";

import {
  About,
  Experience,
  Footer,
  Home,
  Projects,
  Skills,
  Contact,
} from "components";

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
      <>
        <Home basicInfo={resumeData.basicInfo} />
        <About basicInfo={resumeData.basicInfo} />
        <Experience
          experience={resumeData.experience}
          basicInfo={resumeData.basicInfo}
        />
        <Projects
          projects={resumeData.projects}
          basicInfo={resumeData.basicInfo}
        />
        <Skills skills={resumeData.skills} basicInfo={resumeData.basicInfo} />
        <Contact basicInfo={resumeData.basicInfo} />
        <Footer basicInfo={resumeData.basicInfo} />
      </>
    )) ||
    null
  );
};

export default App;
