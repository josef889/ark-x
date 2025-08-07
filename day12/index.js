//Event-Driven Architecture

const EventEmitter = require('events');  // 1
const walkieTalkie = new EventEmitter(); // 2

const func=(message)=> console.log('i heard message ',message)

walkieTalkie.on('message',func);
walkieTalkie.emit('message','hello every one ')



//redline

const readline= require('readline');

// const r1 = readline.createInterface(
//     {
//         input:process.stdin,
//         output:process.stdout,
//     }
// )
// r1.question('what is your name ?',(name)=>{
//     console.log(`what is your name ${name}`);
//     r1.close();
// }
// )

const r2 = readline.createInterface(

    {
        input:process.stdin,
        output:process.stdout,
    }
    
)
r2.question('what is your name',(nom)=>{
    r2.question('how old are you',(age)=>{
            if(age<18){
                console.log(`hello ${nom} you're still young`);
                r2.close()
            }else{
                console.log(`hello ${nom} you're an adult`);
                r2.close()

            }
    })
})