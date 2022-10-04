//Code de l'algorithme. Vous pouvez l'utiliser pour vos projets personnels.
const crypto = require("node:crypto")
function cryptincesar(wordte, encrypt){
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const word = wordte.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
const encryptnmb = encrypt
let finalarray = []
word.toUpperCase().split('').forEach((crypted)=>{
    let place = alphabet.indexOf(crypted)
    let finalnmb = +place + +encryptnmb
    let final = alphabet[finalnmb]
    if(!final){
    let errornb = encryptnmb-alphabet.reverse().indexOf(crypted)
    alphabet.reverse()
    final = alphabet[errornb-1]
    }
    finalarray.push(final)
})
return finalarray.join('').toString()
}

function decryptincesar(wordte, encrypt){
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    alphabet.reverse()
    const word = "LKXKXO".normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    for(let encryptnmb = 1;encryptnmb<=25;encryptnmb++){
    let finalarray = []
    word.toUpperCase().split('').forEach((crypted)=>{
        let place = alphabet.indexOf(crypted)
        let finalnmb = +place + +encryptnmb
        let final = alphabet[finalnmb]
        if(!final){
        let errornb = encryptnmb-alphabet.reverse().indexOf(crypted)
        alphabet.reverse()
        final = alphabet[errornb-1]
        }
        finalarray.push(final)
    })
    console.log(finalarray.join('').toString())
}
    }

    function cryptinvernam(){
        const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let word = "hello".normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        let keyarray = []
        for(let i = 0;i<word.length;i++){
            let gen = Math.floor(Math.random() * (27 - 0)) + 0
            keyarray.push(alphabet[gen])
        }
        let key = keyarray.join('').toString()
        console.log(key)
        let finalarray = []
        let arraycrypt0 = []
        let arraykey = []
        let x = 0
        let y = 0
        let lenghtarray = []
        word.toUpperCase().split('').forEach(character=>{
            lenghtarray.push(x)
            x++
            if(!alphabet.includes(character)) return;
            arraycrypt0.push(alphabet.indexOf(character))
        })
        key.toUpperCase().split('').forEach(character=>{
            if(!alphabet.includes(character)) return;
            arraykey.push(alphabet.indexOf(character))
        })
arraycrypt0.forEach((number)=>{
let nbtc = number+arraykey[lenghtarray[y]]
let final0 = ((nbtc % 26 ) + 26 ) % 26
let final = alphabet[final0]
finalarray.push(final)
y++
})
console.log(finalarray.join('').toString())
    }

    function decryptinvernam(){
        const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let word = "MASQUE".normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        let key = "RYDSFP"
        console.log(key)
        let finalarray = []
        let arraycrypt0 = []
        let arraykey = []
        let x = 0
        let y = 0
        let lenghtarray = []
        word.toUpperCase().split('').forEach(character=>{
            lenghtarray.push(x)
            x++
            if(!alphabet.includes(character)) return;
            arraycrypt0.push(alphabet.indexOf(character))
        })
        key.toUpperCase().split('').forEach(character=>{
            if(!alphabet.includes(character)) return;
            arraykey.push(alphabet.indexOf(character))
        })
arraycrypt0.forEach((number)=>{
let nbtc = number-arraykey[lenghtarray[y]]
let final0 = ((nbtc % 26 ) + 26 ) % 26
let final = alphabet[final0]
finalarray.push(final)
y++
})
console.log(finalarray.join('').toString())
    }
//SHA256 disponible uniquement sur Web