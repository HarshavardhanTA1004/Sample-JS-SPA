let getPostsList = async () => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("Error getting documents", err);
  }
};

let Home = {
  render: async () => {
    await getPostsList();
    let view = /*html*/ `
        <div class= "homepage">
        <h1> WELCOME TO  </h1>
        <h2> FIND YOUR MEAL APPLICATION </h2><br><br>
        <p>European Computer Manufacturers Association (ECMAScript) or (ES) is a standard for scripting languages like JavaScript, ActionScript and JScript. It was initially created to standardize JavaScript, which is the most popular implementation of ECMAScript. This tutorial adopts a simple and practical approach through JavaScript to describe the new features in ECMAScript 2015 (ES6),
         ECMAScript 2016 (ES7), ECMAScript 2017(ES8) and ECMAScript 2018 (ES9).</p>
        <p>My plan was to use no library, unless it is clear to me that
        -- I am wasting too much time reinventing the wheel
        -- This is beyond me.
        
        So, handcoded Vanilla JS first. Libraries only when needed.
        Every bit of 3rd party code that you use comes with its own baggage and one should always check if the weight of baggage is less than the gains from using it.
        
        It also helps that I am making a simple Find your meal app; with a list of JS in a page. Something that the new versions of JS (ES6) are well suited to handle.</p>
        <br>
        </div>        
            
        `;
    return view;
  },
  after_render: async () => {},
};

export default Home;
