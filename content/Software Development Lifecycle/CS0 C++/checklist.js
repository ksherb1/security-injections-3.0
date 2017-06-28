//Might not be working yet
if (document.getElementById("securityChecklist-questions-q1").checked === true &&
    document.getElementById("securityChecklist-questions-q2").checked === true &&
    document.getElementById("securityChecklist-questions-q3").checked === true &&
    document.getElementById("securityChecklist-questions-q4").checked === true &&
    document.getElementById("securityChecklist-questions-q5").checked === true
   ) {
    document.getElementById('securityChecklist-questions-q6').disabled = false;
    document.getElementById("securityChecklist-questions-q6").checked = true;
}