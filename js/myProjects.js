const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementById("ftco-nav")[0]
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})
console.log("nate");
fetch("https://api.github.com/users/namelo01/repos")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let projects = data
        let projectSection = document.getElementById("myProjects");
        let projectList = projectSection.querySelector("div");
        for (let i = 0; i < projects.length; i++) {
            let projectElement = document.createElement("a"); 
            projectElement.href = `${projects[i].html_url}`  
            projectElement.innerText = `${projectElement.textContent = projects[i].name}`
            projectList.appendChild(projectElement);
        }
    })