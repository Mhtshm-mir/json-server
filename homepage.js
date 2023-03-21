const nextbtn = document.querySelector(".nextbtn");
const prevbtn = document.querySelector(".prevbtn");
let pagenum = document.querySelector(".pagenum");
let page = 1;
pagenum.textContent = page;
const getData = (page) => {
  console.log(page);
  fetch(`https://json-server-6ewh.onrender.com/recipes?_limit=5&_page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      appendData(data);
    });
};
getData(page);

const appendData = (data) => {
  const container = document.querySelector(".recipe-container");
  container.innerHTML = "";
  data.map((el) => {
    const div = document.createElement("div");
    div.setAttribute("class", "recipe-div");
    const image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class", "recipe-images");
    const title = document.createElement("h2");
    title.textContent = el.title;
    const description = document.createElement("p");
    description.textContent = el.description;
    const category = document.createElement("h2");
    category.textContent = el.category;
    const ingredients = document.createElement("p");
    ingredients.textContent = el.ingredients;
    const instructions = document.createElement("p");
    instructions.textContent = el.instructions;
    const username = document.createElement("p");
    username.textContent = el.username;
    const button = document.createElement("button");
    button.textContent = "View Recipe";
    button.addEventListener("click", () => {
      viewRecipe(
        title.textContent,
        image.src,
        description.textContent,
        category.textContent,
        ingredients.textContent,
        instructions.textContent,
        username.textContent
      );
    });
    div.append(image, title, description, category, button);
    container.append(div);
  });
};

const viewRecipe = (
  title,
  image,
  description,
  category,
  ingredients,
  instructions,
  username
) => {
  let obj = {
    title: title,
    image: image,
    description: description,
    category: category,
    ingredients: ingredients,
    instructions: instructions,
    username: username,
  };

  localStorage.setItem("recipe", JSON.stringify(obj));
  window.location.href = "singlerecipe.html";
};

nextbtn.addEventListener("click", () => {
  page++;
  pagenum.textContent = page;
  getData(page);
});
prevbtn.addEventListener("click", () => {
  if (page > 0) {
    page--;
    pagenum.textContent = page;
    getData(page);
  }
});
