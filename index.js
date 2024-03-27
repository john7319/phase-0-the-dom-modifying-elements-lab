// Write your code here!

document.getElementById('main').remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "John is the champion"

document.body.append(newHeader);