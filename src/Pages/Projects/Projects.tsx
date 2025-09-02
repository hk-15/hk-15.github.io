import { useState } from "react";
import { Page } from "../Page/Page";
import { ProjectDetails } from "../../Components/ProjectDetails/ProjectDetails";
import { Project } from "../../Data/ProjectData";
import { projectData } from "../../Data/ProjectData";
import "./Projects.scss";

const emptyProject = {
    title: "",
    description: [],
    images: [],
    gitHubLink: "",
    deployLink: ""
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project>(emptyProject);
    
    return (
        <Page containerClassName="projects-container">
        <div className="projects-menu">
        <ul>
        {projectData.map(project => (
            <li className={project.title === selectedProject.title ? "selected" : ""}
            onClick={() => setSelectedProject(project)}
            >{project.title}</li>
        ))}
        </ul>
        </div>
        {selectedProject.title !== "" &&
        <ProjectDetails project={selectedProject}/> }
        </Page>
    )
}