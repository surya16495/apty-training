let [a,b,c,d,e,f,g]=['hey',1234,false,,null,Symbol("unique"),{name:'Chandra'}];
document.getElementsByTagName('p')[0].innerHTML += `a=${a} is added with 5 ${a+5} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `b=${b} is added with 5 ${b+5} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `c=${c} is added with 5 ${c+5} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `d=${d} is added with 5 ${d+5} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `e=${e} is added with 5 ${e+5} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `g=${g} is added with 5 ${g+5} <br>`;

document.getElementsByTagName('p')[1].innerHTML += `a=${a} is added with "hi" ${a+"hi"} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `b=${b} is added with "hi" ${b+"hi"} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `c=${c} is added with "hi" ${c+"hi"} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `d=${d} is added with "hi" ${d+"hi"} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `e=${e} is added with "hi" ${e+"hi"} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `g=${g} is added with "hi" ${g+"hi"} <br>`;
