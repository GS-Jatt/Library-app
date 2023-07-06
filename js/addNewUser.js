'use strict'
 import { users, hidAll } from "/js/get-data.js";
// add new user function
document.getElementById('btn-add-user').addEventListener('click', function(){
    hidAll();
    document.getElementById('add-new-user-form').classList.toggle('hiddennn');
});

document.getElementById('btn-add-user1').addEventListener('click', function(){
    hidAll();
    document.getElementById('add-new-user-form').classList.toggle('hiddennn');
});


const userForm = document.getElementById('add-user-form');

userForm.addEventListener('submit', function (e) {
    const className = document.getElementById('classs').value;
    const name = document.getElementById('userName').value;
    const passwd = document.getElementById('passwd3').value;

    const newUser = {
        id: users.admin.users + 1,
        name: name,
        class: className,
        passwd: passwd,
        issueBooksId:[],
    };


    users.users.push(newUser);
    users.admin.users++;
    alert(`Remember this User ID and Password \n ID => ${newUser.id} \n Password => ${newUser.passwd}`);

    let libraryForm = document.getElementById('add-user-form');
        libraryForm.reset();

    // uploading new user data on database

    fetch('https://api.jsonbin.io/v3/b/64030be9ace6f33a22e92074?meta=false ', {
        method: 'PUT',
        body: JSON.stringify(users),
        headers: {
            'Content-type': 'application/json',
            "X-Access-Key": "$2b$10$yCt1TczM9drUVreBsiuKjubH1z/W5ZkloK7Aj/NQFxAbBiqWNN8OO",
        },
    })
        .then(res => res.json())
        .then(data => console.log(data))


    e.preventDefault();
});