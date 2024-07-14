function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const categoriesBtn = document.getElementById("category-link-id");
const areasBtn = document.getElementById("area-link-id");
const ingredientsesBtn = document.getElementById("Ingredients-link-id");
const searchBtn = document.getElementById("search-link-id");
const contactBtn = document.getElementById("contact-link-id");

categoriesBtn.addEventListener("click", () => {
  const script = document.createElement("script");
  script.src = "js/categories.js";
  document.head.appendChild(script);
  closeNav();
});
areasBtn.addEventListener("click", () => {
  const script = document.createElement("script");
  script.src = "js/area.js";
  document.head.appendChild(script);
  closeNav();
});

ingredientsesBtn.addEventListener("click", () => {
  const script = document.createElement("script");
  script.src = "js/ingrediants.js";
  document.head.appendChild(script);
  closeNav();
});

searchBtn.addEventListener("click", () => {
  const script = document.createElement("script");
  script.src = "js/search.js";
  document.head.appendChild(script);
  closeNav();
});

contactBtn.addEventListener("click", () => {
  const script = document.createElement("script");
  script.src = "js/contact.js";
  document.head.appendChild(script);
  closeNav();
});
