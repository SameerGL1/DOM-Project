// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
  var projectObjects = projects;
  console.log(projectObjects);

  var projectsElement = document.getElementById("projects");
  projectsElement.innerHTML = "";

  for (var i=0; i<projectObjects.length; i++) {
    var project = projectObjects[i];
    projectsElement.innerHTML +=
      "<div class='card'>" +
      "<img src='" +
      project["image"] +
      "'>" +
      "<span>" +
      project["title"] +
      "</span>" +
      "<span>" +
      project["description"] +
      "</span>" +
      "</div>";
  }
}

// This function should create a new project by retrieving details from the form.
// The project is then added to the projects array and displayed
function saveNewProject() {

  // Get the new project details by using the DOM elements
  var title = document.getElementById("title").value;
  var description = document.getElementById("desc").value;
  var image = document.getElementById("image").value;
  console.log(title, description, image)

  // Create a new project Object
  var newProjectObject = {
    title: title,
    description: description,
    image: image,
  };

  // Add the new project object to the projects Object 
  projects.push(newProjectObject);

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
