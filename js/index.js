/*

var lCatigories=[]
var innerCatigory=[]
async function getApiData(apiUrl){


    try{
    var res= await fetch(apiUrl);
    var data =await res.json();
    //console.log( strCategory,data.recipes);
    return data
    
}
catch(err){
   console.log("error");
    document.getElementById("rowData").innerHTML=`<div class="vh-100 d-flex justify-content-center align-items-center "><h2 class="alert alert-danger"> err404</h2></div>`
}

}


  getApiData("https://www.themealdb.com/api/json/v1/1/categories.php").then(data =>{
  lCatigories=data.categories;
  displayCategoriesData()
  });

    

     function displayCategoriesData() {
        var cartona = "";
        for (i = 0; i < lCatigories.length; i++) {
            cartona += `<div class="col-md-4">
            <div class="card category-card" id=${lCatigories[i].strCategory}  >
                <img src=${lCatigories[i].strCategoryThumb} class="card-img my-img" >
                <h3>${lCatigories[i].strCategory.split(" ").slice(0, 1).join(" ")}</h3>
            </div>
        </div>`;
        }
        document.getElementById("rowData").innerHTML = cartona;
       addClickEventToCategoriesCards();
      }
      
      function displayinnerCatigoryData() {
        var cartona = "";
        for (i = 0; i < innerCatigory.length; i++) {
          cartona += `<div class="col-md-4">
      <div class="card inner-card" id= ${innerCatigory[i].idMeal}>
          <img src=${innerCatigory[i].strMealThumb} class="card-img my-img" >
          <h3>${innerCatigory[i].strMeal}</h3>
      </div>
      </div>`;
        }
        document.getElementById("rowData").innerHTML = cartona;
        addClickEventToInnerItem() 

        
      }



      function addClickEventToCategoriesCards() {
        const categoryCards = document.querySelectorAll(".category-card");
        categoryCards.forEach((card) => {
          card.addEventListener("click", () => {
            getApiData(
              `https://www.themealdb.com/api/json/v1/1/filter.php?c=${card.id}`
            ).then((data) => {
              innerCatigory = data.meals;
              displayinnerCatigoryData();
            });
          });
        });
      }


      function addClickEventToInnerItem() {
        let innerItems = document.querySelectorAll(".inner-card");
        innerItems.forEach((item) => {
          item.addEventListener("click", () => {
            getApiData(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.id} `
            ).then((data) => {
          // console.log(data.meals[0])
           let innerData=data.meals[0]
           const measures = [];
           const ingredients = [];
           
           for (let i = 1; i <= 20; i++) {
           
             const measureKey = `strMeasure${i}`;
             const ingredientKey = `strIngredient${i}`;
             
             if (innerData[measureKey] && innerData[measureKey]!="" && innerData[measureKey]!=" "){ measures.push(innerData[measureKey]);
             }
             
             if (innerData[ingredientKey] && innerData[ingredientKey]!=""  && innerData[ingredientKey]!=" " ) {
               ingredients.push(innerData[ingredientKey]);
             }
           }
           console.log(measures)
           console.log(ingredients)
          let mContainer=''
     for(i=0;i<measures.length;i++){
     mContainer+=`<div class=" strMeasuree   fw-normal " >
     ${measures[i]+ " "  + ingredients[i] } 


     
</div>`
}


              let cartona=`<div class="component d-flex justify-content-center">
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
          
          <a href=${innerData.strYoutube } class="text-decoration-none" id="btn2  "> 
          
          <div class="bg-danger text-light rounded text-center align-items-center pt-2">youTube</div>
          
          </a>
          
          
          </span>
          
          
         

</div>
           

          </div>
          `

                document.getElementById("rowData").innerHTML = cartona;

            });
          });
        });
      }

*/








































      /*

      <div class="strMeasure1   fw-normal " >
       ${innerData.strMeasure1} 
       </div>
       <div class="strMeasure2   fw-normal" >
       ${innerData.strMeasure2}  
       </div>
       <div class="strMeasure3  fw-normal" >
       ${innerData.strMeasure3}  
       </div>
       <div class="strMeasure4  fw-normal" >
       ${innerData.strMeasure4}  
       </div>
       <div class="strMeasure5  fw-normal" >
       ${innerData.strMeasure5}  
       </div>
       <div class="strMeasure6  fw-normal" >
       ${innerData.strstrMeasure6}  
       </div>
     /*








     

//var data=  getApiData("https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert");
//console.log(data)
    //displayData()


























/*
function displayData(){
    var cartona=""
    for(  i=0 ; i<lCatigories.length  ; i++ ){
cartona+=`<div class="col-md-4">
<div class="card" id=${lCatigories[i].strCategory}>
    <img src=${lCatigories[i].strCategoryThumb} class="card-img my-img" >
    <h3>${lCatigories[i].strCategory.split(" ").slice(0,1).join(" ")}</h3>
</div>
</div>`

    }




    document.getElementById('rowData').innerHTML=cartona
}

*/




















/*
async function getpasta(){
    var res= await fetch('https://forkify-api.herokuapp.com/api/search?q=pasta')
    var data =await res.json()
    console.log( "pasta",data.recipes);
}
/*
async function getBeef(){
    var res= await fetch('https://forkify-api.herokuapp.com/api/search?q=Beef')
    var data =await res.json()
    console.log( "Beef",data.recipes);
}
 async function arrange(){
    await getBeef()
    await getPizza()
    await getpasta()
 }
 arrange()*/