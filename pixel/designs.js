





// Creating the Grid//
function makeGrid() {


    //establishing the variables//

    var rows;
    var cols;
    var color = "#ffffff";


    var table = document.getElementById("pixel_canvas");
    table.innerHTML = "";
    while (table.rows.length > 0)
        table.deleteRow(0);
    rows = document.getElementById("input_height").value; // Getting the value of the input for columns
    cols = document.getElementById("input_width").value; // Getting the value of the input for rows

    //Loop to keep adding rows based on the input number//
    for (var i = 0; i < rows; i++) {
        var row_elem = table.insertRow(i);
        row_elem.setAttribute("class", "row");

        //Loop to keep adding columns based on the input number//
        for (var k = 0; k < cols; k++) {
            var cell = row_elem.insertCell(k);

            //setting the event listener, on click //

            cell.addEventListener('click', function (evt) { 
                
                evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
                    this.style.boxShadow = "10px 0 20px #eeeeee";

            });  
        }
    }
    return false;
}



document.getElementById("sizePicker").addEventListener("submit", function (evt) {
    evt.preventDefault();
    makeGrid();

});


                