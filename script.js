const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.getElementById("myList");

ul.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle('done');
  }
}, false);

btn.addEventListener("click", function(){
    if (input.value.length > 0 ) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Remove"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    })
    }
})

input.addEventListener("keypress", function(event){
    if (input.value.length > 0 && event.keyCode === 13 ) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Remove"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    })
    }
})