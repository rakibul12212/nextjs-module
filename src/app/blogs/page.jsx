import Link from "next/link";
import React from "react";

const blogs = [
  {
    slug: "intro-to-javascript",
    title: "Introduction to JavaScript",
    description:
      "A beginner-friendly introduction to the basics of JavaScript, covering variables, functions, and basic programming concepts.",
  },
  {
    slug: "react-hooks-guide",
    title: "Understanding React Hooks",
    description:
      "A comprehensive guide to React Hooks, explaining useState, useEffect, and custom hooks with examples.",
  },
  {
    slug: "tailwind-css-tutorial",
    title: "Tailwind CSS Tutorial",
    description:
      "Learn how to style modern web applications quickly with Tailwind CSS, featuring tips for responsive design and customization.",
  },
  {
    slug: "nextjs-basics",
    title: "Getting Started with Next.js",
    description:
      "An introductory guide to Next.js, focusing on key features like server-side rendering, routing, and API routes.",
  },
  {
    slug: "typescript-for-beginners",
    title: "TypeScript for Beginners",
    description:
      "A step-by-step guide to learning TypeScript, exploring its types, interfaces, and how to use it with React.",
  },
];

const BlogsPages = () => {
  return (
    <div className="p-24">
      {blogs.map((blog) => (
        <div key={blog.slug} className="border-2 p-12">
          <h1>{blog.title}</h1>
          <h1>{blog.description}</h1>
          <button className="bg-red-400 p-2">
            <Link href={`/blogs/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogsPages;
