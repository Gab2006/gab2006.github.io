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
            "instagram.jpg",
            "cuffie.jpg",
            "camino.jpg",
            "khabib.jpg",
            "burj khalifa.jpg",
            "tom cruise.jpg",
            "minecraft.jpg",
            "matita.jpg",
            "alberto angela.jpg",
            "stadio.jpg",
        ]
let tentativi = 3;
let punti = 0;
let testo_punti;
let risposta_corretta = new Audio("./sounds/risposta_corretta.mp3");
let risposta_sbagliata = new Audio("./sounds/risposta_sbagliata.mp3");
let perso = new Audio("./sounds/perso.mp3");
let master_volume;

function volume_gioco(){
    master_volume = document.getElementById('master_volume').value;
    master_volume = master_volume/100;
    console.log(master_volume);
    risposta_corretta.volume = master_volume;
    risposta_sbagliata.volume = master_volume;
    perso.volume = master_volume;
}
function punteggi() {
    testo_punti = document.getElementById("punti");
    punti = punti+1;
    testo_punti.innerHTML = `PUNTI: ${punti}`;
}

function immagine_random(){
    document.getElementById("mostra_immagine").style.webkitFilter = `blur(30px)`;
    random_index = Math.floor(Math.random() * immagini.length);
    immagine_scelta = immagini[random_index];
    document.getElementById("mostra_immagine").src = "./immagini/"+immagine_scelta;
}

function ricomincia(){
    location.href = "index.html";
}

function checknome(){
    let parola = document.getElementById("testo_input").value;
    document.getElementById("testo_input").value = "";
    if (tentativi == 3){
        if (parola.toLowerCase() == immagine_scelta.substring(0, immagine_scelta.lastIndexOf("."))){
            tentativi = 3;
            risposta_corretta.play();
            punteggi()
            immagine_random();            
        }else{
            risposta_sbagliata.play();
            document.getElementById("mostra_immagine").style.webkitFilter = `blur(20px)`;
            tentativi = tentativi-1;
        }

    }
    else if (tentativi == 2){
        tentativi = tentativi-1;
        if (parola.toLowerCase() == immagine_scelta.substring(0, immagine_scelta.lastIndexOf("."))){
            tentativi = 3;
            risposta_corretta.play();
            punteggi()
            immagine_random();            
        }else{
            document.getElementById("mostra_immagine").style.webkitFilter = `blur(10px)`;
            tentativi = tentativi-1;
            risposta_sbagliata.play();
        }
    }
    else if (tentativi == 1){
        tentativi = tentativi-1;
        if (parola.toLowerCase() == immagine_scelta.substring(0, immagine_scelta.lastIndexOf("."))){
            tentativi = 3;
            risposta_corretta.play();
            punteggi()
            immagine_random();            
        }else{
            document.getElementById("mostra_immagine").style.webkitFilter = `blur(5px)`;
            tentativi = tentativi-1;
            risposta_sbagliata.play();
        }
    }
    else if (tentativi == 0){
        if (parola.toLowerCase() == immagine_scelta.substring(0, immagine_scelta.lastIndexOf("."))){

            tentativi = 3;
            risposta_corretta.play();
            punteggi()
            immagine_random();
        }else{
            document.getElementById("mostra_immagine").style.webkitFilter = `blur(0px)`;
            document.getElementById("ricominciare").style.opacity = "100%";
            perso.play()
        }
    }
}

let input = document.getElementById("testo_input");
input.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("bottone_invio").click();
    }
});

immagine_random();
