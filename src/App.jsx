import { useState } from 'react'// useState: to store and update data
import initialProjects from './data/Project.js' //import data.js
import Header from './components/Header'// import Header component
import ProjectForm from './components/ProjectForm'//Import form for adding projects
import ProjectList from './components/ProjectList'//import list to show search projects
import './App.css'//import css for styling

function App(){
  const [projects, setProjects] = useState(initialProjects) //uses data.js instead of []
  const [searchTerm, setSearchTerm] =useState("") //it stores what the user types in the search box

  const addProject = (newProject) => { //a function that adds a new project
    setProjects([...projects, {id: Date.now(), ...newProject}]) //...projects that copys old project and then adds a new projects with a new id
  }

  const deleteProject = (id) => { //it deletes the project by id
    setProjects(projects.filter(p => p.id !== id))// // it keeps only projects whose id is NOT the one that we clicked
  }

 return (
  <div className="container">
    <h1>My Portfolio</h1>
        {/* It sends addProject function down to ProjectForm as onAdd prop */}
    <ProjectForm onAdd={addProject} />

    {/* it Sends data and functions down to the ProjectList */}
    <ProjectList 
    projects={projects}   //it  sends all projects down
    searchTerm={searchTerm} //it sends current search text down
    setSearchTerm={setSearchTerm} // it sends function to update search text down
    onDelete={deleteProject} //  it sends delete function down
     />
  </div>
 )
}

export default App // export so main.jsx can render it