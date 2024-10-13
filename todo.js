const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        
        let editBtn = document.createElement("span");
        editBtn.classList.add("edit");
        li.appendChild(editBtn);

        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        
        editBtn.addEventListener("click", function () {
            let currentText = li.firstChild.textContent;
            let newText = prompt("Edit your task", currentText);
            if (newText !== null && newText !== '') {
                li.firstChild.textContent = newText;
                saveData();
            }
        });
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN" && e.target.innerHTML === "\u00d7") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
