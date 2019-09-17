export function menu () {
    // set Up
    let dynamicContent = document.querySelector("#dynamic");
    dynamicContent.innerHTML = "";
    let menuSection = document.createElement("div");
    dynamicContent.appendChild(menuSection);

    // section one
    let firstPara = document.createElement("p");
    firstPara.innerText = "Morning Bowls:";
    menuSection.appendChild(firstPara);

    let firstList = document.createElement("ul");
    firstList.setAttribute("id", "firstList");
    menuSection.appendChild(firstList);
    let firstListItems = ["Toothpaste Bowl -- $15", "Orange Juice Bowl -- $12", "The Commute -- $14"]
    firstListItems.forEach(function(item) {
        let listItem = document.createElement("li");
        listItem.innerText = item;
        firstList.appendChild(listItem);
    });

    // section two
    let secondPara = document.createElement("p");
    secondPara.innerText = "Evening Bowls:";
    menuSection.appendChild(secondPara);

    let secondList = document.createElement("ul");
    secondList.setAttribute("id", "secondList");
    menuSection.appendChild(secondList);

    let secondListItems = ["Suit and Thai Bowl -- $20", "Rum and Poke Bowl -- $25", "Bowling for Soup --$17"];
    secondListItems.forEach(function(item) {
        let listItem = document.createElement("li");
        listItem.innerText = item;
        secondList.appendChild(listItem);
    });

    // and more
    let thirdPara = document.createElement("p");
    thirdPara.innerText = "...And More:";
    menuSection.appendChild(thirdPara);

    let thirdList = document.createElement("ul");
    thirdList.setAttribute("id", "thirdList");
    menuSection.appendChild(thirdList);

    let thirdListItems = ["Rusty Chainsaw --$200", "Your Third Grade Teachers Middle Name --$50", "Scratched DVD --$15"];
    thirdListItems.forEach(function(item) {
        let listItem = document.createElement("li");
        listItem.innerText = item;
        thirdList.appendChild(listItem);
    });
    
    dynamicContent.scrollIntoView();
}