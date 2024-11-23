// import { getAllUser } from "@/app/getAllApi/getAllApi";



const getAllUser = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}




const userDetailsPage = async ({ params }) => {

    const {title, body} = await getAllUser(params.id)

    // console.log(userDetails)

    return (
        <div>
            <h1 className="text-2xl text-orange-500 font-medium text-center my-10" >{title}</h1>
            <p className="text-center">Description : {body}</p>
        </div>
    );
};

export default userDetailsPage;