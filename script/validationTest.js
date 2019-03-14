"use strict";

var studentsProfile = [{
        "name": "Adeleke David Olaoluwa",
        "password": "mi67Gj",
        "matricNo": 132331,
        "pic": "../Assets/imgs/IMG_20180817_094204.jpg"
    },
    {
        "name": "Mobolade Temitope Bolanle",
        "password": "afr27j",
        "matricNo": 152631,
        "pic": "../Assets/imgs/IMG_20180817_094204.jpg"
    },
    {
        "name": "Alade Samuel Olayimika",
        "password": "fhsj83",
        "matricNo": 162031,
        "pic": "../Assets/imgs/IMG_20180817_094204.jpg"
    },
    {
        "name": "Oladipupo Olaoluwa Mide",
        "password": "4Gk84y",
        "matricNo": 142431,
        "pic": "../Assets/imgs/IMG_20180817_094204.jpg"
    }

];

var candidates = JSON.stringify(studentsProfile);
var student = JSON.parse(candidates);


var notification = function() {

    var modal = document.getElementById('modalNotify');
    modal.style.display = "block";
    // modal.style.transition = `${0.4}s`;

    modal.onclick = function() {
        modal.style.display = "none";
    };

    var closeBtn = document.getElementById('closeBtn');
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    var continueBtn = document.getElementById('getQuestions');
    continueBtn.onclick = function() {
        window.open("htm/examsOptionsPage.html", "_self");
    };

};

var validationFailed = function() {
    var modal = document.getElementById('modalNotifyFailed');
    modal.style.display = "block";
    // modal.style.transition = `${0.4}s`;

    modal.onclick = function() {
        modal.style.display = "none";
    };

    var closeBtn = document.getElementById('closeBtnFailed');
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

};


// prototype declaration of the student validation
var submit = document.getElementById('submit');

var validation = function() {

};

validation.prototype.name = document.getElementById('stdName');
validation.prototype.matric = document.getElementById('matNum');

console.log(validation.prototype.name.value + ' prototype name');

validation.prototype.verify = function() {
    for (let i = 0; i <= student.length; i++) {
        try {
            if ((validation.prototype.name.value == student[i].password) && (validation.prototype.matric.value == student[i].matricNo)) {
                notification();
            } else {
                validationFailed();
                navigator.vibrate([1000, 600, 800, 300, 0]);
            }

        } catch (error) {
            console.log("the error that occured was " + error);
        }

    }

    // if ((student.includes(validation.prototype.name.value) == true) || (student.includes(validation.prototype.matric.value) == true)) {
    //     notification();
    //     console.log("it has found it");
    // } else {
    //     validationFailed();
    //     console.log("it's working now");
    // }

};


var fetcher = new validation();
submit.addEventListener('click', fetcher.verify, false);