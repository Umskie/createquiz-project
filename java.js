const myquiz = (event)=> {
event.preventDefault();
const selected_Opt = document.querySelector("input[name='selected_Opt']:checked").value;
 console.log(selected_Opt)
const showResults = document.getElementById("number-questions")

let finalScore = 0

if(selected_Opt == "correct") {

finalScore = finalScore + 5;
console.log(finalScore);
showResults.innerHTML =  finalScore
}
else {console.log(finalScore)}
showResults.innerHTML =  finalScore
}