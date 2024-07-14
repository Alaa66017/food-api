var lIngreds = [];
var innerIngred = [];
async function getApiKnowledge(apiUrl) {
  try {
    var outcome = await fetch(apiUrl);
    var knowledge = await outcome.json();
    //console.log( strCategory,data.recipes);
    return knowledge;
  } catch (err) {
    console.log("error");
    document.getElementById(
      "rowData"
    ).innerHTML = `<div class="vh-100 d-flex justify-content-center align-items-center "><h2 class="alert alert-danger"> err404</h2></div>`;
  }
}

getApiKnowledge("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then(
  (knowledge) => {
    lIngreds = knowledge.meals;
    //console.log(lIngreds)
    displaymealsKnowledge();
    // console.log(lIngreds)
  }
);

function displaymealsKnowledge() {
  var cartona = "";
  for (i = 0; i < lIngreds.length; i++) {
    cartona += `<div class="col-md-4">
        <div class="icon Ingred-knowledge" id=${lIngreds[i].strIngredient}  >
            <i class="fa-solid fa-drumstick-bite text-light my-icon "></i> 
            <h3 class="text-light">${lIngreds[i].strIngredient
              .split(" ")
              .slice(0, 1)
              .join(" ")}</h3>
           
        </div>
    </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
  //console.log(lIngreds)

  addClickEventToIngredsCards();
}

function displayinnerIngredInfo() {
  var cartona = "";
  for (i = 0; i < innerIngred.length; i++) {
    cartona += `<div class="col-md-4">
  <div class="inner-ingred card "  id= ${innerIngred[i].idIngredient}>
      <img src=${innerIngred[i].strMealThumb} class=" my-img" >
      <h3>${innerIngred[i].strIngredient}</h3>
  </div>
  </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
  addClickEventToInnerIngred();
}

function addClickEventToIngredsCards() {
  const ingredCards = document.querySelectorAll(".Ingred-knowledge");
  ingredCards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("heeeeeeee");
      getApiKnowledge(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${card.id}`
      ).then((knowledge) => {
        innerIngred = knowledge.meals;
        displayinnerIngredInfo();
      });
    });
  });
}

function addClickEventToInnerIngred() {
  let innerIngred = document.querySelectorAll(".inner-ingred");

  console.log("gdgd");
  console.log(innerIngred);
  innerIngred.forEach((ingred) => {
    ingred.addEventListener("click", () => {
      getApiKnowledge(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772 `
      ).then((knowledge) => {
        // console.log(info.meals[0])
        let innerIngred = knowledge.meals[0];
        const measures = [];
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
          const measureKey = `strMeasure${i}`;
          const ingredientKey = `strIngredient${i}`;

          if (
            innerIngred[measureKey] &&
            innerIngred[measureKey] != "" &&
            innerIngred[measureKey] != " "
          ) {
            measures.push(innerIngred[measureKey]);
          }

          if (
            innerIngred[ingredientKey] &&
            innerIngred[ingredientKey] != "" &&
            innerIngred[ingredientKey] != " "
          ) {
            ingredients.push(innerIngred[ingredientKey]);
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
          <img src=${innerIngred.strMealThumb} class="img-innerArea " >
          <h2 class="text-light" mt-5>${innerIngred.strIngredient} </h2>
      </div>

    <div class=innerItemContent ms-3>
     <h2  class ="mt-5 text-light fw-bold ms-4" >Instructions </h2>
     <p class="ms-4  text-light"> ${innerIngred.strInstructions} </p>
     <h1 class="text-light fw-bold ms-4">Area : ${innerIngred.strArea} <h1>
     <h1 class="text-light fw-bold ms-4">Category : ${innerIngred.strCategory} <h1>
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
      
      <a href=${innerIngred.strYoutube} class="text-decoration-none" id="btn2  "> 
      
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
