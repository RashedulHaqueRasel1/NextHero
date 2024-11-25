
export async function GET(){
    return Response.json({
        users
    })
}


export async function POST(request){

    const newUser = await request.json()
    users.push({
        id: users.length + 1,
        name: newUser.name
    })

    return Response.json({
        massage: "User added",
        users
    })
}







const users = [
    {
        id: 1,
        name: "Rasel",
    },
    {
        id: 2,
        name: "Arif",
    },
    {
        id: 3,
        name: "Jeem",
    },
]