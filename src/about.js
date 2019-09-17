export function about () {
    let dynamicContent = document.querySelector("#dynamic");
    dynamicContent.innerHTML = "";
    let aboutSection = document.createElement("div");
    let firstPara = document.createElement("p");
    firstPara.innerText = "Since 2002 Betty and Bobert have been serving up the best bowls of edible food, this side of the mason dixon line. " + 
    "We use only the finest dollar store rejects and craft them lovingly into dishes the New York Times called 'barely food.' Time magazine " + 
    "raves 'we almost died choking on a stale hot dog.' come on down and see what the fuss is about!";
    dynamicContent.appendChild(aboutSection);
    aboutSection.appendChild(firstPara);

    dynamicContent.scrollIntoView();
}