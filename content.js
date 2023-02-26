// Get the navigation bar element
const navBar = document.querySelector("#global-nav");

// get the user avatar element to get the username
const user = document.querySelector(".avatar-small");

// Create a new link element for your repository
const newLink = document.createElement("a");
newLink.href = user.alt.slice(1) + "?tab=repositories";
newLink.innerText = "Repositories";
newLink.className =
  "Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade";

// Add the new link element to the navigation bar
navBar.insertBefore(newLink, navBar.firstChild);
