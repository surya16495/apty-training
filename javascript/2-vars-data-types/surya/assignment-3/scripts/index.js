let [a,b,c,d,e,f,g]=['hi',9,true,,null,Symbol("id"),{name:'surya'}];
document.getElementsByTagName("p")[0].textContent=`Type of a = "${a}" is ${typeof(a)}`;
document.getElementsByTagName("p")[1].textContent=`Type of b = "${b}" is ${typeof(b)}`;
document.getElementsByTagName("p")[2].textContent=`Type of c = "${c}" is ${typeof(c)}`;
document.getElementsByTagName("p")[3].textContent=`Type of d = "${d}" is ${typeof(d)}`;
document.getElementsByTagName("p")[4].textContent=`Type of e = "${e}" is ${typeof(e)}`;
document.getElementsByTagName("p")[5].textContent=`Type of f is ${typeof(f)}`;
document.getElementsByTagName("p")[6].textContent=`Type of g is ${typeof(g)}`;