let addParagraph = document.getElementById("p-button");
let addImage = document.getElementById("img-button");
let paraDiv = document.getElementById("p-div");


let paragraph = document.getElementById("para");
paragraph.style.color = "white";
paragraph.style.background = "black";
paragraph.style.padding = "10px";
paragraph.style.fontSize = "20px";



function addPara(){
    let newText = document.createElement("p");
    newText.textContent = paragraph;
    paraDiv.apprehendChild(newText);
    
}

addParagraph.addEventListener("click", addPara);

