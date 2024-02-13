// 1. find button element
const btn = document.getElementById("nav__hamburger-btn");
console.log(btn);

// 2. find nav__list element
const navList = document.getElementById("nav__list");
console.log(navList);

// 3. once button is clicked, then add class .show to nav__list element
btn.addEventListener("click", function() {
  navList.classList.toggle("show");
});

// function fun(){
//  return "this is something!"
// }
// fun()
