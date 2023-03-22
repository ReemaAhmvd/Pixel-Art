
var row, column, color;
const table = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');


size.addEventListener("submit", function(x) {
    x.preventDefault();
    row = document.getElementById('inputHeight').value;
    column = document.getElementById('inputWidth').value;
    table.innerHTML=('');
    makeGrid(row,column);
    
});

color =document.getElementById('colorPicker');

function makeGrid(row,column) {
for ( let i=0; i < row; i++){
    var rowNum=table.insertRow(i);
    for (let j=0; j < column; j++){
        var cellNum =rowNum.insertCell(j);
        cellNum.addEventListener("click", function(x) {
            if (x.target.tagName==='TD') {
                x.target.style.backgroundColor = color.value;;
            }
            
        });
    }

}

}









