const form = document.querySelector(".js-form") 
const input = form.querySelector("input") 
const greeting = document.querySelector(".js-greetings") 



const userID ="user";
const show ="showing";

function saveID(text){
    localStorage.setItem(userID, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveID(currentValue);
}

function askID(){
    form.classList.add(show);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(show);
    greeting.classList.add(show);
    greeting.innerText = `Welcome ${text}`;
}

function loadID(){
    const currentID = localStorage.getItem(userID);
    if(currentID === null){
        askID();
    }else{
        paintGreeting(currentID);
    }
}

function init(){
    loadID();
}

init();