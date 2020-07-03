

var searchedMeal;
var resultHeading;
let searchMeal = async (e) => {
    e.preventDefault(); 
    
    const term = search.value;
    try { if (term.trim()) { //The trim() method removes whitespace from both sides of a string.
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
          .then(res => res.json())
          .then(data => {
            console.log("Searched Result",data);
            // resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;
    
            if (data.meals === null) {
              resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
            } else {
              searchedMeal.innerHTML = data.meals
                .map( //The map() method calls the provided function once for each element in an array, in order.
                  meal => `
                <div class="meal">
                  <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                  <div class="meal-info" data-mealID="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                  </div>
                </div>
              `
                )
                .join('');  //The join() method returns the array as a string.
            }
          },(err) => {
            alert('Server Error for Search:Please try after some time');
            console.log("Display Only If Meal search API call fails",err)
        });
        // Clear search text
        search.value = '';
      } else { // Displays a alert window, when user keeps the 
        alert('Please enter a search term');
      }
    }
    
     catch (err) {
        console.log('Error getting documents', err)
    }
}

let Search = {
    render : async () => {
        let view =  /*html*/`
            <div class="searchpage">
      <h1>Search for your favorites</h1><br><br><br>
      <div class="flex">
        <form class="flex" id="submit">
          <input
            type="text"
            id="search"
            placeholder="Search for meals or keywords"
          />
          <button class="search-btn" type="submit">
            <i class="fas fa-search"></i>
          </button>
          
        </form>
             
      </div>
      <br><br>

      <div id="meals" class="meals"></div>
        `


        resultHeading = document.getElementById('result-heading')
        return view
    }
    , after_render: async () => {
        const search = document.getElementById('search'), //The getElementById() method returns
        submit = document.getElementById('submit')
        submit.addEventListener('submit', searchMeal);
        searchedMeal = document.getElementById('meals')
        resultHeading = document.getElementById('result-heading')
    }

}

export default Search;