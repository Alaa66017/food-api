var lAreas = [];
var innerArea = [];
async function getApiInfo(apiUrl) {
  try {
    var result = await fetch(apiUrl);
    var info = await result.json();
    //console.log( strCategory,data.recipes);
    return info;
  } catch (err) {
    console.log("error");
    document.getElementById(
      "rowData"
    ).innerHTML = `<div class="vh-100 d-flex justify-content-center align-items-center "><h2 class="alert alert-danger"> err404</h2></div>`;
  }
}

getApiInfo("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then(
  (info) => {
    lAreas = info.meals;

    displaymealsInfo();
  }
);

function displaymealsInfo() {
  var cartona = "";
  for (i = 0; i < lAreas.length; i++) {
    cartona += `<div class="col-md-4">
        <div class="ico Area-info" id=${lAreas[i].strArea}  >
            <i class="fa-solid fa-house-laptop text-light my-ico"></i> 
            <h3 class="text-light">${lAreas[i].strArea
              .split(" ")
              .slice(0, 1)
              .join(" ")}</h3>
        </div>
    </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
  addClickEventToMealsCards();
}

function displayinnerAreaInfo() {
  var cartona = "";
  for (i = 0; i < innerArea.length; i++) {
    cartona += `<div class="col-md-4">
  <div class="inner-info card "  id= ${innerArea[i].idMeal}>
      <img src=${innerArea[i].strMealThumb} class=" my-img" >
      <h3>${innerArea[i].strMeal}</h3>
  </div>
  </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
  addClickEventToInnerArea();
}

function addClickEventToMealsCards() {
  const mealCards = document.querySelectorAll(".Area-info");
  mealCards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("heeeeeeee");
      getApiInfo(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${card.id}`
      ).then((info) => {
        innerArea = info.meals;
        displayinnerAreaInfo();
      });
    });
  });
}

function addClickEventToInnerArea() {
  let innerAreas = document.querySelectorAll(".inner-info");

  console.log("gdgd");
  console.log(innerAreas);
  innerAreas.forEach((area) => {
    area.addEventListener("click", () => {
      getApiInfo(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772 `
      ).then((info) => {
        // console.log(info.meals[0])
        let innerInfo = info.meals[0];
        const measures = [];
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
          const measureKey = `strMeasure${i}`;
          const ingredientKey = `strIngredient${i}`;

          if (
            innerInfo[measureKey] &&
            innerInfo[measureKey] != "" &&
            innerInfo[measureKey] != " "
          ) {
            measures.push(innerInfo[measureKey]);
          }

          if (
            innerInfo[ingredientKey] &&
            innerInfo[ingredientKey] != "" &&
            innerInfo[ingredientKey] != " "
          ) {
            ingredients.push(innerInfo[ingredientKey]);
          }
        }
        console.log(measures);
        console.log(ingredients);
        let mContainer = "";
        for (i = 0; i < measures.length; i++) {
          mContainer += `<div class=" strMeasuree   fw-normal " >
 ${measures[i] + " " + ingredients[i]} 


 
</div>`;
        }

        let cartona = `<div class="component d-flex justify-content-center">
          <div class="innerItemImg">
          <img src=${innerInfo.strMealThumb} class="img-innerArea " >
          <h2 class="text-light" mt-5>${innerInfo.strMeal} </h2>
      </div>

    <div class=innerItemContent ms-3>
     <h2  class ="mt-5 text-light fw-bold ms-4" >Instructions </h2>
     <p class="ms-4  text-light"> ${innerInfo.strInstructions} </p>
     <h1 class="text-light fw-bold ms-4">Area : ${innerInfo.strArea} <h1>
     <h1 class="text-light fw-bold ms-4">Category : ${innerInfo.strCategory} <h1>
     <h1 class="text-light fw-bold ms-4">Recipes : </h1>
     <div class="Recipes ms-4  ">
     ${mContainer}
         
      </div>

      <div class="tags d-flex ">
     <h2 class=" text-light fw-bold ms-4 mt-4" >Tags : </h2>
      <span class="source">
      
      <a href="https://www.bbcgoodfoodme.com/ " class="text-decoration-none" id="btn1  "> 
      
      <div class="bg-success text-light rounded text-center align-items-center pt-2">source</div>
      
      </a>
      
      
      </span>
      
      
     

      <span class="youTube ">
      
      <a href=${innerInfo.strYoutube} class="text-decoration-none" id="btn2  "> 
      
      <div class="bg-danger text-light rounded text-center align-items-center pt-2">youTube</div>
      
      </a>
      
      
      </span>
      
      
     

</div>
       

      </div>
      `;

        document.getElementById("rowData").innerHTML = cartona;
      });
    });
  });
}
