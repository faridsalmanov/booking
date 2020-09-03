
function topFunction() {
  document.body.scrollTop= 2000;
  document.documentElement.scrollTop = 2000;
   
} 

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.backgroundColor = "#ECECEC99";
            document.getElementById("navbar").style.transition = "all 1s ease";
    document.getElementById("navbar").style.boxShadow = "0px 5px 8px 5px #ECECEC99";
          } else {
        document.getElementById("navbar").style.backgroundColor = "#ECECEC00";
//        document.getElementById("navbar").style.boxShadow = "0px 0px 0px 0px #888888"; 
              
          }
}


(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();