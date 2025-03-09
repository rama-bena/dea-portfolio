import { MainSection } from "./components/MainAbout";
import { ExperienceInfoCards } from "./components/ExperienceCardBody";
import { ProjectInfoCards } from "./components/ProjectCardBody";
import { SkillInfoCards } from "./components/SkillsCardBody";
import { About } from "./components/About";
import { ReactLenis } from "lenis/react";

/**
 * Renders the application's main layout with smooth scrolling.
 *
 * This component wraps the primary application sections within a {@link ReactLenis} container to enable smooth scrolling. It sequentially renders the main section, experience info cards, project info cards, skill info cards, and about section.
 *
 * @returns {JSX.Element} The rendered application structure.
 */
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
