const fs = require('fs');

async function readFile(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./input.txt','utf8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                try{
                    const parsedata= JSON.parse(data);
                    const random = Math.floor(Math.random()*parsedata.length)
                    
                    resolve(parsedata[random]);
                }catch(err){
                    reject(err);
                }
            }
        })
    })

}

async function writeFile(){
        return new Promise( async (resolve,reject)=>{
                try{
                    const data= await readFile();
                    const response=  await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.lng}&current_weather=true`);
                    let dataw= await response.json()

                     if(fs.existsSync(`./${data.name}.txt`)){
                        fs.unlinkSync(`./${data.name}.txt`)
                    }

                    fs.writeFile(`./${data.name}.txt`,`the name of the city ${data.name} the waither is ${dataw.current_weather.temperature}`,(err)=>{
                        if(err){
                            reject(err)
                        }else{
                            resolve('donne')
                        }
                    })
                }catch(err){
                    reject(err)
                }
        })
}


// Logs the random city name
async function main() {
    try {
        const city = await readFile();
        console.log('Random city:', city);
    } catch(err) {
        console.error('Error reading file:', err);
    }
}

// Writes city name to file and logs result
async function main2() {
    try {
        const result = await writeFile();
        console.log('Write file result:', result);
    } catch(err) {
        console.error('Error writing file:', err);
    }
}

// Run the functions sequentially
async function run() {
    await main();
    await main2();
}

run();