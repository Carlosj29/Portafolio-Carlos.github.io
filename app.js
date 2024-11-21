//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible == false){ // si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//Creacion de las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//Selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let python = document.getElementById("python");
crearBarra(python);
let ia = document.getElementById("ia");
crearBarra(ia);
let ml = document.getElementById("ml");
crearBarra(ml);
let dl = document.getElementById("dl");
crearBarra(dl);
let sql = document.getElementById("sql");
crearBarra(sql);

//Ahora voy a guardar la cantidad de barritas que se vn a ir pintando por cada barra
//para eso utilizo un arreglo, cada posicion pertenece a un elemento
//Comienza en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//Esta variable la voy a utilizar de bandera para saber si ya ejecuto la animacion
let entro = false;

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalpython = setInterval(function(){
            pintarBarra(python, 16, 0, intervalpython);
        }, 100);
        const intervalia = setInterval(function(){
            pintarBarra(ia, 16, 1, intervalia);
        }, 100);
        const intervalml = setInterval(function(){
            pintarBarra(ml, 15, 2, intervalml);
        }, 100);
        const intervaldl = setInterval(function(){
            pintarBarra(dl, 14, 3, intervaldl);
        }, 100);
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 13, 4, intervalHtml);
        }, 100);
        const intervalsql = setInterval(function(){
            pintarBarra(sql, 12, 5, intervalsql);
        }, 100);
    }
}
//Lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//Detecto el scrolling del mouse para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}