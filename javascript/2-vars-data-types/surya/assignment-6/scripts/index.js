let [a,b,c,d,e,f,g]=['Hi',21,true,,null,Symbol("chill"),{name:'surya'}];
let text= `"${a}" I'm "${g.name}". I'm "${b}" years old. It's "${c}" I'm from Guntur. My pockets are "${e}". My position in home is "${d}".`;
document.getElementsByTagName('h1')[0].textContent=text;