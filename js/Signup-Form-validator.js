const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btn = document.querySelector('button');


btn.addEventListener('click', () =>{
  btn.className = 'jello-vertical'
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();

});

function checkInputs() 
{
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === ''){
    // set error message
    setErrorFor(username, 'Username can not be blank')
  } else {
    //  set success message
    setSuccessFor(username)
  }

  if (emailValue === ''){
    // set error message
    setErrorFor(email, 'Email can not be blank')
  } else if(!isEmail(emailValue)){
    setErrorFor(email, 'Invalid Email, please check and try Again.')
  } else {
    //  set success message
    setSuccessFor(email)
  }

  if (passwordValue === ''){
    // set error message
    setErrorFor(password, 'password can not be blank')
  } else {
    //  set success message
    setSuccessFor(password)
  }

  if (password2Value === ''){
    // set error message
    setErrorFor(password2, 'password can not be blank')
  } else if(passwordValue !== password2Value){
    setErrorFor(password2, 'Password Mismatch. Please check and try again')
  }
  else {
    //  set success message
    setSuccessFor(password2)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  formControl.className = 'form_div error';
  form.className = 'form error animate'


  small.innerText = message;

  formControl.className = 'form-div error'

  // resetting the classes
  setTimeout(() => {
    form.className = 'form';
  }, 2000);
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-div success'

}

function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\])\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}