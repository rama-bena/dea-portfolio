import projectElement from "../projectElement";
import "./Projects.css";
import "./ProjectCard.css";
import { NavButton } from "./NavButton";
import PDFViewer from "./PdfViewer";

const ProjectCard = ({ title, description, file, skills }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <PDFViewer file={file} />
        <p className="project-description">{description}</p>
        <div className="flex flex-wrap mt-2 justify-center mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-200 text-gray-800 text-base font-medium px-2 py-1 rounded-xl mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </div>
        <a href={file} target="_blank" rel="noreferrer">
          <NavButton name="View Project" />
        </a>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="projects-container">
      {projectElement.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          file={`${process.env.PUBLIC_URL}/pdf/${project.file}`}
          skills={project.skills}
        />
      ))}
    </div>
  );
};
