let title = document.querySelector(".title");
let rating = document.querySelector(".rating");
let textarea = document.querySelector("textarea");
let btn = document.querySelector("#btn");
let thanks = document.querySelector("#thanks");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (thanks.style.display === "none" || thanks.style.display === "") {
    thanks.style.display = "inline-block";
    textarea.style.display = "none";
    title.style.display = "none";
    btn.textContent = "EDIT REVIEW";
    rating.style.display = "none";
  } else {
    thanks.style.display = "none";
    textarea.style.display = "inline-block";
    title.style.display = "inline-block";
    btn.textContent = "SUBMIT REVIEW";
    rating.style.display = "inline-block";
  }
});
