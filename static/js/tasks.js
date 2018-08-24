var container = document.getElementById("container"),
    addListBtn = document.getElementById("add-a-list-btn"),
    addList1 = document.getElementById("add-a-list"),
    saveListBtn = document.getElementById("save-list-btn"),
    saveListBox = document.getElementById("save-list-box"),
    listInputBox = document.getElementById("list-input-box"),
    textValue;

var data = {
    lists: []
};

function addList() {
    "use strict";
    saveListBox.style.display = "inline-block";

}

function createList(textValue) {
    "use strict";
    if (textValue) {
        var parentDiv = document.createElement("div"),
            listTitle = document.createElement("div"),
            title = document.createElement("div"),
            dotIcon = document.createElement("a"),
            newTextNode = document.createTextNode(textValue),
            addCardLink = document.createElement("a"),
            addText = document.createTextNode("Add a card..."),
            lists,
            x,
            y;

        data.lists.push({
            title: textValue,
            cards: []
        });

        lists = data.lists.map(function (e) {
            return e;
        });

        for (x = 0; x < lists.length; x += 1) {
            parentDiv.setAttribute("class", "add-card-container");
            parentDiv.setAttribute("id", "list-container" + x);
            dotIcon.setAttribute("class", "fa fa-ellipsis-h ellipsis");
            dotIcon.setAttribute("id", "del" + x);
            title.setAttribute("contenteditable", "true");
            title.setAttribute("class", "text");
            title.appendChild(newTextNode);
            listTitle.appendChild(dotIcon);
            listTitle.setAttribute("class", "list-title");
            listTitle.appendChild(title);
            addCardLink.setAttribute("href", "#");
            addCardLink.setAttribute("class", "add-card");
            addCardLink.setAttribute("id", "add" + x);
            addCardLink.appendChild(addText);
            parentDiv.style.cssFloat = "left";
            parentDiv.style.display = "inline-block";
            parentDiv.appendChild(listTitle);
            parentDiv.appendChild(addCardLink);
            container.insertBefore(parentDiv, addList1);
            addListBtn.style.display = "inline-block";
            saveListBox.style.display = "none";
            listInputBox.value = "";

            document.getElementById("add" + x).addEventListener('click', addCards(x));

        }
    }
}

window.addEventListener("load", function () {
    "use strict";
    addListBtn.addEventListener("click", function () {
        addList();
    });

    saveListBtn.addEventListener("click", function () {
        textValue = listInputBox.value;
        createList(textValue);
    });
});


