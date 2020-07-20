// ES6 provides a new feature called destructing assignment that allows you to destructure
//  properties of an object or elements of an array into individual variables.


var mealsData = [];
var record = "Home";
var searchedMeal;
var mealfirst;
var mealsecond;
var mealthird;
var warning;
var successful;
var allMeals;

let getMeals = async (e) => {
  e.preventDefault();
  const term = "Mac";
  try {
    if (term.trim()) {
      //The trim() method removes whitespace from both sides of a string.
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => {        
          mealsData = data.meals;
          showExplanation(mealsData, record);  
          searchedMeal.innerHTML = getInnerHtml(data.meals);
        });
     } 
  } catch (err) {
    console.log("Error getting documents", err);
  }
};
// This function is used to break down the repitation of code and can be used wherever it is needed.
const getInnerHtml = (meals) => {
  return  meals.map(
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
  }
      

// This function provides the appropriate messages based on the user action.
const showExplanation = (value,record) => {
    if(value.length === 0){  
        warning.innerHTML = `<h2>Please Click on 'Get Sample Record' button to make use of the example</h2>`;
        successful.innerHTML = ``; 
  }else{    
    if(record === "Home") {
        warning.innerHTML = ``;
        successful.innerHTML = ``;        
        allMeals.innerHTML = `<h2>Displays all the meals in the Array</h2>`;
    }else{
        warning.innerHTML = ``;
        successful.innerHTML = `<h2>${record} meal example</h2><p>Displays meal according its index position from the Destructured Array.</p>`;        
        allMeals.innerHTML = ``;
    }
  }
}
// First example for destructuring
let getFirstExample = (e) => {
    e.preventDefault();
    if(mealsData.length === 0){ 
        showExplanation(mealsData);
    }else{       
        let [meal1] = mealsData;        
        let meals= [];
        meals.push(meal1);        
        let record = "First"
        searchedMeal.innerHTML =  getInnerHtml(meals);
        // ToDo -  Remove 3 variable and written one function and send as paramter and utilize it. 
        showExplanation(mealsData, record); 
    }
};
// Second example for destructuring
let getSecondExample = (e) => {
    e.preventDefault();
    // ToDo - Move "if" block to another function.
    if(mealsData.length === 0){
        showExplanation(mealsData);
    }else{
        let [,meal2] = mealsData; 
       let meals = [meal2];
       let record = "Second"
        searchedMeal.innerHTML =  getInnerHtml(meals);
        showExplanation(mealsData, record); 
    }   
};
// Third example for destructuring
let getThirdExample = (e) => {
    e.preventDefault();
    if(mealsData.length === 0){
        showExplanation(mealsData); 
    }else{        
        let [meal1,,meal3] = mealsData; //    
        let meals = [meal1,meal3]; //structuring
        let record = "Third";
        searchedMeal.innerHTML =   getInnerHtml(meals);
        showExplanation(mealsData, record);        
    }    
};

let Destructuring = {
  render: async () => {
    let view = /*html*/ `
            <div class="searchpage">
      <h1>Example for Destructuring</h1><br><br><br>
      <div class="flex">     
        <form class="flex" >          
          <button id="submit" class="search-btn" type="submit">
          Get Sample Records
          </button>

          <button id="mealfirst" class="sort-btn" type="submit">
           Display first meal from the destructured array.
          </button>

          <button id="mealsecond" class="sort-btn" type="submit">
          Display second meal from the destructured array.
          </button>

          <button id="mealthird" class="sort-btn" type="submit">
          Display third meal from the destructured array.
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
    mealfirst = document.getElementById("mealfirst");
    mealsecond = document.getElementById("mealsecond");
    mealthird = document.getElementById("mealthird");
    mealfirst.addEventListener("click", getFirstExample);
    mealsecond.addEventListener("click", getSecondExample);
    mealthird.addEventListener("click", getThirdExample);
    searchedMeal = document.getElementById("meals");    
    allMeals = document.getElementById("result-headingnew");
    warning = document.getElementById("result-headingnew1");
    successful = document.getElementById("result-headingnew2");    
  },
};

export default Destructuring;
