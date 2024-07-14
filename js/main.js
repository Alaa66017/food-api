var lmain = [];
var innerMain = [];
async function getApiInf(apiUrl) {
  try {
    var res = await fetch(apiUrl);
    var data = await res.json();
    //console.log( strCategory,data.recipes);
    return data;
  } catch (err) {
    console.log("error");
    document.getElementById(
      "rowData"
    ).innerHTML = `<div class="vh-100 d-flex justify-content-center align-items-center "><h2 class="alert alert-danger"> err404</h2></div>`;
  }
}

getApiInf("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood").then(
  (res) => {
    lmain = res.meals;

    displaymealsInf();
  }
);

function displaymealsInf() {
  var cartona = "";
  for (i = 0; i < lmain.length; i++) {
    cartona += `<div class="col-md-4">
  <div class="card main-card "  id= ${lmain[i].idMeal}> 
      <img src=${lmain[i].strMealThumb} class="  card-img my-img" >
      <h5>${lmain[i].strMeal}</h5>
  </div>
  </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
  addClickEventToInnerMain();
}
function addClickEventToInnerMain() {
  let innerItems = document.querySelectorAll(".main-card");
  innerItems.forEach((item) => {
    item.addEventListener("click", () => {
      getApiInf(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.id} `
      ).then((data) => {
        let innerData = data.meals[0];
        const measures = [];
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
          const measureKey = `strMeasure${i}`;
          const ingredientKey = `strIngredient${i}`;

          if (
            innerData[measureKey] &&
            innerData[measureKey] != "" &&
            innerData[measureKey] != " "
          ) {
            measures.push(innerData[measureKey]);
          }

          if (
            innerData[ingredientKey] &&
            innerData[ingredientKey] != "" &&
            innerData[ingredientKey] != " "
          ) {
            ingredients.push(innerData[ingredientKey]);
          }
        }

        let mContainer = "";
        for (i = 0; i < measures.length; i++) {
          mContainer += `<div class=" strMeasuree   fw-normal " >
             ${measures[i] + " " + ingredients[i]} 
              </div>`;
        }

        let cartona = `<div class="component d-flex justify-content-center">
              <div class="innerItemImg">
              <img src=${innerData.strMealThumb} class="img-innerItem " >
              <h2 class="text-light" mt-5>${innerData.strMeal} </h2>
          </div>

        <div class=innerItemContent ms-3>
         <h2  class ="mt-5 text-light fw-bold ms-4" >Instructions </h2>
         <p class="ms-4  text-light"> ${innerData.strInstructions} </p>
         <h1 class="text-light fw-bold ms-4">Area : ${innerData.strArea} <h1>
         <h1 class="text-light fw-bold ms-4">Category : ${innerData.strCategory} <h1>
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
          
          <a href=${innerData.strYoutube} class="text-decoration-none" id="btn2  "> 
          
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

/*
function addClickEventToInnerMain() {
  let mainMeal = document.querySelectorAll(".main-card");

  mainMeal.forEach((card) => {
    card.addEventListener("click", () => {
      getApiInf(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${card.id} `
      ).then((inf) => {
        innerMain = inf.meals;
        displaymealsInf();
      });
    });
  });
}

//  let innerMain=inf.meals[0]
const measures = [];
const ingredients = [];

for (let i = 1; i <= 20; i++) {
  const measureKey = `strMeasure${i}`;
  const ingredientKey = `strIngredient${i}`;

  if (
    innerMain[measureKey] &&
    innerMain[measureKey] != "" &&
    innerMain[measureKey] != " "
  ) {
    measures.push(innerMain[measureKey]);
  }

  if (
    innerMain[ingredientKey] &&
    innerMain[ingredientKey] != "" &&
    innerMain[ingredientKey] != " "
  ) {
    ingredients.push(innerMain[ingredientKey]);
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
          <img src=${innerMain.strMealThumb} class="img-innerArea " >
          <h2 class="text-light" mt-5>${innerMain.strMeal} </h2>
      </div>

    <div class=innerItemContent ms-3>
     <h2  class ="mt-5 text-light fw-bold ms-4" >Instructions </h2>
     <p class="ms-4  text-light"> ${innerMain.strInstructions} </p>
     <h1 class="text-light fw-bold ms-4">Area : ${innerMain.strMeal} <h1>
     <h1 class="text-light fw-bold ms-4">Category : ${innerMain.strMeal} <h1>
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
      
      <a href=${innerMain.strYoutube} class="text-decoration-none" id="btn2  "> 
      
      <div class="bg-danger text-light rounded text-center align-items-center pt-2">youTube</div>
      
      </a>
      
      
      </span>
      
      
     

</div>
       

      </div>
      `;

document.getElementById("rowData").innerHTML = cartona;
*/
