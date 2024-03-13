// Write your code here!
/*const element = document.createElement("div");
document.body.append(element);

const ul = document.createElement("ul");
document.body.append(ul);

for (let i=0; i<3; i++){
    const li = document.createElement("li");
    li.textContent = ( i + 1 ).toString();
    ul.append(li);
}
*/
document.getElementById('main').remove()

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "John is the champion"
