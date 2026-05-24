const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

  let search = searchInput.value.toLowerCase();

  cards.forEach(card => {

    let title = card.querySelector("h2").innerText.toLowerCase();

    if(title.includes(search)){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }

  });

});
const genreButtons = document.querySelectorAll(".genres button");

genreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const genre = button.innerText.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (genre === "all" || text.includes(genre)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

  slides[currentSlide].classList.remove("active");

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");

},3000);
function addComment(){

  const input = document.getElementById("comment-input");

  const commentList = document.getElementById("comment-list");

  if(input.value.trim() === ""){
    return;
  }

  const div = document.createElement("div");

  div.classList.add("comment");

  div.innerText = input.value;

  commentList.prepend(div);

  input.value = "";

}
let likes = 0;

function likeChapter(){

  likes++;

  document.getElementById("like-count").innerText =
    likes + " Likes";

}
function bookmarkManga(){

  document.getElementById("bookmark-text").innerText =
    "⭐ Added to bookmarks";

}
function bookmarkManga(){

  const text = document.getElementById("bookmark-text");

  text.innerText = "⭐ Added to bookmarks";

}
let views = localStorage.getItem("views");

if(views == null){
  views = 0;
}

views++;

localStorage.setItem("views", views);

const viewText = document.getElementById("view-count");

if(viewText){
  viewText.innerText = views;
}
function uploadManga(){
  document.getElementById("upload-message").innerText =
    "✅ Upload complete!";
}