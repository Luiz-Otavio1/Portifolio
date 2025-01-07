import React from 'react'

const Project = ({project}) => {
  return (
    <div className='project'>
        <h3>{project.title}</h3>
        <img src={project.img} alt="Foto do projeto" />
        <p>{project.text}</p>
        <a href={project.src} target='_blank'>Ver projeto</a>
    </div>
  )
}

export default Project