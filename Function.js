function calculateGrade(){
    // INPUT SUBJECT GRADE VALUES
    var WEBSYSTEM=document.getElementById('WEBSYSTEM').value;
    var NETWORKING=document.getElementById('NETWORKING').value;
    var SIA=document.getElementById('SIA').value;
    var DSA=document.getElementById('DSA').value;
    var MATH=document.getElementById('MATH').value;
    var PROGRAMMING1=document.getElementById('PROGRAMMING1').value;
    var PROGRAMMING2=document.getElementById('PROGRAMMING2').value;
    // FORMULA
    var avg = (parseFloat(WEBSYSTEM) + parseFloat(NETWORKING) + parseFloat(SIA) +
    parseFloat(DSA) + parseFloat(MATH) + parseFloat(PROGRAMMING1) + parseFloat(PROGRAMMING2)) / 7;
    // RESULT PF THE AVERAGE PUTS HERE 
    var descriptor = "";
    var remarks = "";
    
    if (avg > 100) {
        descriptor = "DOES NOT EXIST";
        remarks = "DOES NOT EXIST";
      }else if (avg >= 90 && avg <= 100) {
        descriptor = "OUTSTANDING";
        remarks = "PASSED";
      } else if (avg >= 85 && avg <= 89) {
        descriptor = "VERY SATISFACTORY";
        remarks = "PASSED";
      } else if (avg >= 80 && avg <= 84) {
        descriptor = "SATISFACTORY";
        remarks = "PASSED";
      } else if (avg >= 75 && avg <= 79) {
        descriptor = "FAIRLY SATISFACTORY";
        remarks = "PASSED";
      } else if(avg >= 0 && avg <= 74){
        descriptor = "DID NOT MEET EXPECTATIONS";
        remarks = "FAILED";
      } else {
        avg= "";
        descriptor = "";
        remarks = "";
      }
    // DISPLAY
      document.getElementById("avg").innerHTML =`${avg.toFixed(2)}`;
      document.getElementById("descriptor").innerHTML =`${descriptor}`;
      document.getElementById("remarks").innerHTML = `${remarks}`;
    }