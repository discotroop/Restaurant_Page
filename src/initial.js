
export function initial () {
    let content = document.querySelector('#content');
    content.style.backgroundColor = "white";
    
    // Header container
    let imageDiv = document.createElement("div");
    imageDiv.style.textAlign = "center";
    content.appendChild(imageDiv);
 
    // Picture
    let picture = document.createElement("img");
    picture.src = "http://www.rachelrawr.com/wp-content/uploads/2015/11/vsco-photo-4-3.jpg";
    picture.setAttribute("style", "width:300px;border-radius:50%;border-width:10px;border-style:solid;border-color:black")
    imageDiv.appendChild(picture);

    // title
    let title = document.createElement("h1");
    title.innerText = "Betty and Bobert's Bowls n' More";
    imageDiv.appendChild(title);

    // subtitle
    let subtitle = document.createElement("p");
    subtitle.innerText = "We put the 'bowl' in bowl of veggies ... and more!";
    imageDiv.appendChild(subtitle);

    // Menu container, menu, menuBtns
    let menuContainer = document.createElement("div");
    menuContainer.setAttribute("style", "align-items: center; display:flex; justify-content:center");
    content.appendChild(menuContainer);

    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("style", "background-color: lightblue; width:80%;text-align:center;");
    menuContainer.appendChild(menuDiv);

    let about = document.createElement("button");
    about.innerText = "About";
    menuDiv.appendChild(about);

    let menu = document.createElement("button");
    menu.innerText = "Menu";
    menuDiv.appendChild(menu);

    let contact = document.createElement("button");
    contact.innerText = "Contact";
    menuDiv.appendChild(contact);

    // Dynamic content

    let dynamicContentContainer = document.createElement("div");
    dynamicContentContainer.setAttribute("style", "background-color:grey; display: flex;justify-content:center;align-items: center;");
    content.appendChild(dynamicContentContainer);

    let dynamicContent = document.createElement("div");
    dynamicContent.setAttribute("style", "width:80%; background-color:lightblue;");
    dynamicContentContainer.appendChild(dynamicContent);

    let test = document.createElement("div");
    test.innerText = "testing this bitches";
    dynamicContent.appendChild(test);

   




    
}