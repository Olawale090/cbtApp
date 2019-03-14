/* this problem was solved with the simlplest method availalble 
    this is the clock module of the whole project
    it involve moderate use of the template literal.
    NOTICE: The clock does not depend on the server to work, which makes it more reliable and free
            from all the server clock errors and faults when offline.
*/

"use strict";

class timeUp {
    constructor() {
        this.modalCapsule = document.getElementById('modalCapsule');
        this.showScore = document.getElementById('showScore');
        this.primary = document.getElementById('primary');
        this.primary2 = document.getElementById('primary2');
        this.choice1 = document.getElementById('wrong1').checked; // selection of the individual wrong answers with the checked method
        this.choice2 = document.getElementById('wrong2').checked; // selection of the individual wrong answers with the checked method
        this.choice3 = document.getElementById('wrong3').checked; // selection of the individual wrong answers with the checked method
        this.choice4 = document.getElementById('wrong4').checked; // selection of the individual wrong answers with the checked method
        this.choice5 = document.getElementById('wrong5').checked; // selection of the individual wrong answers with the checked method
        this.choice6 = document.getElementById('wrong6').checked; // selection of the individual wrong answers with the checked method
        this.choice7 = document.getElementById('wrong7').checked; // selection of the individual wrong answers with the checked method
        this.choice8 = document.getElementById('wrong8').checked; // selection of the individual wrong answers with the checked method
        this.choice9 = document.getElementById('wrong9').checked; // selection of the individual wrong answers with the checked method
        this.choice10 = document.getElementById('wrong10').checked; // selection of the individual wrong answers with the checked method
        this.arr = [this.choice1, this.choice2, this.choice3, this.choice4, this.choice5, this.choice6, this.choice7, this.choice8, this.choice9, this.choice10]; // rendering the whole checked boxes in array form
        this.counter = 0;
    }

    endExam() {
        this.modalCapsule.style.width = 100 + '%';
        this.modalCapsule.style.height = 100 + '%';
        this.primary.style.opacity = 1;
        this.primary.style.transition = '2s';
        this.primary2.style.opacity = 1;
        this.primary2.style.transition = '2s';
        this.showScore.style.width = 70 + '%';
        this.showScore.style.height = 40 + '%';
        this.showScore.style.opacity = 1;
        this.showScore.style.transition = '500ms';
        this.showScore.style.fontSize = 100 + '%';
        this.showScore.style.textAlign = 'center';
        this.showScore.textContent = `You scored : ${counter}`;

        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] === true) { // this line checks if the individual option is checked
                this.counter++; // as the option is checked the counter increases
                this.showScore.style.width = 70 + '%';
                this.showScore.style.height = 40 + '%';
                this.showScore.style.opacity = 1;
                this.showScore.style.transition = '500ms';
                this.showScore.style.fontSize = 100 + '%';
                this.showScore.style.textAlign = 'center';
                this.showScore.textContent = `You scored : ${counter}`;
            } else if (arr[i] === false && counter == 0) {
                this.showScore.style.width = 70 + '%';
                this.showScore.style.height = 40 + '%';
                this.showScore.style.opacity = 1;
                this.showScore.style.transition = '500ms';
                this.showScore.style.fontSize = 800 + '%';
                this.showScore.style.textAlign = 'center';
                this.showScore.innerHTML = `You scored : ${counter}`;
            }

        }
    }
}

var stopWorking = new timeUp();

function clock() {
    var seconds = 60;
    var minutes = 19;

    var examTime = document.getElementById('timeHolder');

    var time = setInterval(function() {
        seconds -= 1;
        examTime.innerHTML = `Time ${minutes} : ${seconds}`;
        if (seconds == 0) {
            minutes -= 1;
            seconds = 59;
            examTime.innerHTML = `Time ${minutes} : ${seconds}`;

        } else if ((minutes <= 0) && (seconds <= 1)) {
            clearInterval(time);
            examTime.style.color = "red";
            examTime.innerHTML = " Time up";
            stopWorking.endExam();
        }

    }, 1000);
}
window.addEventListener('load', clock, false);