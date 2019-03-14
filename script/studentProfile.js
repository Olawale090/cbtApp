"use strict";

var studentsProfile = [{
        "name": "Adeleke David Olaoluwa",
        "password": "mi67Gj",
        "matricNo": 132331,
        "pic": "url(../Assets/imgs/IMG_20180817_094204.jpg)"
    },
    {
        "name": "Mobolade Temitope Bolanle",
        "password": "afr27j",
        "matricNo": 152631,
        "pic": "url(../Assets/imgs/IMG_20180817_094204.jpg)"
    },
    {
        "name": "Alade Samuel Olayimika",
        "password": "fhsj83",
        "matricNo": 162031,
        "pic": "url(../Assets/imgs/IMG_20180817_094204.jpg)"
    },
    {
        "name": "Oladipupo Olaoluwa Mide",
        "password": "4Gk84y",
        "matricNo": 142431,
        "pic": "url(../Assets/imgs/studentProfileImages/IMG_20171027_202840_edit.jpg)"
    }

];

var candidates = JSON.stringify(studentsProfile);
var student = JSON.parse(candidates);


var userName = document.getElementById('userName'); // declaring the username to be displayed
var userPic = document.getElementById('userPic'); // declaring the user image to be shown

class studentDetails {
    constructor() {
        this.userName = userName;
        this.userPic = userPic;
    }

    showDetails() {
        for (let i = 0; i < student.length; i++) {
            this.userName.innerHTML = student[i].name;
            this.userPic.style.backgroundImage = student[i].pic;
            this.userPic.style.backgroundSize = 'cover';
        }

    }
}

var studentProfile = new studentDetails();

studentProfile.showDetails();