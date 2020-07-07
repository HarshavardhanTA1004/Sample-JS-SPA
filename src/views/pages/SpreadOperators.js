var checkGetDestructedMealsHaveData = [];
var searchedMeal;
var searchedMeal1;
var searchedMeal2;
var spreadoperator;
var objectassign;
var spreadExplaination;
var assignExplaination;
var totalmeals;

var spreadComparisonObject = {
    idMeal: "52858",
    strArea: "Indian(Changed using spread operator)",
    strCategory: "Egg Cake(Changed using spread operator)",
    strDrinkAlternate: null,
    strIngredient1: "Butter",
    strIngredient2: "Sour Cream",
    strIngredient3: "Sugar",
    strIngredient4: "Cream Cheese",
    strIngredient5: "Caster Sugar",
    strIngredient6: "Plain Flour",
    strIngredient7: "Lemon Juice",
    strInstructions: "Merged Object using the spread operator and also it takes the latest value",
    strMeal: "New India cake(using Spread operator)" 
    }
var  assignComparisonObject = {
    idMeal: "52858",
    strArea: "Karnataka(Changed using assign method)",
    strCategory: "Plain Cake(Changed using assign method)",
    strDrinkAlternate: null,
    strIngredient1: "Butter",
    strIngredient2: "Sour Cream",
    strIngredient3: "Sugar",
    strIngredient4: "Cream Cheese",
    strIngredient5: "Caster Sugar",
    strIngredient6: "Plain Flour",
    strIngredient7: "Lemon Juice",
    strInstructions: "Merged Object using the object.assign() method and also it takes the latest value",
    strMeal: "New Karnataka cake(using Object.assign() method)" 
    }
let getMeals = async (e) => {
  e.preventDefault();

  const term = "new";
  try {
    if (term.trim()) {
      //The trim() method removes whitespace from both sides of a string.
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Searched Result", data.meals);
          assignExplaination.innerHTML = ``;
          spreadExplaination.innerHTML = ``;
          
          totalmeals.innerHTML = `<h2>Please observe the Title , Country name, Instructures. Try to relate the things later</h2>`
         
          checkGetDestructedMealsHaveData = data.meals[0];
         let meal = checkGetDestructedMealsHaveData;
          console.log("Arrays", checkGetDestructedMealsHaveData);
          searchedMeal.innerHTML = `<div class="single-meal">
          <h1>${meal.strMeal}</h1>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <div class="single-meal-info">
            ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}  
            ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
          </div>
      
      
          <div class="main">
            <p>${meal.strInstructions}</p>
            </div>
        </div>
      `;
            
        });
    }
  } catch (err) {
    console.log("Error getting documents", err);
  }
};

let spreadMerge = async (e) => {
    e.preventDefault();
if(checkGetDestructedMealsHaveData.length === 0){
    spreadExplaination.innerHTML = `<h2>Please Click on 'Get Sample Record' button to make use of the example</h2>`
    assignExplaination.innerHTML = ``;
}else{
    let meal = checkGetDestructedMealsHaveData;
    let MergeObjects = {
        ...meal,
        ...spreadComparisonObject
    }
    console.log(MergeObjects);
    // console.log("othermeals",othermeals)
    searchedMeal1.innerHTML =  `<div class="single-meal">
    <h1>${MergeObjects.strMeal}</h1>
    <img src="${MergeObjects.strMealThumb}" alt="${MergeObjects.strMeal}" />
    <div class="single-meal-info">
      ${MergeObjects.strCategory ? `<p>${MergeObjects.strCategory}</p>` : ''}  
      ${MergeObjects.strArea ? `<p>${MergeObjects.strArea}</p>` : ''}
    </div> 
    <div class="main">
            <p>${MergeObjects.strInstructions}</p>            
          </div>
        </div>
      `;  
 
      assignExplaination.innerHTML = ``;
      spreadExplaination.innerHTML = `<h2>Merge object using Spread operator(...).</h2><p>If objects have a property with the same name, then the right-most object property overwrites the previous one</p>`;
      totalmeals.innerHTML = ``;
}   
};

let assignMerge = async (e) => {
    e.preventDefault();
    if(checkGetDestructedMealsHaveData.length === 0){
        assignExplaination.innerHTML = `<h2>Please Click on 'Get Sample Record' button to make use of the example</h2>`
        spreadExplaination.innerHTML = ``;

    }else{

        let meal = checkGetDestructedMealsHaveData; 
        console.log(meal);
        let MergeObjectsassign = Object.assign(meal, assignComparisonObject);
        console.log(MergeObjectsassign);
        // console.log("othermeals",othermeals)
        searchedMeal2.innerHTML =  `<div class="single-meal">
        <h1>${MergeObjectsassign.strMeal}</h1>
        <img src="${MergeObjectsassign.strMealThumb}" alt="${MergeObjectsassign.strMeal}" />
        <div class="single-meal-info">
          ${MergeObjectsassign.strCategory ? `<p>${MergeObjectsassign.strCategory}</p>` : ''}  
          ${MergeObjectsassign.strArea ? `<p>${MergeObjectsassign.strArea}</p>` : ''}
        </div> 
        <div class="main">
                <p>${MergeObjectsassign.strInstructions}</p>          
                
              </div>
            </div>
          `;  
       
    
          assignExplaination.innerHTML = `<h2>Merge object using Object.assign() method.</h2><p>Displays second meal from the Destructured Array.</p>`;
          spreadExplaination.innerHTML = ``;
          totalmeals.innerHTML = ``;
    }
   
};


let SpreadOperators = {
  render: async () => {
    let view = /*html*/ `
            <div class="searchpage">
      <h1>Examples for Merging Objects </h1><br><br><br>
      <h3>To merge objects into a new one that has all properties of the merged objects, you have two options<br>Use a spread operator ( ...)<br>Use the Object.assign() method</h3>
           <br> <div class="flex">     
        <form class="flex" >
          
          <button id="submit" class="search-btn" type="submit">
           Get Sample Record
          </button>

          <button id="spreadoperator" class="sort-btn" type="submit">
           Merge object using Spread operator(...).
          </button>

          <button id="objectassign" class="sort-btn" type="submit">
          Merge object using Object.assign() method.
          </button>
                    
        </form>
        
             
      </div>
      <div id="result-headingnew" class="explain"></div>
      <div id="result-headingnew1" class="explain"></div>
        <div id="result-headingnew2" class="explain"></div>
       
        <div id="sortmeals" class="meals"></div>
     
      <div id="single-meal"></div>
      
      
      
        `;

    return view;
  },
  after_render: async () => {
    //The getElementById() method returns
    const submit = document.getElementById("submit");
    submit.addEventListener("click", getMeals);
    spreadoperator = document.getElementById("spreadoperator");
    objectassign = document.getElementById("objectassign");    
    spreadoperator.addEventListener("click", spreadMerge);
    objectassign.addEventListener("click", assignMerge);
    searchedMeal = document.getElementById("single-meal");
    searchedMeal1 = document.getElementById("single-meal");
    searchedMeal2 = document.getElementById("single-meal");    
    totalmeals = document.getElementById("result-headingnew");
    spreadExplaination = document.getElementById("result-headingnew1");
    assignExplaination = document.getElementById("result-headingnew2");
   
  },
};

export default SpreadOperators;
