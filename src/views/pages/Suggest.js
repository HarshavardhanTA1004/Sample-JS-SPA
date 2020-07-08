// --------------------------------
//  Define Data Sources
// --------------------------------
var single_meal;
var suggest;

let getRandomMeal = async () => {
  try {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => res.json()) //res.json() – parse the response as JSON
      .then(
        (data) => {
          console.log("calls when the user click on Suggest me buttons", data);
          const meal = data.meals[0];

          addMealToDOM(meal);
        },
        (err) => {
          alert("Server Error for suggest me:Please try after some time");
          console.log("Display Only If suggest me API call fails", err);
        }
      );
  } catch (err) {
    console.log("Error getting documents", err);
  }
};

// Add meal to DOM
const addMealToDOM = (meal) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  single_meal.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}  
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
};

let Suggest = {
  render: async () => {
    await getRandomMeal();

    let view = /*html*/ `
       <br>
       <button class="random-btn" id="suggest">Next
       <i class="fas fa-random"></i>
     </button>
       <div id="single-meal"></div>
       `;
    return view;
  },
  after_render: async () => {
    single_meal = document.getElementById("single-meal");
    suggest = document.getElementById("suggest");
    suggest.addEventListener("click", getRandomMeal);
  },
};

export default Suggest;
