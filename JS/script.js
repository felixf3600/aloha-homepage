document.addEventListener("DOMContentLoaded", function() {
  // makse sure DOM is loaded
  //code goes below
  //Flickety below

  const clickSubmit = document.getElementById("submit-button");
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true
  });
  //email validation
  clickSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    const submittedEmail = document.getElementById("email-submission");
    const emailLenght = submittedEmail.lenght;
    if (emailLenght == null) {
      alert("Please enter a valid email.");
    } else {
      alert("Thank You!");
    }
    console.log(submittedEmail);
  });

  // check input using if statement alert if input is empty
  // end of doc ready
});
