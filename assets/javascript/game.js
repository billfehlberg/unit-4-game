//game start
//generate a random number and display it
$(document).ready(function() {
    var generated=Math.floor(Math.random() * 102 + 19);
        $('#random-number').text(generated);

//populate tally, wins and losses starting at 0 and display
    var wins = 0;
    var losses = 0;
    var tally = 0;
        $('#wins').text(wins);
        $('#losses').text(losses);
        $('#tally').text(tally);
//generate random numbers for each tile
    var earth=Math.floor(Math.random() * 12 + 1)
    var mars=Math.floor(Math.random() * 12 + 1)
    var jupiter=Math.floor(Math.random() * 12 + 1)
    var saturn=Math.floor(Math.random() * 12 + 1)
  


//reset function for tally, tiles and generated number
function reset()    {

    generated=Math.floor(Math.random() * 102 + 19);
        $('#random-number').text(generated);
    earth=Math.floor(Math.random() * 12 + 1);
    mars=Math.floor(Math.random() * 12 + 1);
    jupiter=Math.floor(Math.random() * 12 + 1);
    saturn=Math.floor(Math.random() * 12 + 1);
        tally = 0;
        $('#tally').text(tally);
}
//display winner and reset values
function winner()   {
    alert("You won!");
    wins++;
    $('#wins').text(wins);
    reset();
}
//display loser and reset values
function loser()    {
    alert("You lost!");
    losses++;
    $('#losses').text(losses);
    reset();
}
//on clicking tiles update tally and compare to generated number
$('.earth').on('click', function()  {
    tally = tally + earth;
        $('#tally').text(tally);
        if (tally > generated) {
            loser();
        } else if (tally === generated) {
            winner();
        }
});

$('.jupiter').on('click', function()  {
    tally = tally + jupiter;
        $('#tally').text(tally);
        if (tally > generated) {
            loser();
        } else if (tally === generated) {
            winner();
        }
});

$('.mars').on('click', function()  {
    tally = tally + mars;
        $('#tally').text(tally);
        if (tally > generated) {
            loser();
        } else if (tally === generated) {
            winner();
        }
});

$('.saturn').on('click', function()  {
    tally = tally + saturn;
        $('#tally').text(tally);
        if (tally > generated) {
            loser();
        } else if (tally === generated) {
            winner();
        }
});
});