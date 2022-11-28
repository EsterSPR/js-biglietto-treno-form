const bottone = document.getElementById('generaPass');

bottone.addEventListener('click', function() {
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
    } else if (anniVal > '65') {
        let prezzoOver = prezzoNormale / 100 * 40;
        let prezzoOverRound = prezzoOver.toFixed(2);
        console.log(prezzoOverRound);
    } else {
        let prezzoNormaleRound = prezzoNormale.toFixed(2);
        console.log(prezzoNormaleRound);
    }
})

