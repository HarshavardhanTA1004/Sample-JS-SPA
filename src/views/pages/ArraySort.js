var checkGetMealsHaveData = [];
var searchedMeal;
var ascendingsort;
var descendingsort;
var sortedMeal;
var ascexplaination;
var desexplaination;
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
          desexplaination.innerHTML = ``;
          ascexplaination.innerHTML = ``;
          sortedMeal.innerHTML = ``;
          checkGetMealsHaveData = data.meals;
          desexplaination.innerHTML = ``;
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
    var newSortedList = checkGetMealsHaveData.sort((a, b) => {
      let firstComparsion = a.strMeal.toLowerCase(),
        secondComparsion = b.strMeal.toLowerCase();

      if (firstComparsion < secondComparsion) {
        return -1;
      }
      if (firstComparsion > secondComparsion) {
        return 1;
      }
      return 0;
    });

    searchedMeal.innerHTML = ``;
    console.log(newSortedList, "newSortedList");
    ascexplaination.innerHTML = `<h2>Sorted Meals name in Ascending Alphabetical order</h2>`;
    desexplaination.innerHTML = ``;

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
    var newSortedList = checkGetMealsHaveData.sort((a, b) => {
      let firstComparsion = a.strMeal.toLowerCase(),
        secondComparsion = b.strMeal.toLowerCase();

      if (firstComparsion > secondComparsion) {
        return -1;
      }
      if (firstComparsion < secondComparsion) {
        return 1;
      }
      return 0;
    });

    searchedMeal.innerHTML = ``;
    console.log(newSortedList, "newSortedList");
    ascexplaination.innerHTML = ``;
    desexplaination.innerHTML = `<h2>Sorted Meals name in Descending Alphabetical order</h2>`;

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

let ArraySort = {
  render: async () => {
    let view = /*html*/ `
            <div class="searchpage">
      <h1>Array sort examples</h1><br><br><br>
      <div class="flex">
     
        <form class="flex" >
          
          <button id="submit" class="search-btn" type="submit">
           Get Meals
          </button>

          <button id="ascsortmeals" class="sort-btn" type="submit">
           Sort Meals by Ascending order
          </button>

          <button id="descsortmeals" class="sort-btn" type="submit">
           Sort Meals by Descending order
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
    ascendingsort = document.getElementById("ascsortmeals");
    descendingsort = document.getElementById("descsortmeals");
    ascendingsort.addEventListener("click", sortMealsAscendingOrder);
    descendingsort.addEventListener("click", sortMealsDescendingOrder);
    searchedMeal = document.getElementById("meals");
    sortedMeal = document.getElementById("sortmeals");
    ascexplaination = document.getElementById("result-headingnew1");
    desexplaination = document.getElementById("result-headingnew2");
  },
};

export default ArraySort;
