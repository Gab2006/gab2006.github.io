immagini = ["cane.jpg",
            "gatto.jpg",
            "mentani.jpg",
            "montagna.jpg",
            "isola.jpg",
            "ferrari.jpg",
            "roman.jpg",
            "ragani.jpg",
            "semaforo.jpg",
            "kanye west.jpg",
            "vespa.jpg",
            "yacht.jpg",
            "strada.jpg",
            "windows.jpg",
            "surry.jpg",
            "mussolini.jpg",
            "stepny.jpg",
            "hasbulla.jpg",
            "tomas.jpg",
        ]
let tentativi = 3;

function immagine_random(){
    document.getElementById("mostra_immagine").style.webkitFilter = `blur(30px)`;
    random_index = Math.floor(Math.random() * immagini.length);
    immagine_scelta = immagini[random_index];
    document.getElementById("mostra_immagine").src = "./immagini/"+immagine_scelta;
}

function ricomincia(){
    location.reload();
}


function checknome(){
    let parola = document.getElementById("testo_input").value;
    document.getElementById("testo_input").value = "";
    if (tentativi == 3){
        if (parola == immagine_scelta.substring(0, immagine_scelta.lastIndexOf("."))){
            console.log(parola);
            console.log(tentativi);
            tentativi = 3;
            immagine_random();            
        }else{
            document.getElementById("mostra_immagine").style.webkitFilter = `blur(20px)`;
            tentativi = tentativi-1;
        }

    }
    else if (tentativi == 2){
        tentativi = tentativi-1;
        if (parola == immagine_scelta.substring(0, immagine_scelta.lastIndexOf("."))){
            console.log(parola);
            console.log(tentativi);
            tentativi = 3;
            immagine_random();            
        }else{
            document.getElementById("mostra_immagine").style.webkitFilter = `blur(10px)`;
            tentativi = tentativi-1;
        }
    }
    else if (tentativi == 1){
        tentativi = tentativi-1;
        if (parola == immagine_scelta.substring(0, immagine_scelta.lastIndexOf("."))){
            console.log(parola);
            console.log(tentativi);
            tentativi = 3;
            immagine_random();            
        }else{
            document.getElementById("mostra_immagine").style.webkitFilter = `blur(5px)`;
            tentativi = tentativi-1;
        }
    }
    else if (tentativi == 0){
        if (parola == immagine_scelta.substring(0, immagine_scelta.lastIndexOf("."))){
            console.log(parola);
            console.log(tentativi);
            tentativi = 3;
            immagine_random();
        }else{
        document.getElementById("mostra_immagine").style.webkitFilter = `blur(0px)`;
        document.getElementById("testo_perdita").innerHTML = "<b>GAME OVER</b>";
        }
    }
    console.log(immagine_scelta.substring(0, immagine_scelta.lastIndexOf(".")));
}



let input = document.getElementById("testo_input");
input.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("bottone_invio").click();
    }
});

immagine_random();
