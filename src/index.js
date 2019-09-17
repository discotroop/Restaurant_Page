import {initial} from "./initial.js";
initial();

import {about} from "./about.js";
import {menu} from "./menu.js";
import {contact} from "./contact.js";

let runAbout = document.querySelector("#about");
runAbout.addEventListener("click", function() {about()});

let runMenu = document.querySelector("#menu");
runMenu.addEventListener("click", function() {menu()});

let runContact = document.querySelector("#contact");
runContact.addEventListener("click", function() {
    contact()
});

about();
