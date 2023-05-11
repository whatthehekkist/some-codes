function toggleBtn() {

    let toggler = document.getElementById("myId");
    if (toggler.style.display === "" || toggler.style.display === "none") {      
      toggler.style.display = "block"; //show "Hello World"
    
    }else { 
      toggler.style.display = "none"; //hide "Hello World"
    }
  }