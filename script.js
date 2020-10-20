document.getElementById("btn").addEventListener("click", function (event) {
  document.querySelector("#mp").style.visibility = "visible";
  
  event.preventDefault();
});
document.getElementById("ad").addEventListener("click", function (event) {
  event.preventDefault();
});

document
  .getElementById("ad")
  .addEventListener("click", addBookToLibrary, pbook);

let myLibrary = [];
let i = 0;

function Book(title, aname, pg, status) {
  this.Title = title;
  this.Aname = aname;
  this.Pg = pg;
  this.Status = status;
}

function addBookToLibrary() {
  a = document.querySelector("#title").value;
  b = document.querySelector("#author").value;
  c = document.querySelector("#pages").value;
  if (document.querySelector("#check").checked == true) {
    d = "Read";
  } else {
    d = "Not Read";
  }
  myLibrary[i] = new Book(a, b, c, d);
  pbook(i);
  document.querySelector("#mp").style.visibility = "hidden";
  i++;
}

function pbook(n) {
  p = document.querySelector("#container");
  p.style.visibility = "visible";
  // console.log(myLibrary[n].Title);
  // var codeBlock =
  //   `<div class=book id=book${n}>` +
  //   `Title:${myLibrary[n].Title}` +
  //   `<br> Author:${myLibrary[n].Aname}` +
  //   `<br> Page Number:${myLibrary[n].Pg}` +
  //   `<br><button class=st id='st${n}'>${myLibrary[n].Status}</button>` +`</div>`;
  //   console.log(codeBlock);
  // p.innerHTML+=codeBlock;

  let newdiv = document.createElement("div");
  newdiv.id = `book${n}`;
  newdiv.className = "book";
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p1t = document.createTextNode(`Title:${myLibrary[n].Title}`);
  let p2t = document.createTextNode(`Author:${myLibrary[n].Aname}`);
  let p3t = document.createTextNode(`Page Number:${myLibrary[n].Pg}`);
  p1.appendChild(p1t);
  p2.appendChild(p2t);
  p3.appendChild(p3t);
  var btn = document.createElement("BUTTON");
  btn.className = "st";
  btn.id = `st${n}`;
  let bpt = document.createTextNode(`${myLibrary[n].Status}`);

  var rmb = document.createElement("BUTTON");
  rmb.className = "st";
  rmb.id = `rm${n}`;
  let rmt = document.createTextNode(`DELETE`);
  rmb.appendChild(rmt);

  btn.appendChild(bpt);
  newdiv.appendChild(p1);
  newdiv.appendChild(p2);
  newdiv.appendChild(p3);
  newdiv.appendChild(btn);
  newdiv.appendChild(rmb);
  p.appendChild(newdiv);

  document.querySelector(`#st${n}`).addEventListener("click", function (e) {
    if (this.textContent == "Read") {
      this.textContent = "Not Read";
      myLibrary[n].Status = "Not Read";
    } else if (this.textContent == "Not Read") {
      this.textContent = "Read";
      myLibrary[n].Status = "Read";
    }
  });


  document.querySelector(`#rm${n}`).addEventListener("click",function(e) {
    temp=document.querySelector(`#book${n}`);
   temp.remove();
  });
}

console.log(myLibrary);
