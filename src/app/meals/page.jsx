import Search from "@/components/Search";
import { getServerSession } from "next-auth";
import {  authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {


    const session =await getServerSession(authOptions)
    console.log("meals page", {session})

    return (
        <div>

            <h1 className="text-center text-4xl mt-4 text-rose-500">Search Your Meals</h1>

            <Search></Search>


        </div>
    );
};

export default page;