let createBtn = document.querySelector("#create-btn");
let textBox = document.querySelector("#text-box");
let cardContainer = document.querySelector("#card-container");
let deleteBtn = document.querySelector("#delete-btn");
let colorPickerOne = document.querySelector("#color-picker-one");
let colorPickerTwo = document.querySelector("#color-picker-two");

// functionality

const createRemove = () => {
    createBtn.addEventListener("click", () => {
        let userText = textBox.value;
        let card = `<div id="card">    
        <input type="color" id="color-picker-one" value="#ff0000">
        <input type="color" id="color-picker-two" value="#ff0000">
        <button id="delete-btn">Delete</button>
        <p id="inserText">${userText}</p>
    </div>`
        cardContainer.innerHTML += card;   
    })
    
    deleteBtn.addEventListener("click", () => {
        cardContainer.removeChild(card);
    })
}

createRemove();







