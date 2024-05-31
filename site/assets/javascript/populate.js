const fs = require('fs').promises;

async function initProjects(targetDir) {
    let projects = [];
    try {
        const files = await fs.readdir(targetDir);
        console.log("\nCurrent directory filenames:");
        for (let file of files) {
            console.log(file);
            projects.push(file);
        }
    } catch (err) {
        console.log(err);
    }
    return projects;
}

async function init() {
    const targetDir = '../../projects';  // Replace with your target directory
    const projects = await initProjects(targetDir);
    const projectDiv = document.getElementById("project-div");

    for (let project of projects) {
        // Create a new card element
        const card = document.createElement("div");
        card.className = "project-card";  // Add a class for styling if needed

        // Create a title element
        const title = document.createElement("h3");
        title.textContent = project;

        // Create a hyperlink element
        const link = document.createElement("a");
        link.href = `${targetDir}/${project}`;
        link.textContent = "View Project";

        // Append title and link to the card
        card.appendChild(title);
        card.appendChild(link);

        // Append the card to the projectDiv
        projectDiv.appendChild(card);
    }
}

document.addEventListener('DOMContentLoaded', init);
