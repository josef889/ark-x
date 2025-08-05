const fs = require('fs');

    function  readFileAsync(path){
        return new Promise(function (resolve,reject){
            fs.readFile(path,'UTF-8',function (err,data){
                if(err){
                    reject('we didnt find the file');
                }
                resolve(`Read complete: ${data}`);
            })

        });
        
}

readFileAsync('./test.txt')
.then(function(solve){
    console.log(solve);
})
.catch(function (err){
    console.log(err);
})
.finally(function(){
    console.log('prosses end')
})

module.exports = readFileAsync;
