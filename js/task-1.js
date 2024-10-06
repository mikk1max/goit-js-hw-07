const categoriesList = document.querySelector("#categories")

console.log(`Number of categories: ${categoriesList.children.length}`);

for (let i = 0; i < categoriesList.children.length; i++) {
    console.log(`Category: ${categoriesList.children[i].firstElementChild.textContent}`);
    console.log(`Elements: ${categoriesList.children[i].lastElementChild.children.length}`);
}
