function loadHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const name = document.createElement("h1");
    name.classList.add("restaurant-name");
    name.textContent = "Impastable Restaurante";
  
    header.appendChild(name);

    // add load nav
  
    return header;
  }

// function loadMain() - load separate bundles for home / menu / contact pages

// function loadFooter()

function load() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader()); 
    // add load main
    // add load footer
  }
 
  export default load; 