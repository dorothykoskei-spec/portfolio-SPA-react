import React, { useState } from 'react';// import React and useState to store form data

function ProjectForm({ onAdd }) {
  // Add state for each input
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //It runs when the user clicks Add button
  const handleSubmit = (e) => {
    e.preventDefault(); // it  prevents the page refresh

    //it checks if the required fields are empty
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }


    // It creates a new project
    const newProject = {
      id: Date.now(), //It uses current time as a simple unique id
      title,
      description,
    };
    
    onAdd(newProject);

    // It Clears form after submit
    setTitle("");
    setDescription("");
  };

  return (
    <form className="section" onSubmit={handleSubmit}>{/* onSubmit calls handleSubmit */}
      <h2>Add New Project</h2>

      <label htmlFor="title">Title</label>{/* label input for title */}
      <input
        id="title"
        type="text"
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}// updates state when user types
      />

      <label htmlFor="description">Description</label>{/* label input for description */}
      <textarea
        id="description"
        className="input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}//it again updates when the user type
      />
      <button  className="button" type="submit">Add</button>{/* Clicking this it triggers handleSubmit */}
    </form>
  );
}

export default ProjectForm;