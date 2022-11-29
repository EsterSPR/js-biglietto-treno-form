const bottone = document.getElementById('generaPass');

bottone.addEventListener('click', function() {

    let nome = document.getElementById('nomePass').value;
    document.getElementById('nomePassOut').innerText = nome;

    let chilometri = document.getElementById('chilometriPass').value;
    let prezzoNormale = chilometri * 0.21;
    console.log(prezzoNormale);

    let anni = document.getElementById('etaPass').value;

    if (anni < '18') {
        let prezzoUnder = prezzoNormale - prezzoNormale / 100 * 20;
        let prezzoUnderRound = prezzoUnder.toFixed(2);
        let prezzoUnderRoundFull = prezzoUnderRound + '€';
        document.getElementById('costoPassOut').innerText = prezzoUnderRoundFull;
        document.getElementById('offertaPassOut').innerText = "Biglietto Under 18";
    } else if (anni > '65') {
        let prezzoOver = prezzoNormale - prezzoNormale / 100 * 40;
        let prezzoOverRound = prezzoOver.toFixed(2);
        let prezzoOverRoundFull = prezzoOverRound + '€';
        document.getElementById('costoPassOut').innerText = prezzoOverRoundFull;
        document.getElementById('offertaPassOut').innerText = "Biglietto over 65";
    } else {
        let prezzoNormaleRound = prezzoNormale.toFixed(2);
        let prezzoNormaleRoundFull = prezzoNormaleRound + '€';
        document.getElementById("costoPassOut").innerText = prezzoNormaleRoundFull;
        document.getElementById('offertaPassOut').innerText = "Biglietto Standard";
    }
})

function myFunction() {
    location.reload();
}