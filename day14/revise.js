const fs = require("fs");

// fs.writeFile('./dido.txt','hello exvery one ',(err)=>{
//     if(err){
//         console.error('errrrrrrrr',err)
//     }else{
//         console.log('doneeeeeeeeeeeeeee write')
//     }

// })


function readJsonFile() {
  return new Promise((resolve, reject) => { 
    
    fs.readFile('./dido.txt', 'utf8', (err, data) => {
      if (err) {
        reject('❌ Error reading file: ' + err.message); 
      } else {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (error) {
          reject('❌ Error parsing JSON: ' + error.message); 
        }
      }
    });

  });
}
console.log(readJsonFile())
//add mew ligne but didnt delet old one 
// fs.appendFile('./dido.txt','\ni wich all good  ',(err)=>{
//     if(err){
//         console.error('errrrrrrrr',err)
//     }else{
//         console.log('updated done')
//     }

// })



// fs.unlink('./dido.txt',(err)=>{
//     if(err){
//         console.error('errrrrrrrr',err)
//     }else{
//         console.log('doneeeeeeeeeeeeeee delete')
//     }

// })