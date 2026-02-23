
function  renderByTab(){
    let filtered = cards
    console.log(currentTab);
    

    if(currentTab == "interview-filter-btn"){
      filtered = cards.filter((card)=>card.status == "Interview")
    }
    if(currentTab == "rejected-filter-btn"){
      filtered = cards.filter((card)=>card.status == "Rejected")
    }

    generateCard(filtered)
    updateCount()
    availableCount(filtered)

}

