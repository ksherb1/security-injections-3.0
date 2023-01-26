//Might not be working yet
$(document).ready(function() {
  $("#securityChecklist-questions").change(function(){
    if (document.getElementById("securityChecklist-questions-q1").checked === true &&
        document.getElementById("securityChecklist-questions-q2").checked === true &&
        document.getElementById("securityChecklist-questions-q3").checked === true &&
        document.getElementById("securityChecklist-questions-q4").checked === true &&
        document.getElementById("securityChecklist-questions-q5").checked === true
       ) {
        document.getElementById("securityChecklist-questions-q6").checked = true;
    }
  });
});
