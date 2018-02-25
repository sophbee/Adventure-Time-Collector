// initial scores
var yourTotalScore = 0,
              wins = 0,
            losses = 0;

// create randoms
var              targetScore = Math.floor(Math.random() * 120) + 19,
         slimePrincessRandom = Math.floor(Math.random() * 12) + 1,
         flamePrincessRandom = Math.floor(Math.random() * 12) + 1,
    lumpySpacePrincessRandom = Math.floor(Math.random() * 12) + 1,
     princessBubbleGumRandom = Math.floor(Math.random() * 12) + 1;

// store princesses
var $bubblegum = $('#bubblegum'),
        $flame = $('#flame'),
          $lsp = $('#lsp'),
        $slime = $('#slime'),
$yourtotalscore= $('#your-totalscore');

function updateCheckScore(value) {
    // update
    yourTotalScore += parseInt(value);
    $yourtotalscore.text(yourTotalScore);

    //check
    if (yourTotalScore === targetScore) {
        wins++;
        $("#wins-count").text(wins);
        resetNumbers();
    } else if (yourTotalScore < targetScore) {

    } else {
        losses++;
        $("#losses-count").text(losses);
        resetNumbers();
    }; 
}

function resetNumbers() {
    yourTotalScore = 0;
    targetScore = Math.floor(Math.random() * 120) + 19;
    $("#match-this-number").text(targetScore);
    slimePrincessRandom = Math.floor(Math.random() * 12) + 1;
    flamePrincessRandom = Math.floor(Math.random() * 12) + 1;
    lumpySpacePrincessRandom = Math.floor(Math.random() * 12) + 1;
    princessBubbleGumRandom = Math.floor(Math.random() * 12) + 1;
    $yourtotalscore.text(yourTotalScore);
}

$(document).ready(function() {

    //testing
    // $(document).on('click',function() {
    //     console.log(targetScore,yourTotalScore,wins,losses);
    // });

    $("#match-this-number").text(targetScore);

    $bubblegum.on("click", function () {
        updateCheckScore(princessBubbleGumRandom);
    });
    
    $flame.on("click", function () {
        updateCheckScore(flamePrincessRandom);
    });
    
    $lsp.on("click", function () {
        updateCheckScore(lumpySpacePrincessRandom);
    });
    
    $slime.on("click", function () {
        updateCheckScore(slimePrincessRandom);
    });

})



//when user clicks princess, add numbers in your score box 
//if it matches or goes over target score. game over
//when you win, add 1 pt to wincounter
//when you lose, add 1 pt to losscounter
//then reset game