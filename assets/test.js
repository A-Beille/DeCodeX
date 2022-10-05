const fs = require("fs")
fs.readdir(("./"),((err,files)=>{
    files.forEach((file=>{
        if(file.endsWith(".html")){
           let f = fs.readFileSync(file)
           let string = `<img src="../assets/greylock.svg" style="cursor: pointer; height: 4%; margin-left: 30px;" onclick="window.open('https://decodex.abey1.repl.co','_blank')" id="footer">`
            fs.writeFileSync(file,f+string)
           /*let spa = f.toString().split('\n')
            spa.splice(spa.indexOf(spa.at(-1)), 1);
            let result = spa.join('\n');
            fs.writeFileSync(file,result)*/
        }
    }))
}))