
var rock = document.querySelector("#rock"); 
var paper = document.querySelector("#paper"); 
var scissor = document.querySelector("#scissor"); 

// the preference model defines the hierarchy of game objects, left value is preferred over the right value. 
var preference_model = {
    "rock": "scissor", 
    "paper": "rock",
    "scissor": "paper", 
}


function get_computer_choice(){
    const choices = ["rock", "paper", "scissor"]; 

    var random_index = Math.floor(Math.random() * choices.length) 

    return choices[random_index] 
}

//todo: add a scoring system and a type check to alert for nul entries from user.
//todo: make the user choice case insensitive. 
function main(){
    for(i = 0; i < 5; i ++){
        var computer_choice = get_computer_choice() 

        var user_choice = prompt("pick a choice from rock, paper, scissor: ")

        var preference_value = preference_model[user_choice] 

        if(user_choice == computer_choice){
            console.log(`${user_choice}: ${computer_choice}`)
            console.log("user tied with computer") 
            continue;
        }

        if(computer_choice == preference_value){
            console.log(`${user_choice}: ${computer_choice}`);
            console.log("user won");
        }else{
            console.log(`${user_choice}: ${computer_choice}`)
            console.log("computer won"); 
        }
    }
}

main(); 