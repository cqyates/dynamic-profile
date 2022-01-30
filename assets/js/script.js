var aboutEl = document.getElementById("about");
var educationEl = document.getElementById("education");
var experienceEl = document.getElementById("experience");
var portfolioEl = document.getElementById("portfolio");
var contactEl = document.getElementById("contact");
var liLink = document.querySelectorAll(".nav-item");

liLink.forEach(function(event){
  var aTarget = event.getAttribute("data-section");
  // console.log(targetSection)
  event.addEventListener("click", function(){
    if(aTarget === "about") {
      aboutEl.classList.remove("hide");
      educationEl.classList.add("hide");
      experienceEl.classList.add("hide");
      portfolioEl.classList.add("hide");
      contactEl.classList.add("hide");
    }
    if(aTarget === "education") {
      educationEl.classList.remove("hide");
      aboutEl.classList.add("hide");
      experienceEl.classList.add("hide");
      portfolioEl.classList.add("hide");
      contactEl.classList.add("hide");
    }
    if(aTarget === "experience") {
      educationEl.classList.add("hide")
      aboutEl.classList.add("hide");
      experienceEl.classList.remove("hide");
      portfolioEl.classList.add("hide");
      contactEl.classList.add("hide");
    }
    if(aTarget === "portfolio") {
     portfolioEl.classList.remove("hide");
     educationEl.classList.add("hide");
     experienceEl.classList.add("hide");
     aboutEl.classList.add("hide");
     contactEl.classList.add("hide");
    }
    if(aTarget === "contact") {
      contactEl.classList.remove("hide");
      educationEl.classList.add("hide");
     experienceEl.classList.add("hide");
     aboutEl.classList.add("hide");
     portfolioEl.classList.add("hide")
    }
  })
})