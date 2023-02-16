
//For making sound using clicking
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    
});
}

//For making sound using keyboard
document.addEventListener("keydown", function(event){  //function(event) is a 'callback function', and returns the event that happened.

    makeSound(event.key);                              //event.key returns the key that was pressed.

    buttonAnimation(event.key);
});



//For making sounds
function makeSound(key){

    switch (key) {
        case "w":
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
            break;
         
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
             tom3.play();  
             break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play(); 
             break;
             
        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
             kick.play(); 
             break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
             crash.play(); 
             break;
             
        case "l":
            var snare = new Audio("sounds/snare.mp3");
             snare.play(); 
             break;

        default: console.log(buttonInnerHtml);
           
    }

}

//For animation
function buttonAnimation(currentKey){

    var activebutton = document.querySelector("."+ currentKey);

    activebutton.classList.add("pressed"); //adds the animation effect

    setTimeout(function(){    //removes the animation effect with 1s delay.
        activebutton.classList.remove("pressed");
    }, 100)

}




