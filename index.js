var readlineSync=require("readline-sync");
var score=0;
var username=readlineSync.question("Are you a programmer? What is your name ");
console.log(username+" That's great")
function play(question,answer){
  var useranswer=readlineSync.question(question);
  if(useranswer===answer){
    console.log("right!");
    score=score+1;
  }
  else{
    console.log("wrong!");
    score=score-1;
  }
  console.log("Current score:" ,score);
  console.log("------------")
}
var questions=[{
  question:"what does oops stands for? ",
  answer:"object oriented programming"
},
{
  question:"how many types of inheritance are there? ",
  answer:"four"
},{
  question:"Is java platform independent? ",
  answer:"yes"
},{
  question:"what is the memory size of int var? ",
  answer:"4byte",
},{
  question:"can you name all types of loops ",
  answer:"for while dowhile"
}
  ]
 for(var i=0;i<questions.length;i++){
   var currentq=questions[i];
   play(currentq.question,currentq.answer);
 }
console.log("Yay your final score ",score);