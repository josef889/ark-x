const readline=require('readline');
const fs=require('fs')

const r1= readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout,
    }
)

const table=[]
function AddContact(){
    r1.question('Enter your name : ',(namee)=>{
        r1.question('enter your phone number : ',(number)=>{
            table.push({namee,number});
            menu();
    })
})
}
function showContact(){
    table.forEach((contact,index)=>{
        console.log(`${index +1 } ${contact.namee} ${contact.number} `)
    
    })
    menu();
}

function SearchContact(){
    r1.question('value that you search',(value)=>{
        let SearchContact= table.filter((contact)=>contact.namee==value);
        SearchContact.forEach((contact,index)=>{
            console.log(`${index +1 } ${contact.namee} ${contact.number} `)
        })
    })
    menu()
}


function handleMenu(input){
    switch(input){
        case '1':
            AddContact();
            break;
        case '2':
            showContact();
            break;
        case '3':
            r1.close();
            break;
        case '4':
            SearchContact();
            break;


    }

}
function menu(){
    console.log(`
1.add user
2.show contscts
3.exit
4.search contact 
`);
r1.question('shoose number',handleMenu)

}
menu()
