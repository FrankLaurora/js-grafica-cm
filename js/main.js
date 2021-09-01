var boxNumber = parseInt(prompt("Con quante caselle vuoi giocare?"));
var playground = document.getElementById("playground");

for (var i = 1; i <= boxNumber; i++) {
    playground.innerHTML += `<div class="square">${i}</div>`;
}

playground.addEventListener("click",
    function(clicked) {
        clicked.target.classList.add("clicked");
        alert(clicked.target.innerHTML)
    }
)