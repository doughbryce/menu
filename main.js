function open(){
  let menu = document.getElementById('mydiv');
  menu.classList.add('menu2');
  menu.classList.remove('menu');
}

function close(){
  let menu = document.getElementById('mydiv');
  menu.classList.add('menu');
  menu.classList.remove('menu2');
}

let openButton = document.querySelector('.open');
openButton.addEventListener('click', function(){
  open();
});

let closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function(){
  close();
});