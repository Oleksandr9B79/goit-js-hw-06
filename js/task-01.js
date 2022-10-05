const counter = (parent) => {
  return parent.childElementCount;
};
const massage = (elements) => {
  elements.forEach((element) => {
    const firstElem = element.firstElementChild;
    const secondElem = firstElem.nextElementSibling;
    console.log(`Category: ${firstElem.textContent}`);
    console.log(`Elements: ${counter(secondElem)}`);
  });
};
const categories = document.querySelector("#categories");
const subCategories = categories.querySelectorAll(".item");
console.log(`Number of categories: ${counter(categories)}`);
massage(subCategories);
