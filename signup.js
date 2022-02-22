const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const signBtn = document.getElementById('sign-btn');


firstName.addEventListener("blur", validateFirstName);
lastName.addEventListener("blur", validateLastName);
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", validatePassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);


function validateFirstName() {
    const firstNameValue = firstName.value.trim();
    if(firstNameValue === '') {
       setError(firstName, 'Username is required');
     } else if(firstNameValue.length < 5 || firstNameValue.length > 25){
       setError(firstName, 'Your name must be between 5 and 25 letters');
     }else {
       setSuccess(firstName);
   }
}
function validateLastName() {
    const lastNameValue = lastName.value.trim();
    if(lastNameValue === '') {
       setError(lastName, 'Username is required');
     } else if(lastNameValue.length < 5 || lastNameValue.length > 25){
       setError(lastName, 'Your name must be between 5 and 25 letters');
     }else {
       setSuccess(lastName);
   }
}

function validateEmail() {
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
}

function validatePassword() {
    const passwordValue = password.value.trim();
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 3 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
}
function validateConfirmPassword() { 

    const confirmPasswordValue = confirmPassword.value.trim();

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== confirmPasswordValue) {
        setError(confirmPassword, "Passwords doesn't match");
    } else {
        setSuccess(confirmPassword);
    }
    
}

document.querySelector("#sign-btn").addEventListener("click", 
(e) => {
   
     e.preventDefault();

     validateForm();
     
     
    
});
 function validateForm() {

    const inputs = document.querySelectorAll("form input");

      console.log(inputs);
      alert("signed up successfully")
    window.location.href='./loginpage.html'


 }
    if(firstName.classList.contains('success') && 
    lastName.classList.contains('success') && 
       email.classList.contains('success') &&
       password.classList.contains('success') &&
       confirmPassword.classList.contains('success')
       ){
         document.querySelector("form").submit();
        } else{
            //  alert("validate all fields");
           return;
         }



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return re.test(String(email).toLowerCase());
}