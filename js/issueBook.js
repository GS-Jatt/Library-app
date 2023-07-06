import { books, users, hidAll } from "/js/get-data.js";
import { Display } from "/js/bookDisplay.js";

const userDetails = document.getElementById('issue-user-tableBody');
const bookDetails = document.getElementById('issue-book-tableBody');
let indexOfUser, indexOfBook, userId, bookId, checker1 = 0, checker2 = 0;



document.getElementById('issue-page').addEventListener('click', function () {
    hidAll()
    document.getElementById('issue-book-user-form').classList.toggle('hiddennn');
})

document.getElementById('issue-page1').addEventListener('click', function () {
    hidAll()
    document.getElementById('issue-book-user-form').classList.toggle('hiddennn');
})

document.getElementById('user-id').addEventListener('change', function (e) {

    for (const [index, user] of users.users.entries()) {
        if (user.id === Number(e.target.value)) {
            userDetails.innerHTML = `<tr>
                                     <td>${user.name}</td>
                                     <td>${user.class}</td>
                                 </tr>`;
            indexOfUser = index;
            userId = user.id;
            checker1 = 1;
            break;
        }
        else {
            checker1 = 0;
            userDetails.innerHTML = '';
        }

    }
});

document.getElementById('book-id').addEventListener('change', function (e) {
    for (const [index, book] of books.entries()) {
        if (Number(book.id) === Number(e.target.value)) {
            bookDetails.innerHTML = `<tr>
                                     <td>${book.name}</td>
                                     <td>${book.author}</td>
                                     <td>${book.publisher}</td>

                                 </tr>`;
            indexOfBook = index;
            bookId = book.id;
            checker2 = 1;
            break;
        }
        else {
            checker2 = 0;
            bookDetails.innerHTML = '';
        }

    }
});

// issuing book to user
const issueForm = document.getElementById('issue-book-form');
issueForm.addEventListener('submit', function (e) {
    if (checker1 + checker2 === 2) {
        users.users[indexOfUser].issueBooksId.push(bookId);
        books[indexOfBook].issuedTo = userId;
        books[indexOfBook].issuedDate = document.getElementById('date').value;
        const issueed = new Display().issue;
        issueed(books[indexOfBook]);


        // uploading issued details to database
        fetch('https://api.jsonbin.io/v3/b/64081c59c0e7653a058439f8?meta=false ', {
        method: 'PUT',
        body: JSON.stringify(books),
        headers: {
            'Content-type': 'application/json',
            "X-Access-Key": "$2b$10$yCt1TczM9drUVreBsiuKjubH1z/W5ZkloK7Aj/NQFxAbBiqWNN8OO",
        },
    });
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
    }

    checker1 = 0;
    checker2 = 0;

    issueForm.reset();
    bookDetails.innerHTML = '';
    userDetails.innerHTML = '';
    e.preventDefault();
});
