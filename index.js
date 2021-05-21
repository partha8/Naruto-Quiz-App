var readlineSync= require('readline-sync');
 var username=readlineSync.question('May I know your Name? ');

 console.log('Hi ' + username + '!\n');

 console.log("Welcome to the ultimate Naruto Quiz! \n");
var score=0;

//user scores
var scores=[
  {
    name:'Partha',
    score: 6
  },
  {
    name: 'Rohan',
    score: 7,
  }
]

//Question bank
var questions = [
  {
    id:1,
    question: "What's Naruto's mum's name?\na.Kushina\nb.Kurama\nc.Haruo\nd.Carol\n\n" ,
    answer:'a',
  },
  {
    id:2,
    question:"How many tails does Kurama have?\na.6\nb.4\nc.9\nd.11\n\n",
    answer:'c'
  },
  {
    id:3,
    question:"What's the name of the leader of the toads?\na.Wise toad sage\nb.Great toad sage\nc.Giant toad king\nd.Master froggo\n\n",
    answer:'b',
  },
  {
    id:4,
    question: "Who does Naruto eventually marry?\na.Temari\nb.Hinata\nc.Tenten\nd.Sakura\n\n",
    answer: 'b'
  },
    {
      id:5,
    question: "Who was Naruto's teacher?\na.Sakura\nb.Iruka\nc.Sasuke\nd.Minato\n\n",
    answer: 'b'
  },
    {
      id:6,
    question: "Which of these is NOT a member of the Nara clan?\na.Jiraiya\nb.Yoshino\nc.Shikaku\nd.Ensui\n\n",
    answer: 'a'
  },
    {
      id:7,
    question: "Which of these people has been Hokage the most?\na.Hashirama\nb.Kakashi Hatake\nc.Hiruzen Sarutobi\nd.Tsunade\n\n",
    answer: 'c'
  },
    {
      id:8,
    question: "Which friend died during the Fourth Great War?\na.Neji\nb.Hinata\nc.Choji\nd.Shikamaru\n\n",
    answer: 'a'
  },
      {
      id:9,
    question: "Who is the first enemy Naruto faces?\na.Mizuki\nb.Orochimaru\nc.Zabuza\nd.Kabuto\n\n",
    answer: 'a'
  },
      {
      id:10,
    question: "Who was the youngest Jonin?\na.Hinata\nb.Kakashi\nc.Itachi\nd.Shikamaru\n\n",
    answer: 'b'
  },
];

// function to ask the questions
 function play(id,question,answer){
   console.log('Question #'+id);
   var ans=readlineSync.question(question);
   if(ans.toUpperCase()==answer.toUpperCase()){
     console.log('CORRECT!');
     score++;
   }
   else{
     console.log('Wrong ;( ');
   }
   console.log(`Your current score is ${score}`);
   console.log('_____________________ \n')

 }


//for loop to loop through different questions
for (var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.id,currentQuestion.question,currentQuestion.answer);
}

// code to check highscore
var highestScore=0;

for(var i=0;i<scores.length;i++){
  var userScore=scores[i];
  if(highestScore<userScore.score){
    highestScore=userScore.score;
  }
}
if(score>highestScore){
  console.log('You got the highest score!!');
}

console.log('Your final score is '+score);
console.log('_________________________________________________________________')