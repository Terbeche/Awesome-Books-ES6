export * from "./nav.js"

const link = document.querySelectorAll('.nav-link');
const booksListSection = document.querySelector('#books-list');
const addBookSection = document.querySelector('#input-fields');
const contactSection = document.querySelector('.contact');
const body = document.querySelector('body');
const homebutton = document.querySelector('.navbar-brand');
const sections = [booksListSection, addBookSection, contactSection];
const toggleMenu = document.querySelector('.navbar-collapse');


body.onload = () => {
  homebutton.classList.add('active');
  link[0].classList.remove('active');
  link[1].classList.remove('active');
  link[2].classList.remove('active');
  sections[0].classList.remove('d-none');
  sections[1].classList.add('d-none');
  sections[2].classList.add('d-none');
};


link[0].addEventListener('click', () => {
  link[0].classList.add('active');
  link[1].classList.remove('active');
  link[2].classList.remove('active');
  sections[0].classList.remove('d-none');
  sections[1].classList.add('d-none');
  sections[2].classList.add('d-none');
  toggleMenu.classList.remove('show');
});



link[1].addEventListener('click', () => {
  link[1].classList.add('active');
  link[0].classList.remove('active');
  link[2].classList.remove('active');
  sections[1].classList.remove('d-none');
  sections[0].classList.add('d-none');
  sections[2].classList.add('d-none');
  toggleMenu.classList.remove('show');
});



link[2].addEventListener('click', () => {
  link[2].classList.add('active');
  link[0].classList.remove('active');
  link[1].classList.remove('active');
  sections[2].classList.remove('d-none');
  sections[0].classList.add('d-none');
  sections[1].classList.add('d-none');
  toggleMenu.classList.remove('show');
});
