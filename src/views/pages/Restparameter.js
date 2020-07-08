var storeFetchedMeals = [];
var record = "Home";
var searchedMeal;
var mealFirst;
var mealSecond;
var mealThird;
var warningExplanation;
var exampleExplanation;
var showMeals;
// This function is used to break down the repitation of code and can be used wherever it is needed.
const getInnerHtmlDetails = (meals) => {
    return meals
      .map(
        //The map() method calls the provided function once for each element in an array, in order.
        (meal) => `
              <div class="meal">      
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class="meal-info" data-mealID="${meal.idMeal}">
                  <h3>${meal.strMeal}</h3>
                </div>
              </div>
            `
      )
      .join(""); //The join() method returns the array as a string. By default it will return comma(,)
  };
  
  const showExplanation = (value, record) => {
    if (value.length === 0) {
      warningExplanation.innerHTML = `<h2>No Data To search.. Please Click on "Get Meals" button</h2>`;
      exampleExplanation.innerHTML = ``;
    } else {
      if (record === "Home") {
        warningExplanation.innerHTML = ``;
        exampleExplanation.innerHTML = ``;
        showMeals.innerHTML = `<h2>Displays all the meals in the Array</h2>`;
      } else {
        warningExplanation.innerHTML = ``;
        exampleExplanation.innerHTML = `<h2>${record}</h2>`;
        showMeals.innerHTML = ``;
      }
    }
  };
  

let getMeals = async (e) => {
  e.preventDefault();

  const term = "cheese";
  try {
    if (term.trim()) {
      //The trim() method removes whitespace from both sides of a string.
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => {         
          storeFetchedMeals = data.meals;        
          console.log("Arrays", storeFetchedMeals);
          searchedMeal.innerHTML = getInnerHtmlDetails(data.meals);
          showExplanation(storeFetchedMeals,record);
        });
    }
  } catch (err) {
    console.log("Error getting documents", err);
  }
};

let getFirstMeal = (e) => {
    e.preventDefault();
   if(storeFetchedMeals.length === 0){
    showExplanation(storeFetchedMeals);
    showMeals.innerHTML = ``;
   }else{
    let [meal1,,] = storeFetchedMeals; 
    let meals = [meal1];
    let record = "<h2>First meal example</h2><p>Displays first meal from the Destructured Array.</p>"
    searchedMeal.innerHTML =  getInnerHtmlDetails(meals);
    showExplanation(storeFetchedMeals,record);
   }    
};

let getSecondMeal = (e) => {
    e.preventDefault();

    if(storeFetchedMeals.length === 0){
        showExplanation(storeFetchedMeals);
    }else{
        let [,meal2,...othermeals] = storeFetchedMeals; 
        let meals = [meal2];
let record = "<h2>Second meal example</h2><p>Displays second from the meals in the Array.</p>";
        searchedMeal.innerHTML =  getInnerHtmlDetails(meals);
        showExplanation(storeFetchedMeals,record);         
    }    
};

let getThirdMeal = (e) => {
    e.preventDefault();

    if(storeFetchedMeals.length === 0){
        showExplanation(storeFetchedMeals);
    }else{
        let [meal1,,...othermeals] = storeFetchedMeals;  
        let record = "<h2>Third meal example</h2><p>Displays Rest meals from the meals in the Array.</p>";      
        searchedMeal.innerHTML =  getInnerHtmlDetails(othermeals);
        showExplanation(storeFetchedMeals,record);      
    }    
};

let RestParameter = {
  render: async () => {
    let view = /*html*/ `
            <div class="searchpage">
      <h1>Destructuring example for Rest parameter</h1><br><br><br>
      <div class="flex">     
        <form class="flex">          
          <button id="submit" class="search-btn" type="submit">
           Get Sample Records
          </button>

          <button id="mealfirst" class="sort-btn" type="submit">
           Display first meal from destructured array.
          </button>

          <button id="mealsecond" class="sort-btn" type="submit">
          Display second meal from destructured array.
          </button>

          <button id="mealthird" class="sort-btn" type="submit">
          Display Rest of the meal from the destructured array.
          </button>          
        </form>       
             
      </div>
      <div id="result-headingnew" class="explain"></div>
      <div id="result-headingnew1" class="explain"></div>
        <div id="result-headingnew2" class="explain"></div>       
      <div id="meals" class="meals"></div>
        `;

    return view;
  },
  after_render: async () => {
    //The getElementById() method returns
    const submit = document.getElementById("submit");
    submit.addEventListener("click", getMeals);
    mealFirst = document.getElementById("mealfirst");
    mealSecond = document.getElementById("mealsecond");
    mealThird = document.getElementById("mealthird");
    mealFirst.addEventListener("click", getFirstMeal);
    mealSecond.addEventListener("click", getSecondMeal);
    mealThird.addEventListener("click", getThirdMeal);
    searchedMeal = document.getElementById("meals");    
    showMeals = document.getElementById("result-headingnew");
    warningExplanation = document.getElementById("result-headingnew1");
    exampleExplanation = document.getElementById("result-headingnew2");   
  },
};

export default RestParameter;
