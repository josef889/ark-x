const fs = require('fs');


    function writeFileAsync(path,content){
        return new Promise(function (resolve,reject){
            fs.writeFile(path,content,'UTF-8',function (err){
                if(err){
                    reject('not done'+err)
                }else{
                    resolve('done')
                }
            })
        })
}
writeFileAsync('./test.txt',' bonjour youssef how are you ')
.then(function (solve){
    console.log(solve)
})
.catch(function (err){
    console.log(err);
})
.finally( function (){
    console.log(' process done')
})

module.exports = writeFileAsync;
