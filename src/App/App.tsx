import { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

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

import { ResumeData } from "../index.d";

const App = () => {
  const [resumeData, setResumeData] = useState<ResumeData | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadResume();
  }, []);

  useEffect(() => {
    if (resumeData) setIsLoading(false);
  }, [resumeData]);

  const loadResume = async () => {
    const response = await fetch("portfolio-data.json");
    const data: ResumeData = await response.json();
    setResumeData(data);
  };

  return (
    (!isLoading && resumeData && (
      <ParallaxProvider>
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
      </ParallaxProvider>
    )) ||
    null
  );
};

export default App;
