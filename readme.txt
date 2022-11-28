PROBLEMA: Scrivere un programma che chieda all’utente: - Il numero di chilometri da percorrere - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: - il prezzo del biglietto è definito in base ai km (0.21 € al km) - va applicato uno sconto del 20% per i minorenni - va applicato uno sconto del 40% per gli over 65.

1 - Chiedere all'utente quanti chilometri deve percorrere
2 - Moltiplicare 0.21€ per il numero di chilometri 
3 - Chiedere all'utente quanti anni ha
    SE età minore di 18
        Applicare uno sconto del 20%
    ALTRIMENTI SE età maggiore di 65
        Applicare uno sconto del 40%
    ALTRIMENTI
        Non applicare uno sconto
4 - Emettere il prezzo con massimo 2 decimali