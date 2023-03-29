aside = document.querySelector(".aside")
main = document.querySelector(".main")
dbut = document.querySelector(".dbut")
cbut = document.querySelector(".cbut")
sbut = document.querySelector(".sbut")
textbox = document.querySelector(".textbox")
nav = document.querySelector(".nav")
header1 = document.querySelector(".header1")
header2 = document.querySelector(".header2")
nbut = document.querySelector(".nbut")
asideList = document.querySelector(".asideList")


dbut.addEventListener("click", togglemode)
cbut.addEventListener("click", cancel)
nbut.addEventListener("click", newnotebut)
sbut.addEventListener("click", save)


function togglemode(){
    if (dbut.textContent == "Dark Theme"){
        dbut.textContent ="Light Theme" 
    } else{
        dbut.textContent="Dark Theme"
    }
    //aside.style.backgroundColor="red";
    aside.classList.toggle("laside");
    main.classList.toggle("lmain");
    nav.classList.toggle("lmain");
    header1.classList.toggle("lmain");
    header2.classList.toggle("laside");    
}

function cancel(){
    cbut.hidden = true;
    sbut.hidden = true;
    textbox.hidden = true;
}

function newnotebut(){
    if (cbut.hidden===true && 
        sbut.hidden === true &&
        textbox.hidden === true){
        cbut.hidden = false;
        sbut.hidden = false;
        textbox.hidden = false;
    } else {
        textbox.value="";
    }
}

notesArray =  [{title:"note one", body:"this is my first note"}]

function save(){
    let newtitle = prompt("Please title this note: ");
    newnote = {title: newtitle, body: textbox.value}
    notesArray.push(newnote)

    newLi = document.createElement("li");
    asideList.appendChild(newLi);
    newLi.textContent = newtitle;
}

