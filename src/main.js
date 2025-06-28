"use strict";
import { books, hidAll } from "./get-data.js";
import {} from "./login.js";
import {} from "./addNewUser.js";
import { Display } from "./bookDisplay.js";
import {} from "./addNewBook.js";
import {} from "./search.js";
import {} from "./issueBook.js";
import {} from "./issuedToUser.js";
import {} from "./bookReturn.js";

// import 'core-js';
// import 'regenerator-runtime/runtime';

// displaying books
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

document.getElementById("books").addEventListener("click", function () {
  hidAll();
  document.getElementById("std-p").classList.toggle("hiddennn");
  document.getElementById("search-bar").classList.toggle("hiddennn");
});

document.getElementById("books1").addEventListener("click", function () {
  hidAll();
  document.getElementById("std-p").classList.toggle("hiddennn");
  document.getElementById("search-bar").classList.toggle("hiddennn");
});

document.getElementById("dashboard-btn").addEventListener("click", function () {
  hidAll();
  document.getElementById("user-dashboard").classList.remove("hiddennn");
});

document.getElementById("std-only1").addEventListener("click", function () {
  hidAll();
  document.getElementById("user-dashboard").classList.remove("hiddennn");
});

document.getElementById("user-logo").addEventListener("click", function () {
  localStorage.removeItem("loginDetails");
  window.history.pushState({}, "", "/");
  window.location.reload();
});

window.addEventListener("hashchange", (e) => {
  const anchors = document.querySelectorAll(".nav-link");

  anchors.forEach((anchor) => {
    if (anchor.id && document.location.hash.includes(anchor.id)) {
      anchor.classList.add("active");
      // document.getElementById(anchor.id + "1").setAttribute("active", "true");
    } else {
      anchor.classList.remove("active");
      // document.getElementById(anchor.id + "1").setAttribute("active", "false");
    }
  });
});
