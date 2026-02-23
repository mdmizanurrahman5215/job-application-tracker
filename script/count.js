
const totalElem = document.getElementById("total-result")
const interviewElem = document.getElementById("interview-result")
const rejectedElem = document.getElementById("rejected-result")
const availableJob = document.getElementById("available-job")

function updateCount(){
 totalElem.innerHTML = cards.length
}

function availableCount(available){
    availableJob.innerText = `${available.length} of ${cards.length} Jobs`
}