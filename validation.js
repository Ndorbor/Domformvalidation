


// assign all ids or classes to varibles

let ageErrorMessage = document.getElementById("ageErrorMessage");
let nameErrorMessage= document.getElementById("nameErrorMessage");

function formvalidation() {
    let nameInput = document.getElementById("nameInput").value;
    let genderInput = document.getElementById("genderSection").value;
    let ageInput = document.getElementById("ageInput").value;

  


    if (nameInput === "") {
        nameErrorMessage.innerHTML="type full name";
        return false;
    }
    if (genderInput === "") {
        
        return false;
    }
    if (ageInput === "") {
        ageErrorMessage.innerHTML="fill out age field";
        return false;
    }
    
    return true;
    
}


function applyResponsiveStyles() {
    const width = window.innerWidth;
  
    if (width <= 600) {
      // Styles for smartphones
      document.body.style.fontSize = '14px';
    }
    
    else if (width <= 900) {
      // Styles for tablets
      document.body.style.fontSize = '16px';
    } 
    else if (width <= 1200) {
      // Styles for small laptops
      document.body.style.fontSize = '18px';
    }
     else if (width <= 1600) {
      // Styles for desktops
      document.body.style.fontSize = '20px';
    } 
    else if (width <= 2000) {
      // Styles for large desktops
      document.body.style.fontSize = '22px';
    } 
    else {
      // Styles for very large screens
      document.body.style.fontSize = '24px';
    }
  }
  
  // Initial application of styles
  applyResponsiveStyles();
  
  // Update styles on window resize
  window.onresize = applyResponsiveStyles;