'use strict';
import { books, hidAll } from "/js/get-data.js";
import { } from '/js/login.js';
import { } from '/js/addNewUser.js';
import { Display } from "/js/bookDisplay.js";
import { } from '/js/addNewBook.js';
import { } from '/js/search.js';
import { } from '/js/issueBook.js'
import { } from '/js/issuedToUser.js'
import { } from '/js/bookReturn.js'


// displaying books

setTimeout(function () {

const display = new Display().add;
display(books);
    // let tableBody = document.getElementById('tableBody');
    // for (const book of books) {
    //     if (book.issuedTo !== 0) {
    //         const issueed = new Display().issue;
    //         issueed(book);
    //     }
    //     else {
    //         const uiString = `<tr>
    //                         <td>${book.name}</td>
    //                         <td>${book.id}</td>
    //                         <td>${book.author}</td>
    //                         <td>${book.publisher}</td>
    //                         <td>${book.type}</td>
    //                         <td>${book.lockerNo}</td>
    
    //                       </tr>`;
    //         tableBody.innerHTML += uiString;
    //     }
    // }
}, 5000);

document.getElementById('books').addEventListener('click', function () {
    hidAll();
    document.getElementById('std-p').classList.toggle('hiddennn');
    document.getElementById('search-bar').classList.toggle('hiddennn');

});

document.getElementById('books1').addEventListener('click', function () {
    hidAll();
    document.getElementById('std-p').classList.toggle('hiddennn');
    document.getElementById('search-bar').classList.toggle('hiddennn');

});

document.getElementById('dashboard-btn').addEventListener('click', function () {
    hidAll();
    document.getElementById('user-dashboard').classList.remove('hiddennn');
});
document.getElementById('std-only1').addEventListener('click', function () {
    hidAll();
    document.getElementById('user-dashboard').classList.remove('hiddennn');
});


