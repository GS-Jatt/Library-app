'use strict'


let users;
let jBook;
let books;


// getting login data from server
let req = new XMLHttpRequest();

req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        users = req.responseText;
    }
};

req.open("GET", "https://api.jsonbin.io/v3/b/64030be9ace6f33a22e92074?meta=false ", true);
req.setRequestHeader("X-Access-Key", "$2b$10$vVrdTC03qN6B66LyKf/0J.yZGnHCjlof.xcPgr7nNPgwKL4Z5AevK");
req.send();



// getting books data from database\
let reqe = new XMLHttpRequest();
reqe.onreadystatechange = () => {
    if (reqe.readyState == XMLHttpRequest.DONE) {
        jBook = reqe.responseText;
    }
};

reqe.open("GET", "https://api.jsonbin.io/v3/b/64081c59c0e7653a058439f8?meta=false ", true);
reqe.setRequestHeader("X-Access-Key", "$2b$10$vVrdTC03qN6B66LyKf/0J.yZGnHCjlof.xcPgr7nNPgwKL4Z5AevK");
reqe.send();




setTimeout(function () {
    books = JSON.parse(jBook);
    users =JSON.parse(users);
}, 5000);

function hidAll(){
    document.getElementById('std-p').classList.add('hiddennn');
    document.getElementById('add-new-book-form').classList.add('hiddennn');
    document.getElementById('add-new-user-form').classList.add('hiddennn');
    document.getElementById('search-bar').classList.add('hiddennn');
    document.getElementById('issue-book-user-form').classList.add('hiddennn');
    document.getElementById('issued-to-user').classList.add('hiddennn');
    document.getElementById('user-dashboard').classList.add('hiddennn');
    document.getElementById('return-page').classList.add('hiddennn');

}

export {users, books, hidAll} ;