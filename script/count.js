const totalElem = document.getElementById("total-result");
const interviewElem = document.getElementById("interview-result");
const rejectedElem = document.getElementById("rejected-result");
const availableJob = document.getElementById("available-job");

function updateCount() {
  totalElem.innerHTML = cards.length;
  const interviewCount = cards.filter((c) => c.status == "Interview").length;
  const rejectedCount = cards.filter((c) => c.status == "Rejected").length;

  interviewElem.innerText = interviewCount;
  rejectedElem.innerText = rejectedCount;
}

function availableCount(available) {
  availableJob.innerText = `${available.length} of ${cards.length} Jobs`;
}
