"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react"

// import Link from "next/link";

const NavBar = () => {

    const pathName = usePathname();
    const router = useRouter()
    const session = useSession();
    console.log(session)

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'contact',
            path: '/contact'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Users',
            path: '/users'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Comments',
            path: '/comments'
        },

    ]

    const handleLogin = (path) => {
        router.push('/api/auth/signin')
    };


    if (pathName.includes("dashboard")) {
        return (
            <div className=" p-6 bg-orange-800">
                <nav className="flex justify-between mx-auto container ">
                    <div>
                        <h1 className="text-4xl font-bold">He<span className="text-blue-500">ro</span></h1>
                    </div>
                    <div className="flex justify-between gap-8">

                        <ul className="flex gap-4 font-bold text-xl mt-4">
                            {
                                links?.map((link) => <Link className={`${pathName === link.path && "text-rose-600"}`} key={link.path} href={link.path}>{link.title}</Link>)
                            }
                        </ul>

                        <button onClick={handleLogin} className="bg-blue-500 p-3 border rounded-xl font-bold">Login</button>
                    </div>

                </nav>

            </div>
        )
    }


    return (
        <div className=" p-6 bg-blue-300">
            <nav className="flex justify-between mx-auto container ">
                <div>
                    <h1 className="text-4xl font-bold">He<span className="text-blue-500">ro</span></h1>
                </div>
                <div className="flex justify-between gap-8">

                    <ul className="flex gap-4 font-bold text-xl mt-4">
                        {
                            links?.map((link) => <Link className={`${pathName === link.path && "text-rose-600"}`} key={link.path} href={link.path}>{link.title}</Link>)
                        }
                    </ul>

                    {!session.status === 'authenticated' ? <button onClick={handleLogin} className="bg-blue-500 p-3 border rounded-xl font-bold">Login</button>
                        :
                        <>
                            <button onClick={() => signOut()} className="bg-blue-500 p-3 border rounded-xl font-bold">Log Out</button>
                            <button onClick={handleLogin} className="bg-blue-500 p-3 border rounded-xl font-bold">Login</button>
                        </>
                    }
                </div>

            </nav>

        </div>
    );
};

export default NavBar;