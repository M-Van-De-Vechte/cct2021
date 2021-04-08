 /*window.onscroll = function() { 
        scrollFunction() 
    }; 
          
    function scrollFunction() { 
        if (document.body.scrollTop > 90 || 
            document.documentElement.scrollTop > 90) 
        { 
            document.getElementById("navlist") 
                        .style.padding = "25px 10px"; 
                  
            document.getElementById("logo") 
                    .style.fontSize = "24px"; 
        }  
        else { 
            document.getElementById("navlist") 
                        .style.padding = "90px 10px"; 
                          
            document.getElementById("logo") 
                        .style.fontSize = "35px"; 
        } 
    } 
*/

function loadAlert() {
  alert('Please review the terms and conditions, and the privacy and cookies policy. Thanks')
}

function color() {
  document.getElementById("sect2-2").style.filter = "grayscale(0%)";
}

function bnw() {
  document.getElementById("sect2-2").style.filter = "grayscale(100%)";
}

function home() {
 alert("Please Try again")
}