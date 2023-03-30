aside = document.querySelector(".aside");
main = document.querySelector(".main");
dbut = document.querySelector(".dbut");
cbut = document.querySelector(".cbut");
sbut = document.querySelector(".sbut");
textbox = document.querySelector(".textbox");
nav = document.querySelector(".nav");
header1 = document.querySelector(".header1");
header2 = document.querySelector(".header2");
nbut = document.querySelector(".nbut");
asideList = document.querySelector(".asideList");

dbut.addEventListener("click", toggleTheme);
cbut.addEventListener("click", cancel);
nbut.addEventListener("click", createNewNote);
sbut.addEventListener("click", saveNote);
asideList.addEventListener("click", loadnote);

function toggleTheme() {
  if (dbut.textContent == "Dark Theme") {
    dbut.textContent = "Light Theme";
  } else {
    dbut.textContent = "Dark Theme";
  }
  //aside.style.backgroundColor="red";
  aside.classList.toggle("laside");
  main.classList.toggle("lmain");
  nav.classList.toggle("lmain");
  header1.classList.toggle("lmain");
  header2.classList.toggle("laside");
  //toggles classes for text and background colours to create a dark theme
}

function cancel() {
  cbut.hidden = true;
  sbut.hidden = true;
  textbox.hidden = true;
  //hides the save, cancel and textbox from view
}

function createNewNote() {
  if (cbut.hidden === true && sbut.hidden === true && textbox.hidden === true) {
    cbut.hidden = false;
    sbut.hidden = false;
    textbox.hidden = false;
  } else {
    textbox.value = "";
  }
  //shows save, cancel and textbox if they are already hidden, otherwise, clear the textbox
}

notesArray = [{ title: "note one", body: "this is my first note" }];

function saveNote() {
  let newtitle = prompt("Please title this note: ");
  newnote = { title: newtitle, body: textbox.value };
  notesArray.push(newnote);

  newLi = document.createElement("li");
  asideList.appendChild(newLi);
  newLi.textContent = newtitle;
  //prompts the user to enter a title for the current note, 
  //then adds the title and note content into the notesArray 
  //and ands the title to the sidebar list.
}

function loadnote(event) {
  if (event.target.tagName === "LI") {
    //console.log(event.target.textContent)
    for (item of notesArray) {
      if (item["title"] === event.target.textContent) {
        //console.log("true!");
        textbox.value = item["body"];
      } else {
        //console.log('nope');
      }
    }
  }
  //checks the notesArray for any matching titles to the item 
  //that was clicked on in the sidebar, and if it does match, 
  //the textbox value is changed to the body content in the note selected

}
