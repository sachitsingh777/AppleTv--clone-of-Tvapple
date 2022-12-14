
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