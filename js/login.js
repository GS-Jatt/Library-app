"use strict";
import { users } from "/js/get-data.js";
import { Display } from "/js/bookDisplay.js";
// login script
const adminP = document.querySelectorAll(".admin-only");
const stdP = document.getElementById("std-p");
const loginP = document.getElementById("login-p");

const dashboard = new Display().dashboard;
// login pop
document.querySelector("#login").addEventListener("click", function () {
    document.querySelector(".login-pop").classList.toggle("hiddennn");
});
document.querySelector("#login-logo").addEventListener("click", function () {
    document.querySelector(".login-pop").classList.toggle("hiddennn");
});


document.querySelector(".btnnn").addEventListener("click", function () {
    document.querySelector(".login-pop").classList.toggle("hiddennn");
});

const hid = function () {
    loginP.classList.toggle("hiddennn");
    document.getElementById("sidebar").classList.toggle("hiddennn");
    document.getElementById("buttom-bar").classList.toggle("hiddennn");
};

const hidAdmin = function () {
    for (const btn of adminP) {
        btn.classList.toggle("hiddennn");
    }
};
const afterLogin = function () {
    document.getElementById('user-logo').classList.toggle('hiddennn');
    document.getElementById('login-logo').classList.toggle('hiddennn');

}


document.querySelector("#subb").addEventListener("click", function () {
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#passwd").value;

    // console.log(uPower);
    if (users.admin.name === user) {
        // adminP.classList.toggle('hiddennn');
        stdP.classList.toggle("hiddennn");
        document.getElementById("std-only").classList.toggle("hiddennn");
        document.getElementById("std-only1").classList.toggle("hiddennn");
        hidAdmin();
        hid();
        afterLogin();
        document.getElementById("search-bar").classList.toggle("hiddennn");
    }
    else {
        for (let input of users.users) {
            if (String(input.id) === user && input.passwd === password) {
                dashboard(input);
                // common
                stdP.classList.toggle("hiddennn");
                // document.getElementById('userForm').classList.toggle('hiddennn');
                hid();
                afterLogin();
                document.getElementById("search-bar").classList.toggle("hiddennn");
            }
            else {
                document.querySelector('#check-user').innerHTML = 'check the user name and password';
            }
        }
    }
});
