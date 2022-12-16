
function next(s){
    let main=s.parentElement.parentElement.children[0];
    console.log(main);
let item=main.getElementsByClassName("item");

      main.append(item[0]);
}

function prev(s){
    let main=s.parentElement.parentElement.children[0];
    console.log(main);
let item=main.getElementsByClassName("item");
    main.prepend(item[item.length-1]);
}



let popup=document.getElementById("popup");
let c=document.getElementById("create");

function openmain(){
    popup.classList.add("openpopup");
    
}

function closemain(){
    popup.classList.remove("openpopup");
}


function opencreate(){
    console.log("ok");
    c.classList.add("opencreate");
}