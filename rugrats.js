
// alert("does this work");


function getQuestion() {
    document.getElementById('questionDiv').style.display= 'block';
    $('#ques').html("question1.question");
}
 


function moveChar() {
    var elem = document.getElementById("quesChar");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.right = pos + 'px'; 
      }
    }
  }

//  var question1 = {
//     question: "Is this the first question?",
//     ans1: "Maybe",
//     ans2: "Yes",
//     ans3: "No",
//     answer: 2
// }
  
function getUsername() {
    var un = document.getElementById("lpInput").value;
    console.log(un)
    $(document).ready(function(un){
        $('').append(un);
        console.log($("#username"))
    })
}