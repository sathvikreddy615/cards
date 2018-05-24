let createBtn = document.querySelector("#create-btn");
let cardContainer = document.querySelector("#card-container");
// 


createBtn.addEventListener("click", () => {
    
    const colorPickerOne = () => {
        let input1 = document.createElement("input");
        input1.type = "color";
        input1.className = "picker1";
        input1.name = "picker1";
        input1.addEventListener("change", changeBackgroundColor);
        return input1;
    }

    const changeBackgroundColor = () => {
        event.target.parentNode.style.backgroundColor = event.target.value;
    }

    const colorPickerTwo = () => {
        let input2 = document.createElement("input");
        input2.type = "color";
        input2.className = "picker2";
        input2.name = "picker2";
        input2.addEventListener("change", changeFontColor);
        return input2;
    }

    const changeFontColor = () => {
        event.target.parentNode.style.color = event.target.value;
    }

    let card = document.createElement("div");
    card.className = "card";

    const deleteButton = () => {
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", () => {
            event.target.parentNode.remove();
        });
        return deleteBtn;
    }

    const addUserText = () => {
        let userText = document.querySelector("#text-box").value;
        let injectText = document.createElement("p");
        injectText.textContent = userText;
        return injectText;
    }

    cardContainer.appendChild(card);
    card.appendChild(colorPickerOne());
    card.appendChild(colorPickerTwo());
    card.appendChild(deleteButton());
    card.appendChild(addUserText());

})
