
const page = ({ params }) => {
    console.log(params.slug)

    const { title, description } = blogs.find(blog => blog.slug == params.slug);

    return (
        <div>
            <h1 className="text-center text-3xl text-green-500 my-20">{title}</h1>
            <p className="text-center">{description}</p>
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