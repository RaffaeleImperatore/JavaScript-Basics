let counter = 0;
let firstbutton = document.querySelector("#firstbutton")

firstbutton.addEventListener('click', function inserimento() {

    let aggiungi = document.createElement("button");
    aggiungi.className = "button";
    aggiungi.innerHTML = "+";
    aggiungi.style = "background-color: greenyellow";
    document.body.append(aggiungi);

    let sottrai = document.createElement("button");
    sottrai.className = "button";
    sottrai.innerHTML = "-";
    sottrai.style = "background-color: red";
    document.body.append(sottrai);

    let contatore = document.createElement("p");
    contatore.className = "p";
    contatore.innerHTML = counter;
    document.body.append(contatore);

    let chiudi = document.createElement("button");
    chiudi.className = "button";
    chiudi.innerHTML = "x";
    document.body.append(chiudi)
  

aggiungi.addEventListener('click', function(){
    counter++
    contatore.innerHTML = counter;
   
})

sottrai.addEventListener('click', function(){
    counter--
   contatore.innerHTML = counter;
})

chiudi.addEventListener('click', function(){
    aggiungi.style = "display: none";
    sottrai.style = "display: none";
    contatore.style = "display: none";
    chiudi.style = "display: none";
})


})



