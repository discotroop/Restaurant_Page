export function contact() {
    let dynamicContent = document.querySelector("#dynamic");
    dynamicContent.innerHTML = "";
    let contactSection = document.createElement("div");
    dynamicContent.appendChild(contactSection);

    let address = document.createElement("p");
    address.innerHTML = "Address: <br> <br> Betty and Boberts Bowls n' More <br> 1600 Pennsylvania Ave. <br> Washington DC, 22222";
    contactSection.appendChild(address);

    let phone = document.createElement("p");
    phone.innerHTML = "Phone: (888)666-6089";
    contactSection.appendChild(phone);

    let email = document.createElement("p");
    email.innnerHTML = "Email: Management@bowls.edu";
    contactSection.appendChild(email);

    dynamicContent.scrollIntoView();
}