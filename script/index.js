console.log("index connected");
let cards = [...jobCards]
console.log(cards);

const cardContainer = document.getElementById("card-container");

cardContainer.addEventListener("click", buttonHandler)




window.addEventListener("load", function (){
generateCard(cards)
updateCount()
availableCount(cards)

})


