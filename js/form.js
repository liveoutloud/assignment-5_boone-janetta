var button = document.getElementById( 'button' );
  button.addEventListener( 'click', function(evt) {
    evt.preventDefault();
  });

var inputFirstName = document.getElementById( 'firstName' );
var inputLastName = document.getElementById( 'lastName' );
var inputEmail = document.getElementById( 'email' );
var inputMessageBox = document.getElementById( 'messageBox' );
var button = document.getElementById( 'button' )

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(evt);
  console.log('The firstName is: ' + inputFirstName.value);
  console.log('The lastName is: ' + inputLastName.value);
  console.log('The email is: ' + inputEmail.value);
  console.log('The message is: ' + inputMessageBox.value);
});
