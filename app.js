let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

function clicConsola(){
    console.log("El botón fue clicado");
}

function clicPromp(){
    let ciudad = prompt("Indique el nombre de una ciudad");
    alert(`Estuve en ${ciudad} y me acordé de ti.`);
}

function clicAlert(){
    alert("Yo amo JS");
}

function clicSuma(){
    let num1 = parseInt(prompt("Escriba un numero"));
    let num2 = parseInt(prompt("Escriba OTRO numero"));
    alert(`La suma de ${num1} más ${num2} es ${num1+num2}.`);
}