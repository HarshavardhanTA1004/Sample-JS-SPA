var fetchedMeals = [];
var record = "Home";
var searchedMeal;
var ascendingSort;
var descendingSort;
var showMeals;
var exampleExplanation;
var warningExplanation;

const getInfoToInnerHtml = (meals) => {
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


let getMeals = async (e) => {
  e.preventDefault();

  const term = "cheese";
  try {
    if (term.trim()) {
      //The trim() method removes whitespace from both sides of a string.
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => {
          fetchedMeals = data.meals;
          searchedMeal.innerHTML = getInfoToInnerHtml(data.meals);
          showAppropriateExplanation(fetchedMeals,record);
        });
    }
  } catch (err) {
    console.log("Error getting documents", err);
  }
};


const showAppropriateExplanation = (value, record) => {
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

let getSortMealsAscendingOrder = (e) => {
  e.preventDefault();
  if (fetchedMeals.length === 0) {
    showAppropriateExplanation(fetchedMeals);
  } else {
    var newSortedList = fetchedMeals.sort((a, b) => {
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
    let record = "Sorted Meals name in Ascending Alphabetical order";
    showAppropriateExplanation(fetchedMeals, record);
    showMeals.innerHTML = getInfoToInnerHtml(newSortedList);
  }
};

let getSortMealsDescendingOrder = (e) => {
  e.preventDefault();
  if (fetchedMeals.length === 0) {
    showAppropriateExplanation(fetchedMeals);
  } else {
    var newSortedList = fetchedMeals.sort((a, b) => {
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
    let record = "Sorted Meals name in Descending Alphabetical order";
    showAppropriateExplanation(fetchedMeals, record);
    showMeals.innerHTML = getInfoToInnerHtml(newSortedList);
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
    ascendingSort = document.getElementById("ascsortmeals");
    descendingSort = document.getElementById("descsortmeals");
    ascendingSort.addEventListener("click", getSortMealsAscendingOrder);
    descendingSort.addEventListener("click", getSortMealsDescendingOrder);
    searchedMeal = document.getElementById("meals");
    showMeals = document.getElementById("sortmeals");
    exampleExplanation = document.getElementById("result-headingnew1");
    warningExplanation = document.getElementById("result-headingnew2");
  },
};

export default ArraySort;
