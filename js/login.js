"use strict";
import { users } from "/js/get-data.js";
import { Display } from "/js/bookDisplay.js";

const adminP = document.querySelectorAll(".admin-only");
// const stdP = document.getElementById("std-p");

let checker = true;

const dashboard = new Display().dashboard;
// login pop
// document.querySelector("#login").addEventListener("click", function () {
//     document.querySelector(".login-pop").classList.toggle("hiddennn");
// });

setTimeout(() => {
    if (checker) {
        document.querySelector(".login-pop").classList.remove("hiddennn");
        document.querySelector(".page-body-wrapper").classList.add("blur");
    }
}, 4000);

document.querySelector("#login-logo").addEventListener("click", function () {
    document.querySelector(".login-pop").classList.toggle("hiddennn");
    document.querySelector(".page-body-wrapper").classList.toggle("blur");

});


document.querySelector(".btnnn").addEventListener("click", function () {
    document.querySelector(".login-pop").classList.toggle("hiddennn");
    document.querySelector(".page-body-wrapper").classList.toggle("blur");

});

/**
 * use to hid side and button bar 
 */
const hid = function () {
    document.getElementById("sidebar").classList.toggle("hiddennn");
    document.getElementById("buttom-bar").classList.toggle("hiddennn");
};

/**
 * used to hid admin feactures 
 */
const hidAdmin = function () {
    for (const btn of adminP) {
        btn.classList.toggle("hiddennn");
    }
};

//  hides login froim after login
const afterLogin = function () {
    document.getElementById('user-logo').classList.toggle('hiddennn');
    document.getElementById('login-logo').classList.toggle('hiddennn');
    document.querySelector(".login-pop").classList.toggle("hiddennn");
    document.querySelector(".page-body-wrapper").classList.toggle("blur");

    checker = false;
}

/**
 * event heandler for login 
 */
document.querySelector("#subb").addEventListener("submit", function (e) {
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#passwd").value;

    // console.log(uPower);
    if (users.admin.name === user) {
        // adminP.classList.toggle('hiddennn');
        // stdP.classList.toggle("hiddennn");
        document.getElementById("std-only").classList.toggle("hiddennn");
        document.getElementById("std-only1").classList.toggle("hiddennn");
        hidAdmin();
        hid();
        afterLogin();
        // document.getElementById("search-bar").classList.toggle("hiddennn");
    }
    else {
        for (let input of users.users) {
            if (String(input.id) === user && input.passwd === password) {
                dashboard(input);
                // common
                // stdP.classList.toggle("hiddennn");
                // document.getElementById('userForm').classList.toggle('hiddennn');
                hid();
                afterLogin();
                // document.getElementById("search-bar").classList.toggle("hiddennn");
            }
            else {
                document.querySelector('#check-user').innerHTML = 'check the user name and password';
            }
        }
    }
    e.preventDefault();
});
