let id = (id) => document.getElementById(id);
let submitBtn = document.querySelector(".submitBtn");
let username = id("username"),
  title = id("title"),
  image = id("image"),
  description = id("description"),
  category = id("category"),
  ingredients = id("ingredients"),
  instructions = id("instructions");
submitBtn.addEventListener("click", (e) => {
  submitData(e);
});

const submitData = (e) => {
  e.preventDefault();
  fetch("https://json-server-6ewh.onrender.com/recipes", {
    method: "POST",
    body: JSON.stringify({
      title: title.value,
      image: image.value,
      description: description.value,
      category: category.value,
      ingredients: ingredients.value,
      instructions: instructions.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
