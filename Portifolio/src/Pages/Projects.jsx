import React from 'react'
import { projectsVideo } from '../projects/projectsVideo'
import Project from '../Components/Project'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects'>
      <p>Projetos feitos sozinhos/cursos, principais.</p>
      <div className="projects-grind">
        {projectsVideo.map(project => (
          <Project key={project.id} project={project}/>
        ))}
      </div>
    </div>
  )
}

export default Projects