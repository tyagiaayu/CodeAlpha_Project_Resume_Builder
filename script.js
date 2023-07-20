// Function to handle photo upload and display the preview
document.getElementById("photoInput").addEventListener("change", function() {
  const fileInput = this;
  const file = fileInput.files[0];
  const photoPreview = document.getElementById("photoPreview");

  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      photoPreview.src = reader.result;
    };
    reader.readAsDataURL(file);
  } else {
    photoPreview.src = "";
  }
});

// Function to add a new education field
function addNewEduField() {
  const eduContainer = document.getElementById("eDu");
  const newEduField = document.createElement("input");
  newEduField.setAttribute("type", "text");
  newEduField.setAttribute("class", "form-control eField mt-2");
  newEduField.setAttribute("placeholder", "Add Education");
  eduContainer.appendChild(newEduField);
}

// Function to add a new experience field
function addNewExpField() {
  const expContainer = document.getElementById("exp");
  const newExpField = document.createElement("input");
  newExpField.setAttribute("type", "text");
  newExpField.setAttribute("class", "form-control expField mt-2");
  newExpField.setAttribute("placeholder", "Add Experience");
  expContainer.appendChild(newExpField);
}

// Function to add a new skills field
function addNewSkillsField() {
  const skillsContainer = document.getElementById("Skills");
  const newSkillsField = document.createElement("input");
  newSkillsField.setAttribute("type", "text");
  newSkillsField.setAttribute("class", "form-control SkillsField mt-2");
  newSkillsField.setAttribute("placeholder", "Add Skill");
  skillsContainer.appendChild(newSkillsField);
}

// Function to add a new project field
function addNewProjectField() {
  const projectContainer = document.getElementById("prj");
  const newProjectField = document.createElement("input");
  newProjectField.setAttribute("type", "text");
  newProjectField.setAttribute("class", "form-control projectField mt-2");
  newProjectField.setAttribute("placeholder", "Add Project");
  projectContainer.appendChild(newProjectField);
}

// Function to add a new achievements field
function addNewAchivField() {
  const achivContainer = document.getElementById("achiv");
  const newAchivField = document.createElement("input");
  newAchivField.setAttribute("type", "text");
  newAchivField.setAttribute("class", "form-control AchiveField mt-2");
  newAchivField.setAttribute("placeholder", "Add Achievement");
  achivContainer.appendChild(newAchivField);
}

// Function to build the resume
function buildResume() {
  // Get all the user inputs
  const fullName = document.getElementById("NameField").value;
  const gmail = document.getElementById("gmailField").value;
  const contactNumber = document.getElementById("contactField").value;
  const address = document.getElementById("AddressField").value;
  const city = document.getElementById("cityField").value;
  const state = document.getElementById("stateField").value;
  const linkedIn = document.getElementById("linkedinField").value;

  const educationFields = document.querySelectorAll(".eField");
  const educations = Array.from(educationFields).map(edu => edu.value);

  const experienceFields = document.querySelectorAll(".expField");
  const experiences = Array.from(experienceFields).map(exp => exp.value);

  const skillsFields = document.querySelectorAll(".SkillsField");
  const skills = Array.from(skillsFields).map(skill => skill.value);

  const projectFields = document.querySelectorAll(".projectField");
  const projects = Array.from(projectFields).map(prj => prj.value);

  const achivFields = document.querySelectorAll(".AchiveField");
  const achievements = Array.from(achivFields).map(achiv => achiv.value);

  // Create the resume content
  const resumeContent = `
    <h1>Resume of ${fullName}</h1>
    <p>Email: ${gmail}</p>
    <p>Contact Number: ${contactNumber}</p>
    <p>Address: ${address}, ${city}, ${state}</p>
    <p>LinkedIn: ${linkedIn}</p>
    <h2>Education</h2>
    <ul>
      ${educations.map(edu => `<li>${edu}</li>`).join("")}
    </ul>
    <h2>Experience</h2>
    <ul>
      ${experiences.map(exp => `<li>${exp}</li>`).join("")}
    </ul>
    <h2>Skills</h2>
    <ul>
      ${skills.map(skill => `<li>${skill}</li>`).join("")}
    </ul>
    <h2>Projects</h2>
    <ul>
      ${projects.map(prj => `<li>${prj}</li>`).join("")}
    </ul>
    <h2>Achievements</h2>
    <ul>
      ${achievements.map(achiv => `<li>${achiv}</li>`).join("")}
    </ul>
  `;

  // Display the resume content in a new window (you can modify this to save the content to a file or send it to a server)
  const newWindow = window.open();
  newWindow.document.write(resumeContent);
  
}
