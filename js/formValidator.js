const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', (e)=> {
  e.preventDefault();

  checkInputs();
})


function checkInputs() {

  let usernameValue = username.value.trim();
  let passwordValue = password.value.trim();

  if (usernameValue === '') {
    // set Error message
    setErrorFor(username, 'Sorry Username can not be blank');
  } else {
    // set success message
    setSuccessFor(username);
  }

  if (passwordValue === '') {
      // set Error message
      setErrorFor(password, 'Sorry, password can not be blank');
  } else {
    // set success message
    setSuccessFor(password);
    
  }

  if(passwordValue && usernameValue) {
    animateFormSuccess();
    setTimeout(() => {
      location.replace('/home.html')
    }, 2000);
  }
}

function setErrorFor(input, message) {
  const formDiv = input.parentElement;
  const small = formDiv.querySelector('small');

  small.innerText = message;

  formDiv.className = 'form_div error';
  form.className = 'form error animate'

  setTimeout(() => {
    formDiv.className = 'form_div'
  }, 3000);

  setTimeout(() => {
    form.className = 'form';
  }, 1000);

}

function setSuccessFor(input, message) {
  const formDiv = input.parentElement;
  formDiv.className = 'form_div success';

  setTimeout(() => {
    formDiv.className = 'form_div'
  }, 2000);

}

function animateFormSuccess( input ) {
  setTimeout(function() {
    form.className = 'form success';

  }, 1000);

  
}

