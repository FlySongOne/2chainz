document.addEventListener("DOMContentLoaded", function(event){

// when the user clicks submit button for newsletter subscription
// below function shows message on form element.
  $('#submit').click(function(event){
    let email = $("#email").val();
    let zipCode = $("#zipcode").val();
    let form = $("form");
    let newsLetterBox = $("#newsLetterBox");

    if( email && zipCode) {
      form.html("Thank you for submitting!");
      form.attr('id', 'submitted');
    }

    event.preventDefault();
  });



});
