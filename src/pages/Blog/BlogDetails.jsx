import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../../contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';

import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(3); // State to control the number of visible blogs
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blog",
          "fields.blogId": blogId,
        });

        if (response.items.length > 0) {
          setBlog(response.items[0]);
        } else {
          console.error("Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog details:", err);
      }
    };

    const fetchRecentBlogs = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blog",
          order: "-fields.date",
          limit: 10, // Fetch more blogs initially (can be adjusted)
        });

        setRecentBlogs(response.items);
      } catch (err) {
        console.error("Error fetching recent blogs:", err);
      }
    };

    fetchBlogDetails();
    fetchRecentBlogs();
  }, [blogId]);

  const showMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3); // Increment the number of visible blogs
  };

  const handleShowMoreNavigation = () => {
    // Navigate to the blog card page (adjust path as needed)
    navigate("/blog");
  };

  if (!blog) {
    return null;
  }

  const { title, content, date, image } = blog.fields;

  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    if (!dateString) return "Time not available";
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-4xl font-bold my-6 text-gray-800 dark:text-white">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-3xl font-semibold my-4 text-gray-800 dark:text-white">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-2xl font-semibold my-3 text-gray-800 dark:text-white">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-xl font-medium my-2 text-gray-800 dark:text-white">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-lg font-medium my-2 text-gray-800 dark:text-white">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-base font-medium my-1 text-gray-800 dark:text-white">{children}</h6>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="my-4 text-gray-700 dark:text-gray-300">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-8 my-4 text-gray-700 dark:text-gray-300">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pl-8 my-4 text-gray-700 dark:text-gray-300">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="my-2 text-gray-700 dark:text-gray-300">{children}</li>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data.target.fields.file.url}
        alt={node.data.target.fields.title || "Image"}
        className="my-6 w-full rounded-lg shadow-md"
      />
    ),
    [BLOCKS.HYPERLINK]: (node) => (
      <a href={node.data.uri} className="text-blue-500 underline dark:text-blue-400">
        {node.content[0].value}
      </a>
    ),
  },
};


  const shareOnWhatsApp = () => {
    const text = `${title} - ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "_blank");
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${title}`, "_blank");
  };

  const handlePrevious = () => {
    const currentIndex = recentBlogs.findIndex((blog) => blog.fields.blogId === blogId);
    if (currentIndex > 0) {
      const previousBlog = recentBlogs[currentIndex - 1];
      navigate(`/blogs/${previousBlog.fields.blogId}`);
    }
  };

  const handleNext = () => {
    const currentIndex = recentBlogs.findIndex((blog) => blog.fields.blogId === blogId);
    if (currentIndex < recentBlogs.length - 1) {
      const nextBlog = recentBlogs[currentIndex + 1];
      navigate(`/blogs/${nextBlog.fields.blogId}`);
    }
  };

  return (
    <div>
      {/* Banner Section with Solid Blue Background */}
      <div className="bg-blue-700 py-32 px-4 sm:px-8 md:px-16 dark:bg-blue-800" style={{backgroundColor:'#4338ca'}}>
        <div className="flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">{title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="flex gap-12 mt-12 flex-col lg:flex-row">
          {/* Left Side - Blog Content */}
          <div className="flex-1">
            <div className="max-w-4xl p-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-500 dark:text-gray-300">
                  <FaCalendarAlt className="text-xl text-gray-600 dark:text-gray-400" />
                  <span className="ml-2">{formatDate(date)}</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-300">
                  <FaClock className="text-xl text-gray-600 dark:text-gray-400" />
                  <span className="ml-2">{formatTime(date)}</span>
                </div>
              </div>
            </div>

            <div className="max-w-4xl p-6">
              {/* Blog Image */}
              {image?.fields?.file?.url && (
                <img
                  src={image.fields.file.url}
                  alt={image.fields.title || "Blog Image"}
                  className="w-full h-auto object-cover rounded-lg mt-6"
                />
              )}

              {/* Title below the image */}
              <h1 className="text-4xl font-bold mt-6 text-gray-900 dark:text-white">{title}</h1>
            </div>

            {/* Blog Content */}
            <div className="max-w-4xl mx-auto p-6 mt-12">
              <div className="prose prose-lg prose-indigo dark:prose-invert">
                {documentToReactComponents(content, options)}
              </div>
            </div>

            {/* Social Share Icons */}
            <div className="max-w-4xl mx-auto p-6 text-left">
              <div className="flex justify-start space-x-6">
                <button
                  onClick={shareOnWhatsApp}
                  className="text-3xl text-green-500 hover:text-green-600"
                >
                  <FaWhatsapp />
                </button>
                <button
                  onClick={shareOnFacebook}
                  className="text-3xl text-blue-600 hover:text-blue-700"
                >
                  <FaFacebook />
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="text-3xl text-blue-800 hover:text-blue-900"
                >
                  <FaLinkedin />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Recent Blogs */}
          <div className="w-full lg:w-[35%] mt-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-300">Recent Blogs</h2>

            {/* Solid Grey Line */}
            <hr className="border-t-2 border-gray-300 mb-6 dark:border-gray-600" />

            <div>
              {recentBlogs.slice(0, visibleBlogs).map((recentBlog) => {
                const { title, date } = recentBlog.fields;
                return (
                  <div key={recentBlog.sys.id} className="mb-4">
                    <Link
                      to={`/blogs/${recentBlog.fields.blogId}`}
                      className="text-lg text-blue-900 font-semibold hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition duration-300 ease-in-out mt-5 dark:text-blue-400"
                    >
                      {title}
                    </Link>

                    {/* Date with a small gap */}
                    <p className="text-sm text-gray-500 mt-2 dark:text-gray-300">
                      {formatDate(date)} - {formatTime(date)}
                    </p>

                    {/* Light Grey br after the date */}
                    <br className="border-t-2 border-gray-200 mt-2 dark:border-gray-600" />
                  </div>
                );
              })}

              {visibleBlogs < recentBlogs.length && (
                <button
                onClick={handleShowMoreNavigation}
                className="mt-4 text-white rounded-full px-6 py-3 text-lg font-semibold bg-[#4338ca] hover:bg-blue-950 transition-colors duration-300"
              >
                Show More
              </button>
              
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
