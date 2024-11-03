let icons = document.querySelectorAll(".icon-box");
let btn = document.querySelector("#btn");
let f1 = document.querySelector(".f1");
let f2 = document.querySelector(".f2");
let feedback = document.querySelector("#feedback");
let selectedFeedback = ""; 


icons.forEach(function(icon) {
    icon.addEventListener("click", function() {
     
        icons.forEach((icon) => icon.classList.remove("active"));
        
      
        icon.classList.add("active");
        
       
        selectedFeedback = icon.textContent.trim();
    });
});


btn.addEventListener("click", function() {
    if (selectedFeedback) { 
        f1.style.display = "none";
        f2.style.display = "flex";
        feedback.textContent = `Feedback: ${selectedFeedback}`;
    } else {
        alert("Please select a feedback option before submitting.");
    }
});