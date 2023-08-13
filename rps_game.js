
// the preference model defines the hierarchy of game objects, left value is preferred over the right value. 
const preference_model = {
    "scissor": "rock",
    "rock": "paper",
    "paper":"scissor",
}

const object_choices = ["rock", "paper", "scissor"];

var user_score = 0;
var computer_score = 0;

function get_computer_choice() {

    var random_index = Math.floor(Math.random() * object_choices.length)

    return object_choices[random_index]
}

function get_player_choice(e) {

    var user_choice = e.target.id

    if (Object.keys(preference_model).includes(user_choice)) {
        return user_choice;
    } else {
        window.alert("please select a valid choice from: rock, paper, scissor");
        get_player_choice();
    }

}


function user_won(user_choice, computer_choice) {

    var preferred_choice = preference_model[computer_choice];

    console.log(`user_choice = ${user_choice}`); 
    console.log(`computer_choice = ${computer_choice}`);
    console.log(`preference_model_result = ${preferred_choice}`); 

    if (user_choice === preferred_choice) {
        return true;
    } else {
        return false;
    }

}

function playRound(e) {

    if(user_score >=5 || computer_score >=5){
        console.log("game over"); 
        winner_update(); 
        return; 
    }

    var user_choice = get_player_choice(e);
    var computer_choice = get_computer_choice();

    if (user_won(user_choice, computer_choice)) {
        user_score++;
    } else {
        computer_score++;
    }

    score_update(); 

    console.log(`current score: ${user_score}: ${computer_score}`);

}

function winner_update(){
    var message = document.querySelector(".winner_box > #message");

    if(user_score >= 5){
        message.textContent = "You won"; 
    }else{
        message.textContent = "You lost"; 
    }

    return 
}

function score_update(){
    var user = document.querySelector(".score > h2 > #user_score");
    var computer = document.querySelector(".score > h2 > #computer_score"); 

    user.textContent = user_score; 
    computer.textContent = computer_score; 
}


function main() {

    var rock = document.querySelector("#rock");
    var paper = document.querySelector("#paper");
    var scissor = document.querySelector("#scissor");

    rock.addEventListener('click', playRound);
    paper.addEventListener('click', playRound);
    scissor.addEventListener('click', playRound);

}

main(); 