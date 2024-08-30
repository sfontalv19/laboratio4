// Task 3: addUser(first_name, last_name, email)

export function addUser(first_name, last_name, email){
    fetch("http://localhost:3000/users",{
       method:"POST",
       body: JSON.stringify({
        id: '6',
        first_name: first_name,
        last_name: last_name,
        email: email
       }),
       headers:{
         "content-Type":"application/json; charset=UTF-8"
       }
    })
 
}
 