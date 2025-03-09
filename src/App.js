import { MainSection } from "./components/MainAbout";
import { ExperienceInfoCards } from "./components/ExperienceCardBody";
import { ProjectInfoCards } from "./components/ProjectCardBody";
import { SkillInfoCards } from "./components/SkillsCardBody";
import { About } from "./components/About";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <MainSection />
      <ExperienceInfoCards />
      <ProjectInfoCards />
      <SkillInfoCards />
      <About />
    </ReactLenis>
  );
}

export default App;
