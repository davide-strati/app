var el = document.getElementById('style__container');
var classeAttiva = el.className;
// document.getElementById('stile-1').addEventListener('click', function(){
//     classeAttiva = el.className;
//     el.classList.remove(classeAttiva);
//     el.classList.add('theme--dark');
// });
// document.getElementById('stile-2').addEventListener('click', function(){
//     classeAttiva = el.className;
//     el.classList.remove(classeAttiva);
//     el.classList.add('theme--light');
// });
// document.getElementById('stile-3').addEventListener('click', function(){
//     classeAttiva = el.className;
//     el.classList.remove(classeAttiva);
//     el.classList.add('theme--viola');
// });

function cambiaTema(t) {
    console.log(t);
    classeAttiva = el.className;
    el.classList.remove(classeAttiva);
    el.classList.add(t);
}
