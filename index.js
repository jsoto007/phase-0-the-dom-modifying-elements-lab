// Write your code here!

const mainMarkUp = document.getElementById('main');
mainMarkUp.remove();

const newHeader = document.createElement("h1");
// h1.classList.add("victory")
newHeader.id = "victory"

newHeader.innerHTML = "Jose is the champion"