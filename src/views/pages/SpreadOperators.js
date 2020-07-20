// ES6 provides a new operator called spread operator that consists of three dots (...). The spread operator allows you to
//  spread out elements of an iterable object such as an array,a  map, or a set.
// So the three dots ( ...) represent both the spread operator and the rest parameter.

// Here are the main differences:

// The spread operator unpacks elements.
// The rest parametr packs elements into an array.
var mealsInfo = [];
var record = "Home";
var searchedMeal;
var spreadoperator;
var objectassign;
var warning;
var successful
var allMeals;

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
          mealsInfo = data.meals[0];
         let meal = mealsInfo;
          console.log("Arrays", mealsInfo);
          getInnerHtmlElement(meal);
          showExplanation(mealsInfo,record);            
        });
    }
  } catch (err) {
    console.log("Error getting documents", err);
  }
};

const getInnerHtmlElement = (meal) => {
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
}

const showExplanation = (value,record) => {
    if(value.length === 0){  
        warning.innerHTML = `<h2>Please Click on 'Get Sample Record' button to make use of the example</h2>`;
        successful.innerHTML = ``; 
  }else{    
    if(record === "Home") {
        warning.innerHTML = ``;
        successful.innerHTML = ``;        
        allMeals.innerHTML = `<h2>Please observe the Title , Country name, Instructures. Try to relate the things later</h2>`;
    }else{
        warning.innerHTML = ``;
        successful.innerHTML = `<h2>Merge object using ${record}</h2>`;        
        allMeals.innerHTML = ``;
    }
  }
}
// THis is the example for merging objects using spread operator
let getSpreadMerge = (e) => {
    e.preventDefault();
if(mealsInfo.length === 0){
    showExplanation(mealsInfo);
}else{
    let meal = mealsInfo;
    let mergeObjects = {
        ...meal,
        ...spreadComparisonObject
    }
    console.log(mergeObjects);
    getInnerHtmlElement(mergeObjects);    
    let record = "Spread operator(...)";
    showExplanation(mealsInfo,record);
}   
};
// THis is the example for merging objects using object.assign
let getAssignMerge = (e) => {
    e.preventDefault();
    if(mealsInfo.length === 0){
        showExplanation(mealsInfo);
    }else{
        let meal = mealsInfo; 
        console.log(meal);
        let mergeObjectsassign = Object.assign(meal, assignComparisonObject);
        console.log(mergeObjectsassign);
        getInnerHtmlElement(mergeObjectsassign)
        let record = "Object.assign() method";
        showExplanation(mealsInfo,record);
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
    spreadoperator.addEventListener("click", getSpreadMerge);
    objectassign.addEventListener("click", getAssignMerge);
    searchedMeal = document.getElementById("single-meal");     
    allMeals = document.getElementById("result-headingnew");
    warning = document.getElementById("result-headingnew1");
    successful = document.getElementById("result-headingnew2");
   
  },
};

export default SpreadOperators;
