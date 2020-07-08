var storeMeals = [];
var record = "Home";
var searchedMeal;
var unquieFilter;
var duplicateFilter;
var showMeals;
var warningExplanation;
var exampleExplanation;
let getMeals = async (e) => {
  e.preventDefault();

  const term = "cheese";
  try {
    if (term.trim()) {
      //The trim() method removes whitespace from both sides of a string.
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data) => {
          storeMeals = data.meals;
          searchedMeal.innerHTML = getInnerHtml(data.meals);
          showExplanation(storeMeals, record);
        });
    }
  } catch (err) {
    console.log("Error getting documents", err);
  }
};

// This function is used to break down the repitation of code and can be used wherever it is needed.
const getInnerHtml = (meals) => {
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

let getUnquieMeals = (e) => {
  e.preventDefault();
  if (storeMeals.length === 0) {
    showExplanation(storeMeals);
  } else {
    var newSortedList = storeMeals.filter((c, index) => {
      // using arrow function
      return c.strCategory != "Dessert";
    });
    let record =
      "Filtered Meals by Categoryname. Removes the duplicate Categoryname";
    showExplanation(storeMeals, record);
    searchedMeal.innerHTML = getInnerHtml(newSortedList);
  }
};

let getDuplicateMeals = (e) => {
  e.preventDefault();
  if (storeMeals.length === 0) {
    showExplanation(storeMeals);
  } else {
    var newSortedList = storeMeals.filter((c, index) => {
      // using arrow function
      return c.strCategory === "Dessert";
    });
    let record =
      "Filtered Meals by  Categoryname. Display the duplicate Categoryname";
    showExplanation(storeMeals, record);
    searchedMeal.innerHTML = getInnerHtml(newSortedList);
  }
};

let ArrayFilter = {
  render: async () => {
    let view = /*html*/ `
            <div class="searchpage">
      <h1>Array Filter examples</h1><br><br><br>
      <div class="flex">     
        <form class="flex">          
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
        <div id="result-headingnew" class="explain"></div>
      <div id="meals" class="meals"></div>
        `;

    return view;
  },
  after_render: async () => {
    //The getElementById() method returns
    const submit = document.getElementById("submit");
    submit.addEventListener("click", getMeals);
    unquieFilter = document.getElementById("ascsortmeals");
    duplicateFilter = document.getElementById("descsortmeals");
    unquieFilter.addEventListener("click", getUnquieMeals);
    duplicateFilter.addEventListener("click", getDuplicateMeals);
    searchedMeal = document.getElementById("meals");
    showMeals = document.getElementById("result-headingnew");
    warningExplanation = document.getElementById("result-headingnew1");
    exampleExplanation = document.getElementById("result-headingnew2");
  },
};

export default ArrayFilter;
