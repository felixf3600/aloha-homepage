document.addEventListener("DOMContentLoaded", function() {
  // makse sure DOM is loaded
  //code goes below
  //Flickety below

  const clickSubmit = document.getElementsByTagName("form")[0];
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true
  });
  //email validation
  clickSubmit.addEventListener("submit", function(event) {
    alert("Thanks for Subscribing!");
    event.preventDefault();
  });

  // check input using if statement alert if input is empty
  // end of doc ready
});
