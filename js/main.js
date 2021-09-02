var btnPlay = document.getElementById("play");
var playground = document.getElementById("playground");

btnPlay.addEventListener("click", 
    function(){
        //raccolgo gli input dell'utente per righe e colonne
        var rows = parseInt(document.getElementById("rows").value);
        var columns = parseInt(document.getElementById("columns").value);

        //valido gli input dell'utente per righe e colonne
        if(rows < 2 || rows > 10 || columns < 2 || columns > 10) {
            return alert("Attenzione! Devi inserire un numero compreso da 2 a 10 per righe e colonne!");
        } else {
            //calcolo il numero di caselle moltiplicando righe per colonne
            var boxNumber = rows * columns;

            //genero gli elementi nell'HTML con un ciclo for
            for (var i = 1; i <= boxNumber; i++) {
                playground.innerHTML += `<div class="square">${i}</div>`;
            }

            //aggiungo all'elemento con id "playground" la classe appropriata per il numero di colonne
            playground.classList.add("col_" + columns);
        }
    }
)


playground.addEventListener("click",
    function(clicked) {
        clicked.target.classList.add("clicked");
        alert(clicked.target.innerHTML)
    }
)

