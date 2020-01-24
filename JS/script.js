document.addEventListener("DOMContentLoaded", function() {
  // makse sure DOM is loaded
  //code goes below
  //Flickety below

  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true
  });

  //email validation
  //check input using if statement alert if input is empty
}); //end of doc ready
