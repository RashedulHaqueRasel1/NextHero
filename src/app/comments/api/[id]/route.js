

export async function PATCH(req, {params}){
    console.log('this is id',params.id)
    return Response.json({
        massage: "Get"
    })
}
