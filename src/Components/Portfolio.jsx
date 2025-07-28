import React, { useEffect, useState } from 'react';
import axiosClient from './api/axiosClient';  // axiosClient yolunu öz layihənə görə dəyiş

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosClient.get('/projects')
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.error('Layihələri çəkməkdə xəta:', err);
      });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsList;
