const result = document.getElementById('result');

function check() {
    const year = parseInt(document.getElementById('year').value);
    console.log(typeof (year));
    if (year >= 0) {
        if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
            result.textContent = `${year} is a leap year.`
        } else {
            result.textContent = `${year} is not a leap year`
        }
    }else{
        result.textContent = 'Enter a valid year';
    }
}