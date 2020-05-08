const max_score=10;
const max_ques=3;
let questionnaire=document.getElementById("question");
let choice=Array.from(document.getElementsByClassName("choice-text"));
let selectques=document.getElementById("question_counter");
let selectscore=document.getElementById("score");
console.log("q",questionnaire);
console.log("choice",choice);
let current_ques ={};
let copy_ques=[];
let questions=[
{
	ques:"Do you think eating ginger can prevent corona??",
	choice1:"Yes",
	choice2:"No",
	answer:"2"
},
{
	ques:"Do you think hot weather can prevent corona??",
	choice1:"Yes",
	choice2:"No",
	answer:"2"
},
{
	ques:"Do you think lock-down is a good decision??",
	choice1:"Yes",
	choice2:"No",
	answer:"1"
}

]
console.log(questions);
let question_counter=0;
let score=0;
copy_ques=[...questions];
start_game = () =>
{
	score=0;
	copy_ques=[];
	question_counter=0;
	set_new_ques();
};
set_new_ques = () =>
{
 
 if (question_counter >= max_ques || questions.length ===0 ) {
 	return window.location.assign("end.html");
 }
 
 	current_ques=questions[question_counter];
 	questionnaire.innerText=current_ques.ques;
 	question_counter++;
 	selectques.innerText=`${question_counter}/${max_ques}`;
 
 choice.forEach(i =>
 {
 	const number=i.dataset["number"];
 	i.innerText=current_ques["choice"+number];
 });


};
choice.forEach(i => {

	i.addEventListener("click",e =>{
 const selectchoice=e.target;
 const selectanswer=selectchoice.dataset["number"];
 let newclass="incorrect";
 const ans=selectanswer===current_ques.answer;
 if(ans)
 {
  newclass="correct";
  increment_score(max_score);
 }
 
 selectchoice.parentElement.classList.add(newclass);
 setTimeout(() =>
 {
    selectchoice.parentElement.classList.remove(newclass);
 
  set_new_ques();
 },1000);
 
});
});
 increment_score =(num) =>
 {
 	score=score+num;
 	selectscore.innerText=score;
 }


start_game();