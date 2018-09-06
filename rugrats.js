$('#usernameButton').click(function () {
  var enteredUsername = $('#usernameInput').val();
  $('.username').html(enteredUsername);
  $('.username').css('font-weight', 'bold');
  $('.username').css('color', '#3A37C8');
  $('.usernameDiv').css('display', 'none');
})

var picArray = [
  "images/tommy.png", "images/angelica.png", "images/chuckie.png", "images/dil.png", "images/kimi.png", "images/susie.png", "images/spike.png"
];


$(document).ready(function () {
  $("#themeMusic").get(0).play();
});




const questionsInfo = [
  {
    question: "What does Angelica demand at 4:00 AM when she has a broken leg?",
    ans1: "Chocolate Pudding",
    ans2: "The Family Room TV",
    ans3: "Tommy's Ball",
    id: "cat1.100",
    pointVal: 100,
    answer: "thirdBttn"
  },
  {
    question: "Who said it? -I haven't eaten since the last time I eated.-",
    ans1: "Spike",
    ans2: "Angelica",
    ans3: "Phil",
    id: "cat2.100",
    pointVal: 100,
    answer: "thirdBttn"
  },
  {
    question: "What was Chuckie's first word spoken to grown-ups?",
    ans1: "Hello",
    ans2: "Yes",
    ans3: "No",
    id: "cat3.100",
    pointVal: 100,
    answer: "thirdBttn"
  },
  {
    question: "Which isn’t a rugrats movie?",
    ans1: "Rugrats Grown Up",
    ans2: "Rugrats Go Wild",
    ans3: "Rugrats in Paris",
    id: "cat4.100",
    pointVal: 100,
    answer: "firstBttn"
  },
  {
    question: "What is the name of Angelica's cat?",
    ans1: "Fluffy",
    ans2: "Snowflake",
    ans3: "Princess",
    id: "cat1.200",
    pointVal: 200,
    answer: "#firstBttn"
  },
  {
    question: "Who said it? -Take a nap and keep us both out of trouble.-",
    ans1: "Chuckie",
    ans2: "Grandpa",
    ans3: "Tommy",
    id: "cat2.200",
    pointVal: 200,
    answer: "secondBttn"
  },
  {
    question: "What is the name of Chuckie's bug that dies?",
    ans1: "Mellville",
    ans2: "Melvin",
    ans3: "Calvin",
    id: "cat3.200",
    pointVal: 200,
    answer: "firstBttn"
  },
  {
    question: "What do the rugrats call coffee?",
    ans1: "Kofe",
    ans2: "Jobe",
    ans3: "Wakey Juice",
    id: "cat4.200",
    pointVal: 200,
    answer: "secondBttn"
  },
  {
    question: "What does Angelica get from the Tooth Fairy for her tooth?",
    ans1: "A Penny",
    ans2: "A Note",
    ans3: "A Dime",
    id: "cat1.400",
    pointVal: 400,
    answer: "#thirdBttn"
  },
  {
    question: "Who said it? -Tommy do you still think we're brothers?-",
    ans1: "Kimi",
    ans2: "Chuckie",
    ans3: "Lil",
    id: "cat2.400",
    pointVal: 400,
    answer: "secondBttn"
  },
  {
    question: "Which planet was on Chuckie's shirt?",
    ans1: "Earth",
    ans2: "Uranus",
    ans3: "Saturn",
    id: "cat3.400",
    pointVal: 400,
    answer: "thirdBttn"
  },
  {
    question: "Where was Rugrats based out of?",
    ans1: "California",
    ans2: "Arizona",
    ans3: "Florida",
    id: "cat3.800",
    pointVal: 800,
    answer: "firstBttn"
  },
  {
    question: "Angelica diagnoses Chuckie with what illness?",
    ans1: "Clownophobia",
    ans2: "Rhinoceritis",
    ans3: "Reptar fever",
    id: "cat1.800",
    pointVal: 800,
    answer: "#secondBttn"
  },
  {
    question: "Who said it? -Nakie is good. Nakie is free. Nakie is nakie!-",
    ans1: "Phil",
    ans2: "Chuckie",
    ans3: "Tommy",
    id: "cat2.800",
    pointVal: 800,
    answer: "thirdBttn"
  },
  {
    question: "Which isn't something that Chuckie is afraid of??",
    ans1: "Santa",
    ans2: "Jello",
    ans3: "Musical Chairs",
    id: "cat3.800",
    pointVal: 800,
    answer: "secondBttn"
  },
  {
    question: "How many years did Rugrats run on Nickelodeon?",
    ans1: "8",
    ans2: "22",
    ans3: "14",
    id: "cat4.800",
    pointVal: 800,
    answer: "thirdBttn"
  }
]


// var userscore = 0;
var ansBttnValue = $('.ansBttn').attr("id")
var ansValue = Object.values(questionsInfo);




// var cat1_1 = {
//   question: "What does Angelica demand at 4:00 AM when she has a broken leg?",
//   ans1: "Chocolate Pudding",
//   ans2: "The Family Room TV",
//   ans3: "Tommy's Ball",
//   id: "cat1.100",
//   pointVal: 100,
//   answer: "thirdBttn"
// }

$('#r1c1').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[0].pointVal);
  $('#ques').html(questionsInfo[0].question);
  $('#firstBttn').html(questionsInfo[0].ans1);
  $('#secondBttn').html(questionsInfo[0].ans2);
  $('#thirdBttn').html(questionsInfo[0].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r1c1").css("pointer-events", "none");
  $("#r1c1").css("border", "solid red");
  $("#r1c1").css('opacity', '0');
  $("audio#questionAudio")[0].play();
  // var ansValue = questionsInfo[0].answer;
  // console.log(ansValue)
})

// var cat1_2 = {
//   question: "Who said it? -I haven't eaten since the last time I eated.-",
//   ans1: "Spike",
//   ans2: "Angelica",
//   ans3: "Phil",
//   id: "cat2.100",
//   pointVal: 100,
//   answer: "thirdBttn"
// }

$('.ansBttn').click(function () {
console.log(ansBttnValue);
console.log(ansValue);
  if ($(ansBttnValue) == (ansValue)) {
    alert("correct")
    userscore = userscore + questionsInfo.pointVal;
  }
  else {
    alert("sorry incorrect");
    userscore = userscore - questionsInfo.pointVal;
    console.log(userscore)
    $('.userscore span').html(userscore);
  };
  $('.questionDiv').css('display', 'none');
  $("#charDiv").removeAttr('style');
  $("audio#questionAudio")[0].pause();
  $("audio#questionAudio")[0].currentTime = 0;
})


$('#r1c2').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[1].pointVal);
  $('#ques').html(questionsInfo[1].question);
  $('#firstBttn').html(questionsInfo[1].ans1);
  $('#secondBttn').html(questionsInfo[1].ans2);
  $('#thirdBttn').html(questionsInfo[1].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r1c2").css("pointer-events", "none");
  $("#r1c2").css("border", "solid red");
  $("#r1c2").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat1_3 = {
//   question: "What was Chuckie's first word spoken to grown-ups?",
//   ans1: "Hello",
//   ans2: "Yes",
//   ans3: "No",
//   id: "cat3.100",
//   pointVal: 100,
//   answer: "thirdBttn"
// }


$('#r1c3').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[2].pointVal);
  $('#ques').html(questionsInfo[2].question);
  $('#firstBttn').html(questionsInfo[2].ans1);
  $('#secondBttn').html(questionsInfo[2].ans2);
  $('#thirdBttn').html(questionsInfo[2].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r1c3").css("pointer-events", "none");
  $("#r1c3").css("border", "solid red");
  $("#r1c3").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat1_4 = {
//   question: "Which isn’t a rugrats movie?",
//   ans1: "Rugrats Grown Up",
//   ans2: "Rugrats Go Wild",
//   ans3: "Rugrats in Paris",
//   id: "cat4.100",
//   pointVal: 100,
//   answer: "firstBttn"
// }


$('#r1c4').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[3].pointVal);
  $('#ques').html(questionsInfo[3].question);
  $('#firstBttn').html(questionsInfo[3].ans1);
  $('#secondBttn').html(questionsInfo[3].ans2);
  $('#thirdBttn').html(questionsInfo[3].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r1c4").css("pointer-events", "none");
  $("#r1c4").css("border", "solid red");
  $("#r1c4").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat2_1 = {
//   question: "What is the name of Angelica's cat?",
//   ans1: "Fluffy",
//   ans2: "Snowflake",
//   ans3: "Princess",
//   id: "cat1.200",
//   pointVal: 200,
//   answer: "#firstBttn"
// }

$('#r2c1').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[4].pointVal);
  $('#ques').html(questionsInfo[4].question);
  $('#firstBttn').html(questionsInfo[4].ans1);
  $('#secondBttn').html(questionsInfo[4].ans2);
  $('#thirdBttn').html(questionsInfo[4].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r2c1").css("pointer-events", "none");
  $("#r2c1").css("border", "solid red");
  $("#r2c1").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat2_2 = {
//   question: "Who said it? -Take a nap and keep us both out of trouble.-",
//   ans1: "Chuckie",
//   ans2: "Grandpa",
//   ans3: "Tommy",
//   id: "cat2.200",
//   pointVal: 200,
//   answer: "secondBttn"
// }


$('#r2c2').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[5].pointVal);
  $('#ques').html(questionsInfo[5].question);
  $('#firstBttn').html(questionsInfo[5].ans1);
  $('#secondBttn').html(questionsInfo[5].ans2);
  $('#thirdBttn').html(questionsInfo[5].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r2c2").css("pointer-events", "none");
  $("#r2c2").css("border", "solid red");
  $("#r2c2").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat2_3 = {
//   question: "What is the name of Chuckie's bug that dies?",
//   ans1: "Mellville",
//   ans2: "Melvin",
//   ans3: "Calvin",
//   id: "cat3.200",
//   pointVal: 200,
//   answer: "firstBttn"
// }

$('#r2c3').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[6].pointVal);
  $('#ques').html(questionsInfo[6].question);
  $('#firstBttn').html(questionsInfo[6].ans1);
  $('#secondBttn').html(questionsInfo[6].ans2);
  $('#thirdBttn').html(questionsInfo[6].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r2c3").css("pointer-events", "none");
  $("#r2c3").css("border", "solid red");
  $("#r2c3").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat2_4 = {
//   question: "What do the rugrats call coffee?",
//   ans1: "Kofe",
//   ans2: "Jobe",
//   ans3: "Wakey Juice",
//   id: "cat4.200",
//   pointVal: 200,
//   answer: "secondBttn"
// }

$('#r2c4').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[7].pointVal);
  $('#ques').html(questionsInfo[7].question);
  $('#firstBttn').html(questionsInfo[7].ans1);
  $('#secondBttn').html(questionsInfo[7].ans2);
  $('#thirdBttn').html(questionsInfo[7].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r2c4").css("pointer-events", "none");
  $("#r2c4").css("border", "solid red");
  $("#r2c4").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat3_1 = {
//   question: "What does Angelica get from the Tooth Fairy for her tooth?",
//   ans1: "A Penny",
//   ans2: "A Note",
//   ans3: "A Dime",
//   id: "cat1.400",
//   pointVal: 400,
//   answer: "#thirdBttn"
// }


$('#r3c1').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[8].pointVal);
  $('#ques').html(questionsInfo[8].question);
  $('#firstBttn').html(questionsInfo[8].ans1);
  $('#secondBttn').html(questionsInfo[8].ans2);
  $('#thirdBttn').html(questionsInfo[8].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r3c1").css("pointer-events", "none");
  $("#r3c1").css("border", "solid red");
  $("#r3c1").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat3_2 = {
//   question: "Who said it? -Tommy do you still think we're brothers?-",
//   ans1: "Kimi",
//   ans2: "Chuckie",
//   ans3: "Lil",
//   id: "cat2.400",
//   pointVal: 400,
//   answer: "secondBttn"
// }

$('#r3c2').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[9].pointVal);
  $('#ques').html(questionsInfo[9].question);
  $('#firstBttn').html(questionsInfo[9].ans1);
  $('#secondBttn').html(questionsInfo[9].ans2);
  $('#thirdBttn').html(questionsInfo[9].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r3c2").css("pointer-events", "none");
  $("#r3c2").css("border", "solid red");
  $("#r3c2").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat3_3 = {
//   question: "Which planet was on Chuckie's shirt?",
//   ans1: "Earth",
//   ans2: "Uranus",
//   ans3: "Saturn",
//   id: "cat3.400",
//   pointVal: 400,
//   answer: "thirdBttn"
// }

$('#r3c3').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[10].pointVal);
  $('#ques').html(questionsInfo[10].question);
  $('#firstBttn').html(questionsInfo[10].ans1);
  $('#secondBttn').html(questionsInfo[10].ans2);
  $('#thirdBttn').html(questionsInfo[10].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r3c3").css("pointer-events", "none");
  $("#r3c3").css("border", "solid red");
  $("#r3c3").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat3_4 = {
//   question: "Where was Rugrats based out of?",
//   ans1: "California",
//   ans2: "Arizona",
//   ans3: "Florida",
//   id: "cat3.800",
//   pointVal: 800,
//   answer: "firstBttn"
// }

$('#r3c4').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[11].pointVal);
  $('#ques').html(questionsInfo[11].question);
  $('#firstBttn').html(questionsInfo[11].ans1);
  $('#secondBttn').html(questionsInfo[11].ans2);
  $('#thirdBttn').html(questionsInfo[11].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r3c4").css("pointer-events", "none");
  $("#r3c4").css("border", "solid red");
  $("#r3c4").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat4_1 = {
//   question: "Angelica diagnoses Chuckie with what illness?",
//   ans1: "Clownophobia",
//   ans2: "Rhinoceritis",
//   ans3: "Reptar fever",
//   id: "cat1.800",
//   pointVal: 800,
//   answer: "#secondBttn"
// }


$('#r4c1').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[12].pointVal);
  $('#ques').html(questionsInfo[12].question);
  $('#firstBttn').html(questionsInfo[12].ans1);
  $('#secondBttn').html(questionsInfo[12].ans2);
  $('#thirdBttn').html(questionsInfo[12].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r4c1").css("pointer-events", "none");
  $("#r4c1").css("border", "solid red");
  $("#r4c1").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat4_2 = {
//   question: "Who said it? -Nakie is good. Nakie is free. Nakie is nakie!-",
//   ans1: "Phil",
//   ans2: "Chuckie",
//   ans3: "Tommy",
//   id: "cat2.800",
//   pointVal: 800,
//   answer: "thirdBttn"
// }

$('#r4c2').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[13].pointVal);
  $('#ques').html(questionsInfo[13].question);
  $('#firstBttn').html(questionsInfo[13].ans1);
  $('#secondBttn').html(questionsInfo[13].ans2);
  $('#thirdBttn').html(questionsInfo[13].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r4c2").css("pointer-events", "none");
  $("#r4c2").css("border", "solid red");
  $("#r4c2").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat4_3 = {
//   question: "Which isn't something that Chuckie is afraid of??",
//   ans1: "Santa",
//   ans2: "Jello",
//   ans3: "Musical Chairs",
//   id: "cat3.800",
//   pointVal: 800,
//   answer: "secondBttn"
// }

$('#r4c3').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[14].pointVal);
  $('#ques').html(questionsInfo[14].question);
  $('#firstBttn').html(questionsInfo[14].ans1);
  $('#secondBttn').html(questionsInfo[14].ans2);
  $('#thirdBttn').html(questionsInfo[14].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r4c3").css("pointer-events", "none");
  $("#r4c3").css("border", "solid red");
  $("#r4c3").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})

// var cat4_4 = {
//   question: "How many years did Rugrats run on Nickelodeon?",
//   ans1: "8",
//   ans2: "22",
//   ans3: "14",
//   id: "cat4.800",
//   pointVal: 800,
//   answer: "thirdBttn"
// }


$('#r4c4').click(function () {
  var randomItem = picArray[Math.floor(Math.random() * picArray.length)];
  $('.questionDiv').css('display', 'block');
  $('.amount').html(questionsInfo[15].pointVal);
  $('#ques').html(questionsInfo[15].question);
  $('#firstBttn').html(questionsInfo[15].ans1);
  $('#secondBttn').html(questionsInfo[15].ans2);
  $('#thirdBttn').html(questionsInfo[15].ans3);
  $('#quesChar').attr('src', '../' + randomItem);
  $('#charDiv').animate({ marginRight: "18vw" }, 1200);
  $("#r4c4").css("pointer-events", "none");
  $("#r4c4").css("border", "solid red");
  $("#r4c4").css('opacity', '0');
  $("audio#questionAudio")[0].play();
})