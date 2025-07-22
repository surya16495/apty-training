let [a,b,c,d,e,f,g]=['hello',9999,false,,null,Symbol("identifier"),{name:'Prakash'}];
document.getElementsByTagName('p')[0].innerHTML += `a=${a} converted to number is ${Number(a)} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `b=${b} converted to number is ${Number(b)} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `c=${c} converted to number is ${Number(c)} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `d=${d} converted to number is ${Number(d)} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `e=${e} converted to number is ${Number(e)} <br>`;
document.getElementsByTagName('p')[0].innerHTML += `g=${g} converted to number is ${Number(g)} <br>`;

document.getElementsByTagName('p')[1].innerHTML += `a=${a} converted to string is ${String(a)} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `b=${b} converted to string is ${String(b)} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `c=${c} converted to string is ${String(c)} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `d=${d} converted to string is ${String(d)} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `e=${e} converted to string is ${String(e)} <br>`;
document.getElementsByTagName('p')[1].innerHTML += `g=${g} converted to string is ${String(g)} <br>`;

document.getElementsByTagName('p')[2].innerHTML += `a=${a} converted to Boolean is ${Boolean(a)} <br>`;
document.getElementsByTagName('p')[2].innerHTML += `b=${b} converted to Boolean is ${Boolean(b)} <br>`;
document.getElementsByTagName('p')[2].innerHTML += `c=${c} converted to Boolean is ${Boolean(c)} <br>`;
document.getElementsByTagName('p')[2].innerHTML += `d=${d} converted to Boolean is ${Boolean(d)} <br>`;
document.getElementsByTagName('p')[2].innerHTML += `e=${e} converted to Boolean is ${Boolean(e)} <br>`;
document.getElementsByTagName('p')[2].innerHTML += `g=${g} converted to Boolean is ${Boolean(g)} <br>`;

