// username input on click of input button
$('#usernameButton').click(function () {
  var enteredUsername = $('#usernameInput').val();
  $('.username').html(enteredUsername);
  $('.username').css('font-weight', 'bold');
  $('.username').css('color', '#3A37C8');
  $('.usernameDiv').css('display', 'none');
})


// username input on enter in input field
$('#usernameInput').bind("enterKey", function (e) {
  var enteredUsername = $('#usernameInput').val();
  $('.username').html(enteredUsername);
  $('.username').css('font-weight', 'bold');
  $('.username').css('color', '#3A37C8');
  $('.usernameDiv').css('display', 'none');
});
$('#usernameInput').keyup(function (e) {
  if (e.keyCode == 13) {
    $(this).trigger("enterKey");
  }
});

// random pic for question div
var picArray = [
  "images/tommy.png", "images/angelica.png", "images/chuckie.png", "images/dil.png", "images/kimi.png", "images/susie.png", "images/spike.png"
];

// theme music on homepage
$(document).ready(function () {
  $("#themeMusic").get(0).play();
});

// beginning of questiondivs
var userscore = 0;
var compuscore = 0;

var cat1_1 = {
  id: "cat1.100",
  pointVal: 100,
  answer: "firstBttn"
}

$('#r1c1').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr1c1').css('display', 'block');
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r1c1").css("pointer-events", "none");
  $("#r1c1").css("border", "solid red");
  $("#r1c1").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})


$('#questionDivr1c1 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat1_1.answer
  var answerValue = cat1_1.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    console.log(answerValue)
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  console.log(computerRandomNum);
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };    
  
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };


  $('#questionDivr1c1').css('display', 'none');
  $("#charDiv").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})


var cat1_2 = {
  id: "cat2.100",
  pointVal: 100,
  answer: "thirdBttn"
}

$('#r1c2').click(function () {
  var randomItem1 = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr1c2').css('display', 'block');
  $('#quesChar2').attr('src', '../' + randomItem1);
  $('#charDiv2').animate({ marginRight: "18vw" }, 1200);
  $("#r1c2").css("pointer-events", "none");
  $("#r1c2").css("border", "solid red");
  $("#r1c2").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr1c2 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat1_2.answer
  var answerValue = cat1_2.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    console.log(answerValue)
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };

  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr1c2').css('display', 'none');
  $("#charDiv2").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})


var cat1_3 = {
  id: "cat3.100",
  pointVal: 100,
  answer: "thirdBttn"
}


$('#r1c3').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr1c3').css('display', 'block');
  $('#quesChar3').attr('src', '../' + randomItem);
  $('#charDiv3').animate({ marginRight: "18vw" }, 1200);
  $("#r1c3").css("pointer-events", "none");
  $("#r1c3").css("border", "solid red");
  $("#r1c3").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr1c3 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat1_3.answer
  var answerValue = cat1_3.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    console.log(answerValue)
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr1c3').css('display', 'none');
  $("#charDiv3").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat1_4 = {
  id: "cat4.100",
  pointVal: 100,
  answer: "firstBttn"
}


$('#r1c4').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr1c4').css('display', 'block');
  $('#quesChar4').attr('src', '../' + randomItem);
  $('#charDiv4').animate({ marginRight: "18vw" }, 1200);
  $("#r1c4").css("pointer-events", "none");
  $("#r1c4").css("border", "solid red");
  $("#r1c4").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr1c4 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat1_4.answer
  var answerValue = cat1_4.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr1c4').css('display', 'none');
  $("#charDiv4").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat2_1 = {
  id: "cat1.200",
  pointVal: 200,
  answer: "#firstBttn"
}

$('#r2c1').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr2c1').css('display', 'block');
  $('#quesChar5').attr('src', '../' + randomItem);
  $('#charDiv5').animate({ marginRight: "18vw" }, 1200);
  $("#r2c1").css("pointer-events", "none");
  $("#r2c1").css("border", "solid red");
  $("#r2c1").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr2c1 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat2_1.answer
  var answerValue = cat2_1.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr2c1').css('display', 'none');
  $("#charDiv5").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat2_2 = {
  id: "cat2.200",
  pointVal: 200,
  answer: "secondBttn"
}


$('#r2c2').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr2c2').css('display', 'block');
  $('#quesChar6').attr('src', '../' + randomItem);
  $('#charDiv6').animate({ marginRight: "18vw" }, 1200);
  $("#r2c2").css("pointer-events", "none");
  $("#r2c2").css("border", "solid red");
  $("#r2c2").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr2c2 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat2_2.answer
  var answerValue = cat2_2.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr2c2').css('display', 'none');
  $("#charDiv6").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat2_3 = {
  id: "cat3.200",
  pointVal: 200,
  answer: "firstBttn"
}

$('#r2c3').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr2c3').css('display', 'block');
  $('#quesChar7').attr('src', '../' + randomItem);
  $('#charDiv7').animate({ marginRight: "18vw" }, 1200);
  $("#r2c3").css("pointer-events", "none");
  $("#r2c3").css("border", "solid red");
  $("#r2c3").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr2c3 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat2_3.answer
  var answerValue = cat2_3.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr2c3').css('display', 'none');
  $("#charDiv7").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat2_4 = {
  id: "cat4.200",
  pointVal: 200,
  answer: "secondBttn"
}

$('#r2c4').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr2c4').css('display', 'block');
  $('#quesChar8').attr('src', '../' + randomItem);
  $('#charDiv8').animate({ marginRight: "18vw" }, 1200);
  $("#r2c4").css("pointer-events", "none");
  $("#r2c4").css("border", "solid red");
  $("#r2c4").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr2c4 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat2_4.answer
  var answerValue = cat2_4.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr2c4').css('display', 'none');
  $("#charDiv8").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat3_1 = {
  id: "cat1.400",
  pointVal: 400,
  answer: "thirdBttn"
}


$('#r3c1').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr3c1').css('display', 'block');
  $('#quesChar9').attr('src', '../' + randomItem);
  $('#charDiv9').animate({ marginRight: "18vw" }, 1200);
  $("#r3c1").css("pointer-events", "none");
  $("#r3c1").css("border", "solid red");
  $("#r3c1").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr3c1 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat3_1.answer
  var answerValue = cat3_1.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr3c1').css('display', 'none');
  $("#charDiv9").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat3_2 = {
  id: "cat2.400",
  pointVal: 400,
  answer: "secondBttn"
}

$('#r3c2').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr3c2').css('display', 'block');
  $('#quesChar10').attr('src', '../' + randomItem);
  $('#charDiv10').animate({ marginRight: "18vw" }, 1200);
  $("#r3c2").css("pointer-events", "none");
  $("#r3c2").css("border", "solid red");
  $("#r3c2").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr3c2 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat3_2.answer
  var answerValue = cat3_2.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr3c2').css('display', 'none');
  $("#charDiv10").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat3_3 = {
  id: "cat3.400",
  pointVal: 400,
  answer: "thirdBttn"
}

$('#r3c3').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr3c3').css('display', 'block');
  $('#quesChar11').attr('src', '../' + randomItem);
  $('#charDiv11').animate({ marginRight: "18vw" }, 1200);
  $("#r3c3").css("pointer-events", "none");
  $("#r3c3").css("border", "solid red");
  $("#r3c3").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr3c3 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat3_3.answer
  var answerValue = cat3_3.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr3c3').css('display', 'none');
  $("#charDiv11").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat3_4 = {
  id: "cat3.400",
  pointVal: 400,
  answer: "firstBttn"
}

$('#r3c4').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr3c4').css('display', 'block');
  $('#quesChar12').attr('src', '../' + randomItem);
  $('#charDiv12').animate({ marginRight: "18vw" }, 1200);
  $("#r3c4").css("pointer-events", "none");
  $("#r3c4").css("border", "solid red");
  $("#r3c4").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr3c4 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat3_4.answer
  var answerValue = cat3_4.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr3c4').css('display', 'none');
  $("#charDiv12").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat4_1 = {
  id: "cat1.800",
  pointVal: 800,
  answer: "secondBttn"
}


$('#r4c1').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr4c1').css('display', 'block');
  $('#quesChar13').attr('src', '../' + randomItem);
  $('#charDiv13').animate({ marginRight: "18vw" }, 1200);
  $("#r4c1").css("pointer-events", "none");
  $("#r4c1").css("border", "solid red");
  $("#r4c1").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr4c1 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat4_1.answer
  var answerValue = cat4_1.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr4c1').css('display', 'none');
  $("#charDiv13").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat4_2 = {
  id: "cat2.800",
  pointVal: 800,
  answer: "thirdBttn"
}

$('#r4c2').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr4c2').css('display', 'block');
  $('#quesChar14').attr('src', '../' + randomItem);
  $('#charDiv14').animate({ marginRight: "18vw" }, 1200);
  $("#r4c2").css("pointer-events", "none");
  $("#r4c2").css("border", "solid red");
  $("#r4c2").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr4c2 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat4_2.answer
  var answerValue = cat4_2.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr4c2').css('display', 'none');
  $("#charDiv14").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat4_3 = {
  id: "cat3.800",
  pointVal: 800,
  answer: "secondBttn"
}

$('#r4c3').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr4c3').css('display', 'block');
  $('#quesChar15').attr('src', '../' + randomItem);
  $('#charDiv15').animate({ marginRight: "18vw" }, 1200);
  $("#r4c3").css("pointer-events", "none");
  $("#r4c3").css("border", "solid red");
  $("#r4c3").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr4c3 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat4_3.answer
  var answerValue = cat4_3.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr4c3').css('display', 'none');
  $("#charDiv15").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})

var cat4_4 = {
  id: "cat4.800",
  pointVal: 800,
  answer: "thirdBttn"
}


$('#r4c4').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('#questionDivr4c4').css('display', 'block');
  $('#quesChar16').attr('src', '../' + randomItem);
  $('#charDiv16').animate({ marginRight: "18vw" }, 1200);
  $("#r4c4").css("pointer-events", "none");
  $("#r4c4").css("border", "solid red");
  $("#r4c4").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

$('#questionDivr4c4 .ansBttn').click(function (e) {
  var idClicked = e.target.id;
  var answer = cat4_4.answer
  var answerValue = cat4_4.pointVal
  var computerRandomNum = Math.floor((Math.random() * 2) + 1);
  var computerRightAns = 2
  if (idClicked === answer) {
    swal("Correct", "Good Job!", "success");
    userscore = userscore + answerValue;
    $('.userscore span').html(userscore);
  }
  else {
    swal("Incorrect!", "Awww, Next Tme!", "error");
    userscore = userscore - answerValue;
    $('.userscore span').html(userscore);
  };
  if (computerRandomNum === computerRightAns) {
    compuscore = compuscore + answerValue
    $('.compuscore span').html(compuscore);
  }
  else {
    compuscore = compuscore - answerValue
    $('.compuscore span').html(compuscore);
  };
  if (compuscore >=2500 && userscore >=2500){
    $('.gameBoard').css('display', 'none');
    $('.tieDiv').css('display', 'block');
  }
  else if(userscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.winnerDiv').css('display', 'block');
  }
  else if (compuscore>=2500){
    $('.gameBoard').css('display', 'none');
    $('.loserDiv').css('display', 'block');
  };
  $('#questionDivr4c4').css('display', 'none');
  $("#charDiv16").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})
// end of questiondivs