function displayNonogramGrid() {
    var rows = parseInt(document.getElementById("rows").value);
    var cols = parseInt(document.getElementById("cols").value);
    var rowArray = document.getElementById('rowValues').value.split(',');
    var colArray = document.getElementById('colValues').value.split(',');

    console.log(rowArray);
    console.log(colArray);

    // Membuat tabel untuk menampilkan grid
    var gridTable = document.createElement("table");

    // Membuat sel untuk setiap baris dan kolom
    for (var i = 0; i <= rows; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j <= cols; j++) {
            var cell = document.createElement(i === 0 || j === 0 ? "th" : "td");
            cell.textContent = i === 0 ? (j === 0 ? "" : colArray[j-1]) : (j === 0 ? rowArray[i-1] : "");
            if ((i === 0 && j !== 0) || (j === 0 && i !== 0)) {
                cell.style.backgroundColor = '#333';
                cell.style.color = 'white';
            }
            cell.style.width = "40px"; // Atur lebar sel (misalnya 30px)
            cell.style.height = "40px"; // Atur tinggi sel (misalnya 30px)
            row.appendChild(cell);
        }
        gridTable.appendChild(row);
    }

    // Event listener untuk setiap sel
    gridTable.addEventListener('click', function(event) {
        var target = event.target;
        if (target.tagName === 'TD') {
            if (target.style.backgroundColor === 'black') {
                target.style.backgroundColor = '';
            } else {
                target.style.backgroundColor = 'black';
            }
        }
    });

    // Menambahkan tabel ke container grid
    var gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";
    gridContainer.appendChild(gridTable);
}