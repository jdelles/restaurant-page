import loadHome from "./Home/home.js";
import loadMenu from "./Menu/menu.js";
import loadContact from "./Contact/contact.js";

function loadHeader() {
    const header = document.createElement("header");
    
    const name = document.createElement("h1");
    name.textContent = "Impastable Restaurante";
  
    header.appendChild(name);

    // add nav TODO: onclicks bugged
    const nav = document.createElement("nav"); 
    const list = document.createElement("ul"); 
    const home = document.createElement("li");
    // home.onclick = loadHome(); 
    home.textContent = "Home"; 
    const menu = document.createElement("li"); 
    menu.textContent = "Menu"; 
    // menu.onclick = loadMenu(); 
    const contact = document.createElement("li"); 
    contact.textContent = "Contact"; 
    // contact.onclick = loadContact(); 

    list.appendChild(home);
    list.appendChild(menu); 
    list.appendChild(contact); 

    nav.appendChild(list); 

    header.appendChild(nav); 

    return header;
  }

function loadMain() {
    return document.createElement("main");
}

function loadFooter() {
    const footer = document.createElement("footer"); 
    const div = document.createElement("div"); 
    div.innerHTML = '<p>Copyright © <a href="https://www.github.com/jdelles">James Delles</a> 2021</p>'; 

    footer.appendChild(div); 

    return footer; 
}

function load() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader()); 
    content.appendChild(loadMain()); 
    content.appendChild(loadFooter()); 
    loadHome(); 
  }
 
  export default load; 