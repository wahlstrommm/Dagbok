let root = document.getElementById("root");

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");




let btn = document.getElementById("btn");
let btnDel = document.getElementById("btnDel");

const storagePost = document.querySelector(".storagePost");
const storageDate = document.querySelector(".storageDate");
const button = document.querySelector(".button");

const saveToLocalStorage = () =>{
    localStorage.setItem("text",storageDate.content);
}

button.addEventListener("click",saveToLocalStorage);

storagePost.addEventListener("input", letter =>{
storageDate,storageDateContent = letter.target.value;
console.log(letter);
})


let head = document.createElement("h2");
let post = document.createElement("p");
let date = document.createElement("p");

listUl = document.createElement("ul");
let li = document.createElement("li");
blogPostArray = [head,post,date];
delList()
printOutList()
function printOutList(){

    btn.addEventListener("click",function(){
        showList();
        setLocal();
        getItem(key);
    })

    }

    function setLocal(){
        localStorage.setItem("key",blogPostArray.value);
    }

function showList(){
    let head = document.createElement("h2");
    let post = document.createElement("p");
    let date = document.createElement("p");

    head.innerText = document.getElementById("headingInput").value;
    post.innerText = document.getElementById("postInput").value;
    date.innerText = document.getElementById("dateInput").value;
    container = document.createElement("div");
    blogPostArray.push(head,post,date);
    console.log(blogPostArray.length);

    for(i=0; i<blogPostArray.length; i++){
        
        container.id = i;
        div2.append(container);
        container.append(head,post,date);
    }

}
function delList(){
    btnDel.addEventListener("click",function(){
        localStorage.clear();
        window.location.reload();
    });
}