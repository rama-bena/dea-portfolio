import { MainSection } from "./components/MainAbout";
import { ExperienceInfoCards } from "./components/ExperienceCardBody";
import { ProjectInfoCards } from "./components/ProjectCardBody";
import { SkillInfoCards } from "./components/SkillsCardBody";
import { About } from "./components/About";
import { ReactLenis } from "lenis/react";

/**
 * Renders the main application layout.
 *
 * This component composes the app by wrapping the main content sections—namely, MainSection, ExperienceInfoCards, ProjectInfoCards, SkillInfoCards, and About—inside a ReactLenis container for smooth scrolling.
 *
 * @returns {JSX.Element} The root element of the application.
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
