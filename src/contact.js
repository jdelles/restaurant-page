function loadContact() {
    const main = document.querySelector("main"); 
    main.innerHTML = ""; 
    const contact = document.createElement("div"); 
    contact.innerHTML = "<p>How do I order?</p>"; 
    main.appendChild(contact); 
}

export default loadContact; 