const table = document.getElementById('table');

for(let i=1; i<=10;i++){
    let tr = document.createElement('tr');
    for(let j=1;j<11;j++){
        let td = document.createElement('td');
        td.textContent = `${i} : ${j}`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}


function toggleHighlight(event,add){
    const cell = event.target;
    if (cell.tagName !== 'TD') {
        return;
    }
    const row = cell.parentElement;
    const colIndex = cell.cellIndex;
    const method = add ? 'add' : 'remove';

    row.classList[method]('highlight');

    const cellsInColumn = table.querySelectorAll(`td:nth-child(${colIndex + 1})`);
    cellsInColumn.forEach(c => c.classList[method]('highlight'));
}

table.addEventListener("mouseover",(event)=>{
        toggleHighlight(event, true);
})
table.addEventListener("mouseout",(event)=>{
        toggleHighlight(event, false);
})
