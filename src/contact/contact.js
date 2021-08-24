function loadContact() {
    const main = document.querySelector("main"); 
    main.innerHTML = ""; 
    const contact = document.createElement("div"); 

    const intro = document.createElement("h2"); 
    intro.textContent = "Reach out and touch someone"; 
    
    const form = document.createElement("form");

    const name = document.createElement("input"); 
    name.type = "text"; 
    name.placeholder = "Toady Von Toadington"; 

    const email = document.createElement("input"); 
    email.type = "email"; 
    email.placeholder = "email@fakeEmail.com";
    
    const submit = document.createElement("button"); 
    submit.textContent = "Submit"; 

    form.appendChild(name); 
    form.appendChild(email);
    form.appendChild(submit); 

    contact.appendChild(intro);
    contact.appendChild(form); 


    main.appendChild(contact); 
}

export default loadContact; 