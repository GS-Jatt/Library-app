'use strick'

import { Book, Display } from "/js/bookDisplay.js";
import { books,hidAll } from "/js/get-data.js";

document.getElementById('btn-add-book').addEventListener('click', function(){
    hidAll();
    document.getElementById('add-new-book-form').classList.toggle('hiddennn');
});

document.getElementById('btn-add-book1').addEventListener('click', function(){
    hidAll();
    document.getElementById('add-new-book-form').classList.toggle('hiddennn');
});

/**
 * 
 * upload new books to database
 */
const PutBooks = async function(){
    return fetch("https://api.jsonbin.io/v3/b/64081c59c0e7653a058439f8?meta=false", {
         method: 'PUT',
         body: JSON.stringify(books),
         headers: {
             'Content-type': 'application/json',
             "X-Access-Key": "$2b$10$yCt1TczM9drUVreBsiuKjubH1z/W5ZkloK7Aj/NQFxAbBiqWNN8OO",
         }
     });
 }


// submit event listener for add new book
let libraryForm = document.getElementById('add-book-form');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let id = Number(document.getElementById('bookID').value);
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let publisher = document.getElementById('bookPublisher').value;
    let type = document.getElementById('bookType').value;
    let lockerNo = document.getElementById('locker-no').value;


    const book = new Book(id, name, author, publisher, type, lockerNo);
    books.push(book);

    const display = new Display();

    if (display.validate(book)) {

        display.add([book]);
        display.clear();

        // uploading new book to database
       
        PutBooks();
        

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


        display.show('success', 'Your book has been successfully added');
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}