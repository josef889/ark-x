const readFileAsync = require('./reader');
const writeFileAsync = require('./writer');

const fs = require('fs');



     async function processFiles(){
        const inpuFiles=['file1.txt','file2.txt','file3.txt'];
        try{
            for(let file of inpuFiles){
                const content= await readFileAsync(file);  //read files 
                const manipulatedContent= content.toUpperCase(); // do upper to content 
                const newFileName = 'new'+file; //the name of the new fille 
                await writeFileAsync(newFileName,manipulatedContent)  //(path,content)
                console.log(`${file} processed successfully.`);

            }
            
        }catch(err){
            console.log(err);

        }
            console.log(' All files processed.');

}

module.exports = processFiles;
