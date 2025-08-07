const readline=require('readline');
const  r1= readline.createInterface(
    {
        input :process.stdin,
        output :process.stdout,

    }
)

let table=[]
function menu(){
    console.log(`
1.add a number 
2.shows numbers
3.search a number
4.exit
        `)
handleMenu()

}
menu()

function handleMenu(){
    r1.question('shoose your number : ',(n)=>{
            switch(n){
                case '1':
                    addNumber();
                    break;
                case '2':
                    showsAll();
                    break;
                case '3':
                    filter()
                    break;
                case '4':
                    r1.close()
                    break;

    }

    });

}

function addNumber(){
        r1.question('please enter your name : ',(nom)=>{
            r1.question('entrez votre numero : ',(nombre)=>{
                    table.push({nom,nombre})
                    menu()
            })
        })
}

function showsAll(){
    table.forEach((user,index)=>{
        console.log(`${index+1}   ${user.nom}     ${user.nombre}`)
    })
    menu()
}

function filter() {
    r1.question('enter the nom ', (nomf) => {
        let t1 = table.filter((user) => user.nom === nomf);
        if(t1.length===0){
            console.log('he is note here')

        }else{
            t1.forEach((n,index)=>{
                    console.log(`done       ${index+1}  ${n.nom}       ${n.nombre}  `)

            })


        }
        menu(); 
    });
}
