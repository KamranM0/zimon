var randomNum;
var buttons=[
    "button1",
    "button2",
    "button3",
    "button4"
]
var playerSequence=[];
var gameSequence=[];
var level=1;
var inputcounter=0;
var isStarted=false;
function initGame(){
        nextSequence();
        playerTurn();
        
    
    
function playerTurn(){

    $(".btn").click(function(){
        
        if(inputcounter<gameSequence.length){
            var chosenButton;
            var sound=new Audio("sounds/blue.mp3");
            sound.play();
            chosenButton=buttons[(this.id)-1]
            $(this).fadeIn(100).fadeOut(100).fadeIn(100);
            playerSequence.push(chosenButton);
            inputcounter++;
            checkSequence(inputcounter);
            
        }
        
})}
function checkSequence(input){
    var partialPSeq=playerSequence.slice(0,input);
    var partialGSeq=gameSequence.slice(0,input);
    if(partialGSeq.toString()===partialPSeq.toString()){
        if(partialGSeq.length===gameSequence.length){
            console.log("true");
            level+=1;
            $("h1").text("Level "+level);
            console.log("gameseq "+ gameSequence);
            console.log("playerseq "+ playerSequence);
            setTimeout(nextSequence,700);
            
        }
        
        
    }
    else{
        failGame();
        var soundfail=new Audio("sounds/wrong.mp3");
        soundfail.play();
        restartGame();
        
        
    }}
}
function restartGame(){
    level=1;
    $("h1").text("Level 1");
    gameSequence.splice(0,gameSequence.length);
    playerSequence.splice(0,playerSequence.length);
    setTimeout(nextSequence(),700);
    
}
function failGame(){
    $("h1").text("You failed at "+level+"press 1 button to restart!");
    console.log("gameseq "+ gameSequence);
    console.log("playerseq "+ playerSequence);

}
function nextSequence(){
    var gameButton=Math.floor(Math.random()*4);
    gameSequence.push(buttons[gameButton]);
    $(".b"+(gameButton+1)).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log(gameButton+1);
    playerSequence.splice(0,playerSequence.length);
    inputcounter=0;
    }
initGame()

