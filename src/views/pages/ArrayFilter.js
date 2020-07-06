var checkGetMealsHaveData = [];
var searchedMeal;
var unquiefilter;
var duplicatefilter;
var sortedMeal;
var unquiexplanation;
var duplicateexplanation;
let getMeals = async (e) => {
  e.preventDefault();

  const term = "cheese";
  try {
    if (term.trim()) {
      //The trim() method removes whitespace from both sides of a string.
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Searched Result", data);
          duplicateexplanation.innerHTML = ``;
          unquiexplanation.innerHTML = ``;
          sortedMeal.innerHTML = ``;
          checkGetMealsHaveData = data.meals;
          duplicateexplanation.innerHTML = ``;
          console.log("Arrays", checkGetMealsHaveData);
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

let sortMealsAscendingOrder = async (e) => {
  e.preventDefault();
  if (checkGetMealsHaveData.length === 0) {
    sortedMeal.innerHTML = `<h2>No Data To search.. Please Click on "Get Meals" button</h2>`;
  } else {
    var newSortedList = checkGetMealsHaveData.filter((c, index) => {   // using arrow function
        return c.strCategory != "Dessert";
    });
    searchedMeal.innerHTML = ``;
    console.log(newSortedList, "newSortedList");
    unquiexplanation.innerHTML = `<h2>Filtered Meals by Categoryname. Removes the duplicate Categoryname</h2>`;
    duplicateexplanation.innerHTML = ``;

    sortedMeal.innerHTML = newSortedList
      .map(
        //The map() method calls the provided function once for each element in an array, in order.
        (meal) => `
        <div class="meal">
        <h2>${meal.strMeal}</h2>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
         
          <div class="meal-info" data-mealID="${meal.idMeal}">
            <h3>${meal.strMeal}</h3>
          </div>
        </div>
      `
      )
      .join("");
  }
};

let sortMealsDescendingOrder = async (e) => {
  e.preventDefault();
  if (checkGetMealsHaveData.length === 0) {
    sortedMeal.innerHTML = `<h2>No Data To search.. Please Click on "Get Meals" button</h2>`;
  } else {
    var newSortedList = checkGetMealsHaveData.filter((c, index) => {   // using arrow function
        return c.strCategory === "Dessert";
    });

    searchedMeal.innerHTML = ``;
    console.log(newSortedList, "newSortedList");
    unquiexplanation.innerHTML = ``;
    duplicateexplanation.innerHTML = `<h2>Filtered Meals by  Categoryname. Display the duplicate Categoryname</h2>`;

    sortedMeal.innerHTML = newSortedList
      .map(
        //The map() method calls the provided function once for each element in an array, in order.
        (meal) => `
        <div class="meal">
        <h2>${meal.strMeal}</h2>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
         
          <div class="meal-info" data-mealID="${meal.idMeal}">
            <h3>${meal.strMeal}</h3>
          </div>
        </div>
      `
      )
      .join("");
  }
};

let ArrayFilter = {
  render: async () => {
    let view = /*html*/ `
            <div class="searchpage">
      <h1>Array Filter examples</h1><br><br><br>
      <div class="flex">
     
        <form class="flex" >
          
          <button id="submit" class="search-btn" type="submit">
           Get Meals
          </button>

          <button id="ascsortmeals" class="sort-btn" type="submit">
           Filter unquie Meals by its category name
          </button>

          <button id="descsortmeals" class="sort-btn" type="submit">
          Filter duplicate Meals by its category name
          </button>
          
        </form>
        
             
      </div>
      <div id="result-headingnew1" class="explain"></div>
        <div id="result-headingnew2" class="explain"></div>
 
        <div id="sortmeals" class="meals"></div>
      <div id="meals" class="meals"></div>
      
      
      
        `;

    return view;
  },
  after_render: async () => {
    //The getElementById() method returns
    const submit = document.getElementById("submit");
    submit.addEventListener("click", getMeals);
    unquiefilter = document.getElementById("ascsortmeals");
    duplicatefilter = document.getElementById("descsortmeals");
    unquiefilter.addEventListener("click", sortMealsAscendingOrder);
    duplicatefilter.addEventListener("click", sortMealsDescendingOrder);
    searchedMeal = document.getElementById("meals");
    sortedMeal = document.getElementById("sortmeals");
    unquiexplanation = document.getElementById("result-headingnew1");
    duplicateexplanation = document.getElementById("result-headingnew2");
  },
};

export default ArrayFilter;
