const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
if (password.value.length <= 8){
	alert("Password Must be greater than eight characters.")
	e.preventDefault()
}
else{
	alert("Welcome, Now you are the member of our community. ")
}

});
