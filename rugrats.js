// function getUsername() {
//     document.getElementById("lpInput").value;
//     console.log(un)
// $(document).ready(function(un){
//     $('').append(un);
//     console.log($("#username"))
// })
// }

function score(){
  if 
}

$('.ansBttn').click(function () {
  $('.questionDiv').css('display', 'none');
})

var cat1_1 = {
  question: "What does Angelica demand at 4:00 AM when she has a broken leg?",
  ans1: "Chocolate Pudding",
  ans2: "The Family Room TV",
  ans3: "Tommy's Ball",
  id: "cat1.100",
  pointVal: 100,
  answer: "firstBttn"
}

$('#r1c1').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat1_1.pointVal);
  $('#ques').html(cat1_1.question);
  $('#firstBttn').html(cat1_1.ans1);
  $('#secondBttn').html(cat1_1.ans2);
  $('#thirdBttn').html(cat1_1.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
  $('#quesChar').attr('src', '../images/tommy.png');
})

var cat1_2 = {
  question: "Who said it? -I haven't eaten since the last time I eated.-",
  ans1: "Spike",
  ans2: "Angelica",
  ans3: "Phil",
  id: "cat2.100",
  pointVal: 100,
  answer: "thirdBttn"
}



$('#r1c2').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat1_2.pointVal);
  $('#ques').html(cat1_2.question);
  $('#firstBttn').html(cat1_2.ans1);
  $('#secondBttn').html(cat1_2.ans2);
  $('#thirdBttn').html(cat1_2.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat1_3 = {
  question: "What was Chuckie's first word spoken to grown-ups?",
  ans1: "Hello",
  ans2: "Yes",
  ans3: "No",
  id: "cat3.100",
  pointVal: 100,
  answer: "thirdBttn"
}


$('#r1c3').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat1_3.pointVal);
  $('#ques').html(cat1_3.question);
  $('#firstBttn').html(cat1_3.ans1);
  $('#secondBttn').html(cat1_3.ans2);
  $('#thirdBttn').html(cat1_3.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat1_4 = {
  question: "Which isn’t a rugrats movie?",
  ans1: "Rugrats Grown Up",
  ans2: "Rugrats Go Wild",
  ans3: "Rugrats in Paris",
  id: "cat4.100",
  pointVal: 100,
  answer: "firstBttn"
}


$('#r1c4').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat1_4.pointVal);
  $('#ques').html(cat1_4.question);
  $('#firstBttn').html(cat1_4.ans1);
  $('#secondBttn').html(cat1_4.ans2);
  $('#thirdBttn').html(cat1_4.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat2_1 = {
  question: "What is the name of Angelica's cat?",
  ans1: "Fluffy",
  ans2: "Snowflake",
  ans3: "Princess",
  id: "cat1.200",
  pointVal: 200,
  answer: "#firstBttn"
}

$('#r2c1').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat2_1.pointVal);
  $('#ques').html(cat1_2.question);
  $('#firstBttn').html(cat1_2.ans1);
  $('#secondBttn').html(cat1_2.ans2);
  $('#thirdBttn').html(cat1_2.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat2_2 = {
  question: "Who said it? -Take a nap and keep us both out of trouble.-",
  ans1: "Chuckie",
  ans2: "Grandpa",
  ans3: "Tommy",
  id: "cat2.200",
  pointVal: 200,
  answer: "secondBttn"
}


$('#r2c2').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat2_2.pointVal);
  $('#ques').html(cat2_2.question);
  $('#firstBttn').html(cat2_2.ans1);
  $('#secondBttn').html(cat2_2.ans2);
  $('#thirdBttn').html(cat2_2.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat2_3 = {
  question: "What is the name of Chuckie's bug that dies?",
  ans1: "Mellville",
  ans2: "Melvin",
  ans3: "Calvin",
  id: "cat3.200",
  pointVal: 200,
  answer: "firstBttn"
}

$('#r2c3').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat2_3.pointVal);
  $('#ques').html(cat2_3.question);
  $('#firstBttn').html(cat2_3.ans1);
  $('#secondBttn').html(cat2_3.ans2);
  $('#thirdBttn').html(cat2_3.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat2_4 = {
  question: "What do the rugrats call coffee?",
  ans1: "Kofe",
  ans2: "Jobe",
  ans3: "Wakey Juice",
  id: "cat4.200",
  pointVal: 200,
  answer: "secondBttn"
}

$('#r2c4').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat2_4.pointVal);
  $('#ques').html(cat2_4.question);
  $('#firstBttn').html(cat2_4.ans1);
  $('#secondBttn').html(cat2_4.ans2);
  $('#thirdBttn').html(cat2_4.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat3_1 = {
  question: "What does Angelica get from the Tooth Fairy for her tooth?",
  ans1: "A Penny",
  ans2: "A Note",
  ans3: "A Dime",
  id: "cat1.400",
  pointVal: 400,
  answer: "#thirdBttn"
}


$('#r3c1').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat3_1.pointVal);
  $('#ques').html(cat3_1.question);
  $('#firstBttn').html(cat3_1.ans1);
  $('#secondBttn').html(cat3_1.ans2);
  $('#thirdBttn').html(cat3_1.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat3_2 = {
  question: "Who said it? -Tommy do you still think we're brothers?-",
  ans1: "Kimi",
  ans2: "Chuckie",
  ans3: "Lil",
  id: "cat2.400",
  pointVal: 400,
  answer: "secondBttn"
}

$('#r3c2').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat3_2.pointVal);
  $('#ques').html(cat3_2.question);
  $('#firstBttn').html(cat3_2.ans1);
  $('#secondBttn').html(cat3_2.ans2);
  $('#thirdBttn').html(cat3_2.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat3_3 = {
  question: "Which planet was on Chuckie's shirt?",
  ans1: "Earth",
  ans2: "Uranus",
  ans3: "Saturn",
  id: "cat3.400",
  pointVal: 400,
  answer: "thirdBttn"
}

$('#r3c3').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat3_3.pointVal);
  $('#ques').html(cat3_3.question);
  $('#firstBttn').html(cat3_3.ans1);
  $('#secondBttn').html(cat3_3.ans2);
  $('#thirdBttn').html(cat3_3.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat3_4 = {
  question: "Where was Rugrats based out of?",
  ans1: "California",
  ans2: "Arizona",
  ans3: "Florida",
  id: "cat3.800",
  pointVal: 800,
  answer: "firstBttn"
}

$('#r3c4').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat3_4.pointVal);
  $('#ques').html(cat3_4.question);
  $('#firstBttn').html(cat3_4.ans1);
  $('#secondBttn').html(cat3_4.ans2);
  $('#thirdBttn').html(cat3_4.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat4_1 = {
  question: "Angelica diagnoses Chuckie with what illness?",
  ans1: "Clownophobia",
  ans2: "Rhinoceritis",
  ans3: "Reptar fever",
  id: "cat1.800",
  pointVal: 800,
  answer: "#secondBttn"
}


$('#r4c1').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat4_1.pointVal);
  $('#ques').html(cat4_1.question);
  $('#firstBttn').html(cat4_1.ans1);
  $('#secondBttn').html(cat4_1.ans2);
  $('#thirdBttn').html(cat4_1.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat4_2 = {
  question: "Who said it? -Nakie is good. Nakie is free. Nakie is nakie!-",
  ans1: "Phil",
  ans2: "Chuckie",
  ans3: "Tommy",
  id: "cat2.800",
  pointVal: 800,
  answer: "thirdBttn"
}

$('#r4c2').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat4_2.pointVal);
  $('#ques').html(cat4_2.question);
  $('#firstBttn').html(cat4_2.ans1);
  $('#secondBttn').html(cat4_2.ans2);
  $('#thirdBttn').html(cat4_2.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat4_3 = {
  question: "Which isn't something that Chuckie is afraid of??",
  ans1: "Santa",
  ans2: "Jello",
  ans3: "Musical Chairs",
  id: "cat3.800",
  pointVal: 800,
  answer: "secondBttn"
}

$('#r4c3').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat4_3.pointVal);
  $('#ques').html(cat4_3.question);
  $('#firstBttn').html(cat4_3.ans1);
  $('#secondBttn').html(cat4_3.ans2);
  $('#thirdBttn').html(cat4_3.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})

var cat4_4 = {
  question: "How many years did Rugrats run on Nickelodeon?",
  ans1: "8",
  ans2: "22",
  ans3: "14",
  id: "cat4.800",
  pointVal: 800,
  answer: "thirdBttn"
}


$('#r4c4').click(function () {
  $('.questionDiv').css('display', 'block');
  $('.amount').html(cat4_4.pointVal);
  $('#ques').html(cat4_4.question);
  $('#firstBttn').html(cat4_4.ans1);
  $('#secondBttn').html(cat4_4.ans2);
  $('#thirdBttn').html(cat4_4.ans3);
  $('#charDiv').animate({marginRight:"200px"}, 800);
})