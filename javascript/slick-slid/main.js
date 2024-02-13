$(document).ready(function () {
  // with pure/vanilla javascript
  //   const paragraphs = document.querySelectorAll("p");
  //   for (let i = 0; i < paragraphs.length; i++) {
  //     paragraphs[i].style.color = "red";
  //   }

  // $("p").css("color", "red");

  //   const list = document.querySelector("ul");
  //   const todoListItem = document.createElement("li");
  //   todoListItem.textContent = "new item text";
  //   list.appendChild(todoListItem);

  //   $("ul").append("<li>new item text from jquery<li/>");

  //   const button = document.querySelector("button");
  //   button.addEventListener("click", function () {
  //     alert("this is alert");
  //   });

  //   $("button").click(function () {
  //     alert("this is alert");
  //   });

  //   const button = document.querySelector("button");
  //   button.addEventListener("click", function () {
  //     const divEl = document.querySelector("div");
  //     if (divEl.style.display === "none") {
  //       divEl.style.display = "block";
  //     } else {
  //       divEl.style.display = "none";
  //     }
  //   });

  $("button").click(function () {
    $("div").toggle();
  });
});
