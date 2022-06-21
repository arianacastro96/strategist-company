var sendButton, fullNameInput, emailInput, phoneInput, companyInput, contactForm, thankYouPanel, githubButton;

window.addEventListener('DOMContentLoaded', onDOMLoaded);

function onDOMLoaded(){
  new Flickity('#main-carousel', {
      wrapAround: true
  });

  sendButton = document.querySelector('#send-button');
  sendButton.addEventListener('click', sendButtonOnClick);

  fullNameInput = document.querySelector('#full-name-input');
  emailInput = document.querySelector('#email-input');
  phoneInput = document.querySelector('#phone-input');
  companyInput = document.querySelector('#company-input');
  contactForm = document.querySelector('#contact-form');
  thankYouPanel = document.querySelector('#thank-you-panel');
  githubButton = document.querySelector('#button-github');
  githubButton.addEventListener('click', githubButtonOnClick);
}

function sendButtonOnClick(){
  var errors = false;

  if(fullNameInput.value == ''){
    fullNameInput.parentElement.classList.add('error');
    errors = true;
  } else {
    fullNameInput.parentElement.classList.remove('error');
  }

  if(emailInput.value == ''){
    emailInput.parentElement.classList.add('error');
    errors = true;
  } else {
    emailInput.parentElement.classList.remove('error');
  }

  if(phoneInput.value == '' || isNaN(phoneInput.value)){
    phoneInput.parentElement.classList.add('error');
    errors = true;
  } else {
    phoneInput.parentElement.classList.remove('error');
  }

  if(companyInput.value == ''){
    companyInput.parentElement.classList.add('error');
    errors = true;
  } else {
    companyInput.parentElement.classList.remove('error');
  }


  if(!errors){
    contactForm.style.display = 'none';
    thankYouPanel.style.display = 'flex';
  }
}

function githubButtonOnClick(){
  location.href = 'https://github.com/arianacastro96/strategist-company';
}