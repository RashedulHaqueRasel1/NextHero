

export const getAllUsers = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return data;
}


