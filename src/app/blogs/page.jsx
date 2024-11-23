import Link from "next/link";

const page = () => {

console.log(blogs)
    return (
        <div className="my-10   text-cyan-600 mx-auto container">
            <h1 className="text-center">Blogs {blogs.length}</h1>
            {
                blogs.map((blog) => 
                    <div key={blog.slug} className="border bg-blue-500 text-white p-6 flex my-4">
                        <h1>{blog.title}</h1>
                      
                        <p>{blog.description}</p>
                        <button className="p-2 ml-4 bg-rose-500 rounded-xl">
                            <Link href={`${`/blogs/${blog.slug}`}`}>View</Link>
                        </button>
                    </div>
                )
            }
        </div>
    );
};

const blogs = [
    {
      "slug": "introduction-to-react",
      "title": "Introduction to React",
      "description": "A beginner's guide to understanding the basics of React and how to get started with building interactive user interfaces."
    },
    {
      "slug": "mastering-css-flexbox",
      "title": "Mastering CSS Flexbox",
      "description": "Learn how to use CSS Flexbox to create responsive and flexible layouts for your web applications."
    },
    {
      "slug": "building-restful-apis",
      "title": "Building RESTful APIs",
      "description": "An in-depth look at creating RESTful APIs with Node.js and Express for your backend applications."
    },
    {
      "slug": "exploring-javascript-es6-features",
      "title": "Exploring JavaScript ES6 Features",
      "description": "A detailed overview of the most important ES6 features, such as arrow functions, promises, and template literals."
    },
    {
      "slug": "seo-basics-for-web-developers",
      "title": "SEO Basics for Web Developers",
      "description": "Understand the fundamentals of SEO and how to optimize your web applications for search engines."
    }
  ]
  


export default page;