/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
    return l1 * l2
}

console.log(area(5, 10));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3
    } else {
        return n1 + n2
    }
}

console.log(crazySum(5, 5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n1) {
    if (n1 > 19) {
        return (n1 - 19) * 3
    } else {
        return 19 - n1
    }
}

console.log(crazyDiff(20))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}

console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
    if (str.startsWith("EPICODE")) {
        return str
    } else {
        return "EPICODE" + str
    }
}

console.log(epify(" il sito per developer"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
    if (n % 3 === 0 || n % 7 === 0) {
        return true
    } else {
        return false
    }
}

console.log(check3and7(21))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
    let parolaInvertita = ""

    for (let i = str.length - 1; i >= 0; i--) {
        parolaInvertita += str[i]
    }

    return parolaInvertita
}

console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
    let parole = ""

    let iniziaNuovaParola = true

    for (let i = 0; i < str.length; i++) {
        const carattere = str[i]

        if (iniziaNuovaParola && carattere !== " ") {
            parole += carattere.toUpperCase()
            iniziaNuovaParola = false
        } else {
            
            parole += carattere
        }

        if (carattere === " ") {
            iniziaNuovaParola = true
        }
    }

    return parole
}

console.log(upperFirst("hello my friend"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
    return str.slice(1, -1)
}

console.log(cutString("EPICODE"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
    let array = []

    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 11))
    }

    return array
}

console.log(giveMeRandom(5))
