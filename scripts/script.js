aside = document.querySelector(".aside")
main = document.querySelector(".main")
dbut = document.querySelector(".dbut")
nav = document.querySelector(".nav")
header1 = document.querySelector(".header1")
header2 = document.querySelector(".header2")

dbut.addEventListener("click", togglemode)

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


