function up(button){
    const row = button.closest("tr");
	const prevRow = row.previousElementSibling
	if (prevRow) {
		row.parentNode.insertBefore(row, prevRow)
	}
}

function down(button){
    const row = button.closest("tr")
	const nextRow = row.nextElementSibling;
	if (nextRow) {
		row.parentNode.insertBefore(nextRow, row)
	}
}

function moveTop(button){
    const row = button.closest("tr")
	const tableBody = row.parentNode
	tableBody.insertBefore(row, tableBody.firstElementChild)
}

function bottom(button){
    const row = button.closest("tr")
	row.parentNode.insertBefore(row,null);
}