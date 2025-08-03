import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import img from "../../assets/bgwrapper.jpg";
import { client } from "../../contentful/client";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const blogsPerPage = 6; // Max blogs per page
  const navigate = useNavigate();

  // Fetch blogs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await client.getEntries({ content_type: "blog" });
        console.log("Fetched Entries:", entries.items); // Log the fetched data
        setBlogs(entries.items); // Set blogs to state
      } catch (err) {
        console.error("Error fetching entries:", err);
      }
    };
    fetchData();
  }, []);

  // Format the date
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = blogs.length ? Math.ceil(blogs.length / blogsPerPage) : 1;

  console.log("Blogs:", blogs); // Log blogs to ensure they're fetched correctly
  console.log("Total Pages:", totalPages); // Log totalPages to check calculation

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!blogs.length) return null;

  return (
    <>
      {/* Helmet for managing meta tags */}
      <Helmet>
        <title>Our Blogs - Dristy Eye Hospital</title>
        <meta
          name="description"
          content="Read the latest blogs on eye care and treatments from Dristy Eye Hospital, providing quality eye services in Chouparan."
        />
        <meta
          name="keywords"
          content="Dristy Eye Hospital, Blogs, Eye Care, Treatments, Health, Chouparan"
        />
        <meta name="author" content="Dristy Eye Hospital" />
      </Helmet>

      <BackgroundWrapper title1={"Home"} title2={"Blog"} img={img} />
      <div className="bg-gray-50 dark:bg-black p-6">
        {/* Animated Our Blogs Title */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-grey-200 dark:text-white animate__animated animate__fadeIn animate__delay-1s">
            Our Blogs
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.map((item, index) => {
            const { title, date, image, blogId } = item.fields;
            return (
              <div
                key={index}
                className="dark:bg-gradient-to-r from-slate-900 to-slate-700 shadow-md rounded-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
                onClick={() => navigate(`/blogs/${blogId}`)}
              >
                {image?.fields?.file?.url && (
                  <img
                    src={image.fields.file.url}
                    alt={image.fields.title || "Blog Image"}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <span className="text-sm text-gray-500">
                    {formatDate(date)}
                  </span>
                  <h2 className="mt-2 text-2xl font-semibold text-[#4338ca] dark:text-white">
                    {title || "Untitled Blog"}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-4">
            {/* Previous Button */}
            {currentPage > 1 && (
              <button
                onClick={() => paginate(currentPage - 1)}
                className="px-4 py-2 text-sm font-semibold rounded-md bg-gray-300 dark:bg-gray-700 dark:text-white hover:bg-[#4338ca]"
              >
                Prev
              </button>
            )}

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition duration-200 ${
                  currentPage === index + 1
                    ? "bg-[#4338ca] text-white"
                    : "bg-gray-300 dark:bg-gray-700 dark:text-white hover:bg-[#4338ca]"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            {currentPage < totalPages && (
              <button
                onClick={() => paginate(currentPage + 1)}
                className="px-4 py-2 text-sm font-semibold rounded-md bg-gray-300 dark:bg-gray-700 dark:text-white hover:bg-[#4338ca]"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
