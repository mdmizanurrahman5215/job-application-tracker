function buttonHandler(e) {
  const card = e.target.closest(".card");
  const cardId = Number(card.dataset.id)
  const interviewBtn = e.target.closest(".interview-btn");
  const rejectBtn = e.target.closest(".rejected-btn");
  const deleteBtn = e.target.closest(".card-delete-btn");

  if (!interviewBtn && !rejectBtn && !deleteBtn) return;

  const selectedCard = cards.find((card) => card.id == cardId);

//  interview 
  if (interviewBtn) {
    selectedCard.status = "Interview";
    selectedCard.statusColor = "bg-green-500 text-black font-medium";
  }
//   reject 
  if (rejectBtn) {
    selectedCard.status = "Rejected";
    selectedCard.statusColor = "bg-red-500 text-black font-medium";
  }
//   delete 
  if(deleteBtn){
    cards = cards.filter((c)=>c.id !== cardId)    
  }
  renderByTab();
}
