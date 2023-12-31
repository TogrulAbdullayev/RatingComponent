let rating = document.querySelector('ul');
let selection = '0';

rating.addEventListener("click", (e) => {
  if(e.target.tagName == 'LABEL') {
    selection = e.target.innerHTML;
  }
})

let button = document.querySelector('button');
let section = document.querySelectorAll('section');

button.addEventListener("click", (e) => {
  section[0].classList.add('opacity-0');
  setTimeout(() => {
    section[0].remove();
    section[1].classList.remove('hidden');
    section[1].classList.add('flex');
    section[1].firstElementChild.nextElementSibling.firstElementChild.innerHTML = selection;
  }, 150);
})