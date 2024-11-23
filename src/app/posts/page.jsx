
const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data

}


const page = async () => {


    const postData = await getPosts()
    // console.log(postData)

    return (
        <div>
            <h1>Total Post {postData.length}</h1>

            <div className="grid grid-cols-4 gap-4">
                {
                    postData?.map(({ title, body, id }) => (
                        <div key={id} className="border-2 p-4">
                            <h1>{title}</h1>
                            <p>{body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;