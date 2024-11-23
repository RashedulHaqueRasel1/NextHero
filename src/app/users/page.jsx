import { getAllUsers } from "../getAllApi/getAllApi";


const UsersPage = async () => {

    const totalUsers = await getAllUsers()
    // console.log(totalUsers)

    return (
        <div className="mx-auto container">

            <h1 className="text-3xl text-center font-bold my-10">Total Users {totalUsers.length}</h1>

            <div className="grid grid-cols-4 gap-4">
            {
                totalUsers?.map((user) => (
                    <div key={user.id}>
                        <div className="w-96 px-6 py-6  text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10">
                            <div className="space-y-4 xl:space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                                        <h3 className="text-white">Name : {user.name}</h3>
                                        <p className="">Email : {user.email}</p>
                                        <p className="">Phone : {user.phone}</p>
                                        <p className="">WebSite : {user.website}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>

        </div>
    );
};

export default UsersPage;