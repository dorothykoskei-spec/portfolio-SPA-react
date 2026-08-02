import React, { useState } from 'react' // using useState to store search input text

function ProjectList({ projects, onDelete }) { // on projects I get the data from the App while onDelete is a function from the app to delete
  const [searchTerm, setSearchTerm] = useState('')//it tracks what the usesr types nad starts as an empty string

  const filteredProjects = projects.filter((project) => { //filters projects everytime searchTerm chages
    const title = project.title.toLowerCase()
    const description = project.description.toLowerCase()
    const term = searchTerm.toLowerCase()

    return title.includes(term) || description.includes(term)//it returns true if the search term is found in title or the description
  })

  return (
    <div className="section">
      <h2>Search Projects</h2>
      {/*onChange updates the state*/}
      <input
        type="text"
        placeholder="Search projects"
        className="input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}//It updates searchTerm any time the user types
      />

      <h3>Projects</h3>
          {/* Conditional Rendering: if no projects match show no projects found */}
      {filteredProjects.length === 0 ? (
        <div className="project-box">
          <p>No projects found.</p>
        </div>
      ) : (
       // Render list. .map() loops through array and the key is required for React lists
        filteredProjects.map((project) => (
          <div key={project.id} className="project-box">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            
          </div>
        ))
      )}
    </div>
  )
}

export default ProjectList;