let cards = [...jobCards];

const cardContainer = document.getElementById("card-container");

cardContainer.addEventListener("click", buttonHandler);

window.addEventListener("load", function () {
  generateCard(cards);
  updateCount();
  availableCount(cards);
});
