
var rock = document.querySelector("#rock"); 
var paper = document.querySelector("#paper"); 
var scissor = document.querySelector("#scissor"); 

// the preference model defines the hierarchy of game objects, left value is preferred over the right value. 
const preference_model = {
    "rock": "scissor", 
    "paper": "rock",
    "scissor": "paper", 
}

const object_choices = ["rock", "paper", "scissor"]; 

function get_computer_choice(){

    var random_index = Math.floor(Math.random() * object_choices.length) 

    return object_choices[random_index] 
}

function get_player_choice(){

    var user_choice = prompt("pick a choice from rock, paper, scissor").toLowerCase();
    
    if(object_choices.includes(user_choice)){
        return user_choice; 
    }else{
        window.alert("please select a valid choice from: rock, paper, scissor");
        get_player_choice(); 
    }

}

// return the string of winning or loosing from the perspective of the user. 
function user_won(user_choice, computer_choice){

    var preferred_choice = preference_model[computer_choice]; 

    if(user_choice === preferred_choice){
        return true; 
    }else{
        return false; 
    }
    
}

//todo: add a scoring system and a type check to alert for nul entries from user.
function main(){

    var user_score = 0; 
    var computer_score = 0; 
    for(i = 0; i < 5; i ++){
        var computer_choice = get_computer_choice() 

        var user_choice = get_player_choice(); 

        if(user_won(user_choice, computer_choice)){
            user_score++; 
        }else{
            computer_score++;
        }   
       
        console.log(`${user_score}, ${computer_score}`);
    }


}

main(); 