var checkGetDestructedMealsHaveData = [];
var searchedMeal;
var searchedMeal1;
var searchedMeal2;
var searchedMeal3;
var mealfirst;
var mealsecond;
var mealthird;
var mealThirdExplaination;;
var mealFirstExplaination;
var mealSecondExplaination;
var totalmeals;
let getMeals = async (e) => {
  e.preventDefault();

  const term = "Mac";
  try {
    if (term.trim()) {
      //The trim() method removes whitespace from both sides of a string.
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Searched Result", data.meals);
          mealSecondExplaination.innerHTML = ``;
          mealFirstExplaination.innerHTML = ``;
          mealThirdExplaination.innerHTML = ``;
          totalmeals.innerHTML = `<h2>Displays all the meals in the Array</h2>`
         
          checkGetDestructedMealsHaveData = data.meals;
        ;
          console.log("Arrays", checkGetDestructedMealsHaveData);
          searchedMeal.innerHTML = data.meals
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
            .join(""); //The join() method returns the array as a string.
        });
    }
  } catch (err) {
    console.log("Error getting documents", err);
  }
};

let firstmeal = async (e) => {
    e.preventDefault();
    if(checkGetDestructedMealsHaveData.length === 0){        
          mealFirstExplaination.innerHTML = `<h2>Please Click on 'Get Sample Record' button to make use of the example</h2>`;
          mealSecondExplaination.innerHTML = ``;
          mealThirdExplaination.innerHTML = ``
          totalmeals.innerHTML = ``;
    }else{
        let [meal1,meal2,meal3] = checkGetDestructedMealsHaveData; 
        console.log(meal1);
        
        searchedMeal1.innerHTML =  `
            <div class="meal">
        
              <img src="${meal1.strMealThumb}" alt="${meal1.strMeal}" />
              <div class="meal-info" data-mealID="${meal1.idMeal}">
                <h3>${meal1.strMeal}</h3>
              </div>
            </div>
          `
          mealSecondExplaination.innerHTML = ``;
          mealFirstExplaination.innerHTML = `<h2>First meal example</h2><p>Displays first meal from the Destructured Array.</p>`;
          mealThirdExplaination.innerHTML = ``
          totalmeals.innerHTML = ``;
    }
    
};

let secondMeal = async (e) => {
    e.preventDefault();
    if(checkGetDestructedMealsHaveData.length === 0){
        mealFirstExplaination.innerHTML = ``;
        mealSecondExplaination.innerHTML = `<h2>Please Click on 'Get Sample Record' button to make use of the example</h2>`;
        mealThirdExplaination.innerHTML = ``
        totalmeals.innerHTML = ``;
    }else{
        let [meal1,meal2,meal3] = checkGetDestructedMealsHaveData; 
        console.log(meal2);
        searchedMeal2.innerHTML =  `
            <div class="meal">
        
              <img src="${meal2.strMealThumb}" alt="${meal2.strMeal}" />
              <div class="meal-info" data-mealID="${meal2.idMeal}">
                <h3>${meal2.strMeal}</h3>
              </div>
            </div>
          `
          mealSecondExplaination.innerHTML = `<h2>Second meal example</h2><p>Displays second meal from the Destructured Array.</p>`;
          mealFirstExplaination.innerHTML = ``;
          mealThirdExplaination.innerHTML = ``;
          totalmeals.innerHTML = ``;

    }
   
};

let thirdMeal = async (e) => {
    e.preventDefault();
    if(checkGetDestructedMealsHaveData.length === 0){
        mealFirstExplaination.innerHTML = ``;
        mealSecondExplaination.innerHTML = ``;
        mealThirdExplaination.innerHTML = `<h2>Please Click on 'Get Sample Record' button to make use of the example</h2>`
        totalmeals.innerHTML = ``;
    }else{
        let [meal1,meal2,meal3] = checkGetDestructedMealsHaveData; 
   
        searchedMeal3.innerHTML =   `
            <div class="meal">
        
              <img src="${meal3.strMealThumb}" alt="${meal3.strMeal}" />
              <div class="meal-info" data-mealID="${meal3.idMeal}">
                <h3>${meal3.strMeal}</h3>
              </div>
            </div>
          `
        
        mealSecondExplaination.innerHTML = ``;
        mealFirstExplaination.innerHTML = ``;
        mealThirdExplaination.innerHTML = `<h2>Third example</h2><p>Displays third meal from the Destructured Array.</p>`
        totalmeals.innerHTML = ``;
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
        <div id="result-headingnew3" class="explain"></div>
 
        <div id="sortmeals" class="meals"></div>
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
    mealfirst.addEventListener("click", firstmeal);
    mealsecond.addEventListener("click", secondMeal);
    mealthird.addEventListener("click", thirdMeal);
    searchedMeal = document.getElementById("meals");
    searchedMeal1 = document.getElementById("meals");
    searchedMeal2 = document.getElementById("meals");
    searchedMeal3 = document.getElementById("meals");
    totalmeals = document.getElementById("result-headingnew");
    mealFirstExplaination = document.getElementById("result-headingnew1");
    mealSecondExplaination = document.getElementById("result-headingnew2");
    mealThirdExplaination = document.getElementById("result-headingnew3");
  },
};

export default Destructuring;
