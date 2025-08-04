const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const values = ((document.getElementById('values').value).split(',')).map(num => parseFloat(num));

    const sortedValues = function (values) {
        let l = values.length;
        for (let i = 0; i < l; i++) {
            if (i < l - 1) {
                let temp;
                for (let j = i + 1; j < l; j++) {
                    if (values[i] > values[j]) {
                        temp= values[j];
                        values[j]=values[i];
                        values[i]=temp;
                    } else {
                        continue;
                    }
                }
            }
        }
        return values;
    }

    let result = document.getElementById('result');
    result.innerHTML='';

    let sortedArray = sortedValues(values);

    sortedArray.forEach(element => {
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.textContent=element;
        row.appendChild(cell);
        result.appendChild(row);
    });
    document.getElementById('values').value='';
})