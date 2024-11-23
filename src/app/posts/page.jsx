import Link from "next/link";

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data

}


const page = async () => {


    const postData = await getPosts()
    // console.log(postData)

    return (
        <div className="mx-auto container">
            <h1 className="text-3xl text-center font-bold my-10">Total Post {postData.length}</h1>

            <div className="grid grid-cols-4 gap-4 my-6">
                {
                    postData?.slice(0,20).map(({ title, body, id }) => (
                        <div key={id} className="border-2 p-4 bg-cyan-900 text-white ">
                            <h1 className="text-2xl text-orange-500 font-medium">Title : {title}</h1>
                            <br />
                            <p className="">Description : {body}</p>
                            <Link href={`/posts/${id}`}><button className="bg-yellow-600 p-2">See More</button></Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;