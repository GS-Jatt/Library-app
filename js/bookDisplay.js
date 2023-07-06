'use strict'
import { books, users } from "./get-data.js";

// lib script 
class Book {
    constructor(id, name, author, publisher, type, lockerNo) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.type = type;
        this.issuedTo = 0;
        this.issuedDate = 0;
        this.lockerNo = lockerNo;
    }
}

// class to display new add book
class Display {
    add(books) {
        let tableBody = document.getElementById('tableBody');
        for (const book of books) {
            if (book.issuedTo !== 0) {
                const issueed = new Display().issue;
                issueed(book);
            }
            else {
                const uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.id}</td>
                            <td>${book.author}</td>
                            <td>${book.publisher}</td>
                            <td>${book.type}</td>
                            <td>${book.lockerNo}</td>
    
                          </tr>`;
                tableBody.innerHTML += uiString;
            }
        }

        // let tableBody = document.getElementById('tableBody');
        // const uiString = `<tr>
        //                     <td>${book.name}</td>
        //                     <td>${book.id}</td>
        //                     <td>${book.author}</td>
        //                     <td>${book.publisher}</td>
        //                     <td>${book.type}</td>
        //                     <td>${book.lockerNo}</td>

        //                   </tr>`;
        // tableBody.innerHTML += uiString;
    }
    issue(book) {
        let user;
        for (const userr of users.users) {
            if (userr.id === book.issuedTo) {
                user = userr;
            }
        }
        let tableBody = document.getElementById('issued-tableBody');
        const uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.id}</td>
                            <td>${book.issuedDate}</td>
                            <td>${user.name}</td>
                            <td>${user.class}</td>
                            <td>${user.id}</td>
                          </tr>`;
        tableBody.innerHTML += uiString;
    }
    dashboard(user) {

        for (const id of user.issueBooksId) {
            for (const book of books) {
                if (book.id === id) {

                    let tableBody = document.getElementById('dashboard-tableBody');
                    const uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.id}</td>
                            <td>${book.issuedDate}</td>
                          </tr>`;
                    tableBody.innerHTML += uiString;
                }
            }
        }
    }

    clear() {
        let libraryForm = document.getElementById('add-book-form');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        // let message = document.getElementById('message');
        // let boldText;
        // if (type === 'success') {
        //     boldText = 'Success';
        // }
        // else {
        //     boldText = 'Error!';
        // }
        // message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        //                         <strong>${boldText}:</strong> ${displayMessage}
        //                         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        //                         <span aria-hidden="true">×</span>
        //                         </button>
        //                     </div>`;
        // setTimeout(function () {
        //     message.innerHTML = ''
        // }, 5000);

    }
}

export { Book, Display };