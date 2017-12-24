var link = document.querySelector('.login');
var popup = document.querySelector('.modal-content');
var close = document.querySelector('.modal-content-close');
var form = document.querySelector('form');
var login = document.querySelector('[name=login]');
var password = document.querySelector('[name=password]');
var storage = localStorage.getItem('login');

link.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.add('modal-content-show');
  if (storage){
    login.value = storage;
    password.focus();
  }else{
    login.focus();
  }
})

close.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.remove('modal-content-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(event){
  if(!login.value || !password.value){
    event.preventDefault();
    popup.classList.add('modal-error');
  }else{
    localStorage.setItem('login', login.value);
  }
});

window.addEventListener('keydown', function(event){
  if (event.keyCode === 27){
    if (mapPopup.classList.contains('modal-content-show')){
      mapPopup.classList.remove('modal-content-show');
      popup.classList.remove('modal-error');
    }
  }
});
