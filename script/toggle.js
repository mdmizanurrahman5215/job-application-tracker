
console.log("toggle connected");
const allTab = document.getElementById("all-filter-btn")
const interviewTab = document.getElementById("interview-filter-btn")
const rejectedTab = document.getElementById("rejected-filter-btn")

let currentTab = "All"

function toggle(id){
    currentTab = id
 
   
    
 const selectedTab = document.getElementById(id)
 
 allTab.classList.remove("selected")
 interviewTab.classList.remove("selected")
 rejectedTab.classList.remove("selected")
 selectedTab.classList.add("selected")
 
 renderByTab()

}