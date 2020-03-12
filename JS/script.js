document.addEventListener("DOMContentLoaded", function() {
  // makse sure DOM is loaded
  //code goes below
  //Flickety below

  const clickSubmit = document.getElementById("submit-button");
  const submitInput = document.getElementById("email-submission");
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true
  });
  //email validation
  clickSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    if (submitInput.value != "")
      alert("Thanks for Subscribing with " + submitInput.value + " !");
    else alert("This cant be blank");
  });

  // check input using if statement alert if input is empty
  // end of doc ready
});
