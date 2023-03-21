const singlerecipe = JSON.parse(localStorage.getItem("recipe"));
console.log(singlerecipe);
const container = document.querySelector(".single-recipe");
const div = document.createElement("div");
div.setAttribute("class", "recipe-div");
const image = document.createElement("img");
image.src = singlerecipe.image;
image.setAttribute("class", "single-recipe-images");
const title = document.createElement("h2");
title.textContent = singlerecipe.title;
const description = document.createElement("p");
description.textContent = singlerecipe.description;
const category = document.createElement("h2");
category.textContent = singlerecipe.category;
const ingredients = document.createElement("p");
ingredients.textContent = singlerecipe.ingredients;
const instructions = document.createElement("p");
instructions.textContent = singlerecipe.instructions;
const username = document.createElement("p");
username.textContent = singlerecipe.username;
div.append(
  image,
  title,
  description,
  category,
  ingredients,
  instructions,
  username
);
container.appendChild(div);
