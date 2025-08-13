const table = document.getElementById('table');

for(let i=1; i<=10;i++){
    let tr = document.createElement('tr');
    for(let j=1;j<11;j++){
        let td = document.createElement('td');
        td.textContent = `${i} : ${j}`;
        td.id=`id-${j}`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

table.addEventListener("mouseover",(event)=>{
    const row = event.target.closest('tr');
if (row) row.classList.add('highlight');
    document.querySelectorAll(`#${event.target.id}`).forEach((item)=>{
        item.classList.add('highlight');
    })
})
table.addEventListener("mouseout",(event)=>{
    const row = event.target.closest('tr');
if (row) row.classList.remove('highlight');
document.querySelectorAll(`#${event.target.id}`).forEach((item)=>{
        item.classList.remove('highlight');
    })
})
