//Code de l'algorithme. Vous pouvez l'utiliser pour vos projets personnels.
function cryptincesar(wordte, encrypt){
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const word = wordte
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
    const word = "LKXKXO"
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