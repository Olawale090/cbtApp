    var submit = document.getElementById('submitBtn');
    var modalCapsule = document.getElementById('modalCapsule');
    var showScore = document.getElementById('showScore');
    var primary = document.getElementById('primary');
    var primary2 = document.getElementById('primary2');

    // function declaration of the whole module
    function marker() {
        var choice1 = document.getElementById('wrong1').checked; // selection of the individual wrong answers with the checked method
        var choice2 = document.getElementById('wrong2').checked; // selection of the individual wrong answers with the checked method
        var choice3 = document.getElementById('wrong3').checked; // selection of the individual wrong answers with the checked method
        var choice4 = document.getElementById('wrong4').checked; // selection of the individual wrong answers with the checked method
        var choice5 = document.getElementById('wrong5').checked; // selection of the individual wrong answers with the checked method
        var choice6 = document.getElementById('wrong6').checked; // selection of the individual wrong answers with the checked method
        var choice7 = document.getElementById('wrong7').checked; // selection of the individual wrong answers with the checked method
        var choice8 = document.getElementById('wrong8').checked; // selection of the individual wrong answers with the checked method
        var choice9 = document.getElementById('wrong9').checked; // selection of the individual wrong answers with the checked method
        var choice10 = document.getElementById('wrong10').checked; // selection of the individual wrong answers with the checked method
        var arr = [choice1, choice2, choice3, choice4, choice5, choice6, choice7, choice8, choice9, choice10]; // rendering the whole checked boxes in array form
        var counter = 0; // counter for the correct option

        modalCapsule.style.width = 100 + '%';
        modalCapsule.style.height = 100 + '%';
        primary.style.opacity = 1;
        primary.style.transition = '2s';
        primary2.style.opacity = 1;
        primary2.style.transition = '2s';

        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] === true) { // this line checks is the individual option is checked
                counter++; // as the option is checked the counter increases
                showScore.style.width = 70 + '%';
                showScore.style.height = 40 + '%';
                showScore.style.opacity = 1;
                showScore.style.transition = '500ms';
                showScore.style.fontSize = 100 + 'px';
                showScore.style.textAlign = 'center';
                showScore.textContent = `You scored : ${counter}`;
            } else if (arr[i] === false && counter == 0) {
                showScore.style.width = 70 + '%';
                showScore.style.height = 40 + '%';
                showScore.style.opacity = 1;
                showScore.style.transition = '500ms';
                showScore.style.fontSize = 800 + '%';
                showScore.style.textAlign = 'center';
                showScore.innerHTML = `You scored : ${counter}`;
            }

        }
    }

    submit.addEventListener('click', marker, false); // invoking the whole function by clicking on the submit button

    // var newDiv = document.createElement('div');
    // newDiv.setAttribute('id', 'showScore');


    // var markerClass = function() {
    //     this.rightAnswer = document.getElementById('wrong');
    //     this.showScore = document.getElementById('somethingHere');
    //     this.closeScore = document.getElementById('somthingHere');
    // };

    // markerClass.prototype.renderChoices = function() {

    //