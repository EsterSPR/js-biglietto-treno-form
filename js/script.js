const bottone = document.getElementById('generaPass');

bottone.addEventListener('click', function() {

    let nome = document.getElementById('nomePass');
    let nomeVal = nome.value;
    document.getElementById('nomePassOut') = nomeVal;

    let chilometri = document.getElementById('chilometriPass');
    let chilometriVal = chilometri.value;
    let prezzoNormale =chilometriVal * 0.21;
    console.log(prezzoNormale);

    let anni = document.getElementById('etaPass');
    let anniVal = anni.value;

    if (anniVal < '18') {
        let prezzoUnder = prezzoNormale / 100 * 20;
        let prezzoUnderRound = prezzoUnder.toFixed(2);
        console.log(prezzoUnderRound);
        let prezzoUnderRoundFull = prezzoUnderRound + '€';
        document.getElementById('costoPassOut') = prezzoUnderRoundFull;
        document.getElementById('offertaPassOut') = "Biglietto Under 18";
    } else if (anniVal > '65') {
        let prezzoOver = prezzoNormale / 100 * 40;
        let prezzoOverRound = prezzoOver.toFixed(2);
        console.log(prezzoOverRound);
        let prezzoOverRoundFull = prezzoOverRound + '€';
        document.getElementById('costoPassOut') = prezzoOverRoundFull;
        document.getElementById('offertaPassOut') = "Biglietto over 65";
    } else {
        let prezzoNormaleRound = prezzoNormale.toFixed(2);
        console.log(prezzoNormaleRound);
        let prezzoNormaleRoundFull = prezzoNormaleRound + '€';
        document.getElementById("costoPassOut") = prezzoNormaleRoundFull;
        document.getElementById('offertaPassOut') = "Biglietto Standard";
    }
})

function myFunction() {
    location.reload();
}