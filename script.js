var cuadricula=0;


console.log("hola F")
 const contenedor= document.querySelector("#container")
 const mod= document.querySelector("#mod")

 

    for (let index = 1; index <= 16; index++) {
  let divs= document.createElement("div");
  divs.innerText="xxx"+index;
  divs.classList.add("divscss");
   contenedor.appendChild(divs);
   console.log(index)
   document.querySelectorAll(".divscss").forEach(caja => caja.style.width="288px")
   document.querySelectorAll(".divscss").forEach(caja => caja.style.height="288px")
   document.querySelectorAll(".divscss").forEach(caja => caja.style.marginBottom="16px")
  }


mod.addEventListener("click",()=>{
cuadricula=prompt("valor de la cuadricula deseada") 
console.log(cuadricula)
let raizCuad=Math.sqrt(cuadricula)
let viejosdivs= document.querySelectorAll(".divscss")
for(element of viejosdivs){
  contenedor.removeChild(element)
}


for (let index = 1; index <= raizCuad; index++) {
  for (let index = 1; index <= raizCuad; index++) {
  let divs= document.createElement("div");
  divs.innerText="div"+index;
  divs.classList.add("divscss");
  contenedor.appendChild(divs);
  }}
  var vl=(1200/raizCuad)*.98;
  var ml=(1200/raizCuad)*.02;
  console.log(raizCuad)
  document.querySelectorAll(".divscss").forEach(caja => caja.style.width=vl+"px")
  document.querySelectorAll(".divscss").forEach(caja => caja.style.height=vl+"px")
  document.querySelectorAll(".divscss").forEach(caja => caja.style.marginBottom=ml+"px")
  document.querySelectorAll(".divscss").forEach(element => {element.addEventListener("mouseover",(e)=>{
    let newColor= Math.floor(Math.random()*16777216).toString(16);
    e.target.style.background= "#"+newColor;
  })});

});

//const clrHvr = 
const clrHvr = document.querySelectorAll(".divscss").forEach(element => {element.addEventListener("mouseover",(e)=>{
  let newColor= Math.floor(Math.random()*16777216).toString(16);
  console.log(newColor)
  e.target.style.background= "#"+newColor;
})});

/* si se usa query selectorall[0] el primer elemento, yo quiero que lo haga para 
todos porlo tanto en el foreach le pongo a cada  un eventlistener cuando el mouse pasa por encima
"mouseover", de ahi la funcion flecha que accede a cada elemento que genero el evento e.target con eso ya se puede modificar el
estilo y color de fondo;*/

/* clrHvr.
//alert(e.target+"work?")
}) */

/* const clrHvr1 = document.querySelectorAll(".divscss")[6];
clrHvr1.addEventListener("mouseover",(e)=>{
e.target.style.background= "black";
//alert(e.target+"work?")
}) */

/*
const contenedor= document.querySelector("#container")
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const div4 = document.createElement("div")
const div5 = document.createElement("div")
const div6 = document.createElement("div")
const div7 = document.createElement("div")
const div8 = document.createElement("div")
const div9 = document.createElement("div")
const div10 = document.createElement("div")
const div11 = document.createElement("div")
const div12 = document.createElement("div")
const div13 = document.createElement("div")
const div14 = document.createElement("div")
const div15 = document.createElement("div")
const div16 = document.createElement("div")

//losdivs.classList.add(divs);
contenedor.appendChild(div1).classList.add("divs");
contenedor.appendChild(div2).classList.add("divs");
contenedor.appendChild(div3)
contenedor.appendChild(div4);
contenedor.appendChild(div5);
contenedor.appendChild(div6);
contenedor.appendChild(div7);
contenedor.appendChild(div8);
contenedor.appendChild(div9);
contenedor.appendChild(div10);
contenedor.appendChild(div11);
contenedor.appendChild(div12);
contenedor.appendChild(div13);
contenedor.appendChild(div14);
contenedor.appendChild(div15);
contenedor.appendChild(div16);

/* const losdivs = document.querySelectorAll("div")
losdivs.classList.add("divs"); */

