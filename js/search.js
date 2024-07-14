var listOfItems = [];
function displaySearch() {
  var cartona = "";
  cartona += `<div class="container">
  
     <form>
      <div class="form-row search-bar">
        <input type="text" class="form-control" id="searchByName"  placeholder="Search By Name">
        <input type="text" class="form-control" id="searchByFirstLetter" maxLength="1" placeholder="Search By First Letter">
      </div>
    </form>
    <div id="results" class="row"></div>
   </div>`;

  document.getElementById("rowData").innerHTML = cartona;

  document
    .getElementById("searchByName")
    .addEventListener("input", handleInputChange);
  document
    .getElementById("searchByFirstLetter")
    .addEventListener("input", handleInputChange);
}

function handleInputChange(event) {
  const inputType = event.target.id;
  const inputValue = event.target.value;

  if (inputType === "searchByName" && inputValue.length > 0) {
    sendApiRequest(inputValue, "name");
  } else if (inputType === "searchByFirstLetter" && inputValue.length > 0) {
    sendApiRequest(inputValue, "fLetter");
  }
}

async function getApiData(apiUrl) {
  try {
    var res = await fetch(apiUrl);
    var data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
    document.getElementById(
      "results"
    ).innerHTML = `<div class="vh-100 d-flex justify-content-center align-items-center "><h2 class="alert alert-danger"> err404</h2></div>`;
  }
}

function sendApiRequest(query, type) {
  let apiUrl;

  if (type === "name") {
    apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  } else {
    apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`;
  }
  getApiData(apiUrl).then((res) => {
    listOfItems = res.meals;
    displaymealsInf();
  });
}

function displaymealsInf() {
  var cartona = "";
  for (i = 0; i < listOfItems.length; i++) {
    cartona += `<div class="col-md-4 mt-5">
    <div class="card main-card" id=${listOfItems[i].idMeal}> 
        <img src=${listOfItems[i].strMealThumb} class="card-img my-img">
        <h5>${listOfItems[i].strMeal}</h5>
    </div>
    </div>`;
  }
  document.getElementById("results").innerHTML = cartona;
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
          mContainer += `<div class="strMeasuree fw-normal">
               ${measures[i] + " " + ingredients[i]} 
                </div>`;
        }

        let cartona = `<div class="component d-flex justify-content-center">
                <div class="innerItemImg">
                <img src=${innerData.strMealThumb} class="img-innerItem">
                <h2 class="text-light mt-5">${innerData.strMeal}</h2>
            </div>
  
          <div class="innerItemContent ms-3">
           <h2 class="mt-5 text-light fw-bold ms-4">Instructions</h2>
           <p class="ms-4 text-light">${innerData.strInstructions}</p>
           <h1 class="text-light fw-bold ms-4">Area: ${innerData.strArea}</h1>
           <h1 class="text-light fw-bold ms-4">Category: ${innerData.strCategory}</h1>
           <h1 class="text-light fw-bold ms-4">Recipes:</h1>
           <div class="Recipes ms-4">
           ${mContainer}
            </div>
  
            <div class="tags d-flex">
           <h2 class="text-light fw-bold ms-4 mt-4">Tags:</h2>
            <span class="source">
            <a href="https://www.bbcgoodfoodme.com/" class="text-decoration-none" id="btn1"> 
            <div class="bg-success text-light rounded text-center align-items-center pt-2">source</div>
            </a>
            </span>
            <span class="youTube">
            <a href=${innerData.strYoutube} class="text-decoration-none" id="btn2"> 
            <div class="bg-danger text-light rounded text-center align-items-center pt-2">youTube</div>
            </a>
            </span>
  </div>
            </div>`;
        document.getElementById("results").innerHTML += cartona;
      });
    });
  });
}

displaySearch();

// <form>
//         <div class="form-group">
//             <input type="text" placeholder="Enter Your Name">
//             <input type="email" placeholder="Enter Your Email">
//         </div>
//         <div class="form-group">
//             <input type="tel" placeholder="Enter Your Phone">
//             <input type="number" placeholder="Enter Your Age">
//         </div>
//         <div class="form-group">
//             <input type="password" placeholder="Enter Your Password">
//             <input type="password" placeholder="Repassword">
//         </div>
//         <button type="submit">Submit</button>
//     </form>
