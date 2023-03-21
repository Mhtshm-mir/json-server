const getData = () => {
  fetch("https://json-server-6ewh.onrender.com/recipes")
    .then((res) => res.json())
    .then((data) => {
      appendData(data);
    });
};
getData();

const appendData = (data) => {
  console.log(data);
  data.map((el) => {
    const container = document.querySelector(".recipe-container");
    const div = document.createElement("div");
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
        image.textContent,
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
