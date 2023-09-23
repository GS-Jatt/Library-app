'use strict'
import { books, users, hidAll } from "/js/get-data.js";
import { Display } from "/js/bookDisplay.js";


const tableBody = document.getElementById('return-tableBody');

// manu buttons
document.getElementById('return-p').addEventListener('click', function () {
    hidAll();
    document.getElementById('return-page').classList.toggle('hiddennn');
});
document.getElementById('return-p1').addEventListener('click', function () {
    hidAll();
    document.getElementById('return-page').classList.toggle('hiddennn');
});

let rBook;
let rUser;
document.getElementById('return-book-id').addEventListener('change', function (e) {

    loop1:
    for (let book of books) {
        if (book.id === Number(e.target.value)) {
            rBook = book;
            for (const user of users.users) {
                if (user.id === rBook.issuedTo) {
                    rUser = user;
                    break loop1;
                }
            }
        }

    }
    tableBody.innerHTML = `<tr>
    <td> ${rBook.name} </td>
    <td> ${rBook.author} </td>
    <td> ${rUser.name} </td>
    <td> ${rUser.id} </td>
    <td> ${rBook.lockerNo} </td>
    <!-- <td> other book option </td> -->
  </tr>`;


});

document.getElementById('return-book-form').addEventListener('submit', function (e) {
    rBook.issuedDate = 0;
    rBook.issuedTo = 0;
    rUser.issueBooksId = rUser.issueBooksId.filter((id) => id !== rBook.id);


    // loop1:
    // for (const user of users.users) {
    //     for (let [index, issueBooksId] of user.issueBooksId.entries()) {
    //         if (issueBooksId === String(rBook.id)) {
    //             user.issueBooksId.splice(index, 1);
    //             break loop1;
    //         }
    //     }
    // }

    // let req = new XMLHttpRequest();

    // req.onreadystatechange = () => {
    //     if (req.readyState == XMLHttpRequest.DONE) {
    //         console.log(req.responseText);
    //     }
    // };

    // req.open("PUT", "https://api.jsonbin.io/v3/b/64081c59c0e7653a058439f8?meta=false", true);
    // req.setRequestHeader("Content-Type", "application/json");
    // req.setRequestHeader("X-Access-Key", "$2b$10$yCt1TczM9drUVreBsiuKjubH1z/W5ZkloK7Aj/NQFxAbBiqWNN8OO");
    // req.send(JSON.stringify(books));
    fetch('https://api.jsonbin.io/v3/b/64081c59c0e7653a058439f8?meta=false ', {
        method: 'PUT',
        body: JSON.stringify(books),
        headers: {
            'Content-type': 'application/json',
            "X-Access-Key": "$2b$10$yCt1TczM9drUVreBsiuKjubH1z/W5ZkloK7Aj/NQFxAbBiqWNN8OO",
        },
    });

    console.log(users, rUser);

    fetch('https://api.jsonbin.io/v3/b/64030be9ace6f33a22e92074?meta=false ', {
        method: 'PUT',
        body: JSON.stringify(users),
        headers: {
            'Content-type': 'application/json',
            "X-Access-Key": "$2b$10$yCt1TczM9drUVreBsiuKjubH1z/W5ZkloK7Aj/NQFxAbBiqWNN8OO",
        },
    });
    const display = new Display().add;

    document.getElementById('return-book-form').reset();
    tableBody.innerHTML = '';
    document.getElementById('issued-tableBody').innerHTML = '';
    display(books);

    e.preventDefault();
});
