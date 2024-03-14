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

const App = ({ data }) => {
  const { basicInfo, experience, projects, skills } = data;

  return (
    <>
      <Home basicInfo={basicInfo} />
      <About basicInfo={basicInfo} />
      <Experience experience={experience} basicInfo={basicInfo} />
      <Projects projects={projects} basicInfo={basicInfo} />
      <Skills skills={skills} basicInfo={basicInfo} />
      <Contact basicInfo={basicInfo} />
      <Footer basicInfo={basicInfo} />
    </>
  );
};

export default App;
