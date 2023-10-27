const age = parseInt( prompt("Inserire l'età del viaggiatore") );
const distance = parseInt( prompt("Inserire la distanza del viaggio in km") );
const element = document.getElementById("message");
const costoPerKm = 0.21;
let message = "";

// Se età e distanza sono numerici
if( Number.isFinite(age) && Number.isFinite(distance) ) {
    
    // Calcola costo iniziale
    let costo = distance * costoPerKm;
    console.log("Costo iniziale: ", costo);

    // Sconto under 18
    if(age < 18) {
        costo = costo * 0.8;
        message = `Hai diritto allo sconto junior. `;

    // Sconto over 65
    } else if(age >= 65) {
        costo = costo * 0.6;      
        message = `Hai diritto allo sconto senior. `;
    }

    //Dopo if/else dell'età
    message += `Costo biglietto: ${costo.toFixed(2)} €`;

// In caso di errori relativi ai dati inseriti
} else {
    message = "Errore: i dati inseriti non sono numerici";
}

element.innerHTML = message;