// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const checkArray = function (array) {
    let somma = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            console.log(array[i])
            somma += array[i]
        }
    }

    return somma
}

console.log(checkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCartTotal = function (shoppingCart) {
    let totale = 0

    for (let i = 0; i < shoppingCart.length; i++) {
        totale += shoppingCart[i].price * shoppingCart[i].quantity
    }

    return totale
}

console.log(shoppingCartTotal([{ price: 10, name: "banana", id: 1, quantity: 2 }, { price: 5, name: "caffè", id: 2, quantity: 1 }, { price: 2, name: "latte", id: 3, quantity: 1 }]))
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

const addToShoppingCart = function (shoppingCart, newItem) {
    shoppingCart.push(newItem)
    return shoppingCart.length
}

console.log(addToShoppingCart([{ price: 10, name: "banana", id: 1, quantity: 2 }, { price: 5, name: "caffè", id: 2, quantity: 1 }, { price: 2, name: "latte", id: 3, quantity: 1 }], { price: 1, name: "uova", id: 4, quantity: 1 }))

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

const maxShoppingCart = function (shoppingCart) {
    let max = shoppingCart[0]

    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price > max.price) {
            max = shoppingCart[i]
        }
    }

    return max
}

console.log(maxShoppingCart([{ price: 10, name: "banana", id: 1, quantity: 2 }, { price: 5, name: "caffè", id: 2, quantity: 1 }, { price: 2, name: "latte", id: 3, quantity: 1 }]))


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

const latestShoppingCart = function (shoppingCart) {
    return shoppingCart[shoppingCart.length - 1]
}

console.log(latestShoppingCart([{ price: 10, name: "banana", id: 1, quantity: 2 }, { price: 5, name: "caffè", id: 2, quantity: 1 }, { price: 2, name: "latte", id: 3, quantity: 1 }]))

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

const loopUntil = function (x) {
    let count = 0

    while (count < 3) {
        let random = Math.floor(Math.random() * 10)
        console.log("Numero casuale:", random)
        if (random > x) {
            count++
        } else {
            count = 0
        }
    }

    console.log("Finito! Tre numeri consecutivi maggiori di", x)
}

loopUntil(5)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const average = function (array) {
    let somma = 0
    let count = 0

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            somma += array[i]
            count++
        }
    }

    return somma / count
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c", "d", "e", "f"]))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

const longest = function (array) {
    let longest = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i]
        }
    }
    
    return longest
}

console.log(longest(["ciao", "buongiorno", "arrivederci", "buonasera"]))
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

const antiSpam = function (emailContent) {
    return !emailContent.includes("SPAM") && !emailContent.includes("SCAM")
}

console.log(antiSpam("Ciao, come stai? Hai bisogno di aiuto?"))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

const daysPassed = function (date) {
    const today = new Date()
    const timeDiff = today.getTime() - date.getTime()
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
    return daysDiff
}

console.log(daysPassed(new Date("2024-02-29")))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

