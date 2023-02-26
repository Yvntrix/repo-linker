// Get the navigation bar element
const navBar = document.querySelector("#global-nav");

// get the user avatar element to get the username
const user = document.querySelector(".avatar-small");

// Create a new link element for your repository
const newLink = document.createElement("a");

newLink.innerText = "Repositories";
newLink.setAttribute(
  "class",
  "js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade"
);
newLink.setAttribute("data-hotkey", "g r");
newLink.setAttribute(
  "data-ga-click",
  "Header, click, Nav menu - item:repositories context:user"
);
newLink.setAttribute("aria-label", "Your repositories");
newLink.setAttribute("data-turbo", "false");
newLink.setAttribute(
  "href",
  `https://github.com/${user.alt.slice(1)}?tab=repositories`
);

// Add the new link element to the navigation bar
navBar.insertBefore(newLink, navBar.firstChild);
