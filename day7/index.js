async function  fetchUserData(){
    try{
        const response = await fetch(" https://dummyjson.com/users");
        const data= await response.json();
        // console.log(data)
        const filter = data.users.filter(({gender})=>(gender==='male'));
        const map = data.users.map(({firstName,lastName,age})=>(
            `Name: [${firstName} ${lastName}] , Age : [${age}]`

        ))
        // console.log(map)
        // console.log(filter)

//Summarize Data: Write a function named summarizeAge that uses reduce to calculate the total age of all the male users.

function summarizeAge(){
           return filter.reduce((acc,user)=>(acc+user.age),0)
}

console.log('Processed User Data:', map);
console.log('Total age of male users:', summarizeAge());




    }catch(err){
        console.log(err)
    }
}
fetchUserData()


