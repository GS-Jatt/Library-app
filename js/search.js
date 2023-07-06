'use strict'

import { books } from "/js/get-data.js";
import { Display } from "/js/bookDisplay.js";
// book  search function

class DisplaySearchBook {

    deleteBook(books, indexs) {
        indexs = indexs.reverse();
        for (const index of indexs) {
            books.splice(index, 1);
        }
        return books
    }

    search(bookName, findBy) {
        document.getElementById('tableBody').innerHTML = '';
        const add = new Display().add;
        const sBa = [];
        let clonedBooks = JSON.parse(JSON.stringify(books));
        for (const [index, book] of books.entries()) {
            if (book[findBy].toLowerCase() === bookName.toLowerCase()) {
                add([book]);
                sBa.push(index);
            }
        }
        clonedBooks = this.deleteBook(clonedBooks, sBa);
        const sName = bookName.split(' ');

        for (const book of clonedBooks) {
            const cBook = book[findBy].split(' ');
            loop1:
            for (const name of sName) {
                loop2:
                for (const spName of cBook) {
                    if (spName.toLowerCase() === name.toLowerCase()) {
                        add([book]);
                        break loop1;
                    }
                }
            }
        }

    }

}

document.getElementById('search').addEventListener('click', function (e) {
    const name = document.getElementById('search-txt').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let btype = document.getElementById('btype');
    const displaySearch = new DisplaySearchBook();

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else if (btype.checked) {
        type = btype.value;
    }
    if (name === '') {
        const display = new Display().add;
        display(books);
    }
    else{
        displaySearch.search(name, type);
    }
    e.preventDefault();
        // console.log(name , type);
});

const searchByMenu = document.querySelectorAll('.search-by-btn');
for (const sByM of searchByMenu) {
    sByM.addEventListener('click', function () {
        document.querySelector('.dropdown-menu').classList.toggle('show');
    });
}

