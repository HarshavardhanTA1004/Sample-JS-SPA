let Navbar = {
  render: async () => {
    let view = /*html*/ `
        <!-- The navigation menu -->
        <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
        <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                          
                            <h1><strong>Find Your Meal</strong></h1>
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
<div class="navbarnew">
  <a href="/#/">Home</a>
  <a href="/#/search">Search</a>
  <a href="/#/suggest">Suggest Me</a>
  <div class="subnav">
    <button class="subnavbtn">Concepts Execrise <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="/#/arraysort">ArraySort</a>
      <a href="/#/arrayfilter">ArrayFilter</a>
      <a href="/#/destructuring">Destructuring</a>
      <a href="/#/restparameter">RestParameter</a>
      <a href="/#/spreadoperators">SpreadOperator</a>
    </div>
  </div>
  
  <div class="subnav">
   
 
</div>
        `;
    return view;
  },
  after_render: async () => {},
};

export default Navbar;
