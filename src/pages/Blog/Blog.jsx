import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaCalendarAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import BackgroundWrapper from "../../component/BackgroundWrapper";
import SectionHeading from "../../component/ui/SectionHeading";
import Reveal from "../../component/ui/Reveal";
import img from "../../assets/bgwrapper.jpg";
import { client } from "../../contentful/client";
import { useLanguage } from "../../context/LanguageContext";

const blogsPerPage = 6;

const formatDate = (dateString, locale) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { t, isHi } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await client.getEntries({ content_type: "blog" });
        setBlogs(entries.items);
      } catch (err) {
        console.error("Error fetching entries:", err);
        setLoadError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = blogs.length ? Math.ceil(blogs.length / blogsPerPage) : 1;
  const currentBlogs = blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  const paginate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Our Blogs - Dristy Eye Hospital</title>
        <meta
          name="description"
          content="Read the latest blogs on eye care and treatments from Dristy Eye Hospital, providing quality eye services in Chouparan."
        />
        <meta name="keywords" content="Dristy Eye Hospital, Blogs, Eye Care, Treatments, Health, Chouparan" />
        <meta name="author" content="Dristy Eye Hospital" />
      </Helmet>

      <BackgroundWrapper title1={"Home"} title2={"Blog"} img={img} />
      <section className="section section-cream">
        <div className="container-x">
          <SectionHeading title={t("Our Blogs")} />

          {loading ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="card animate-pulse overflow-hidden">
                  <div className="aspect-[16/10] bg-slate-200 dark:bg-slate-800" />
                  <div className="space-y-3 p-6">
                    <div className="h-3 w-1/3 rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="h-5 w-4/5 rounded bg-slate-200 dark:bg-slate-800" />
                  </div>
                </div>
              ))}
            </div>
          ) : loadError || !blogs.length ? (
            <div className="card mx-auto mt-12 max-w-xl p-10 text-center">
              <p className="text-lg font-semibold text-ink dark:text-white">
                {loadError ? t("Blogs could not be loaded right now.") : t("No blogs published yet.")}
              </p>
              <p className="mt-2 text-sm">{t("Please check back soon.")}</p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentBlogs.map((item, index) => {
                const { title, date, image, blogId } = item.fields;
                return (
                  <Reveal key={item.sys?.id || index} delay={(index % 3) * 0.06}>
                    <Link to={`/blogs/${blogId}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                        {image?.fields?.file?.url && (
                          <img
                            src={image.fields.file.url}
                            alt={image.fields.title || "Blog Image"}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          <FaCalendarAlt className="text-leaf-600" />
                          {formatDate(date, isHi ? "hi-IN" : undefined)}
                        </span>
                        <h2 className="mt-3 flex-1 text-xl font-bold leading-snug transition group-hover:text-primary-600 dark:group-hover:text-primary-300">
                          {title || "Untitled Blog"}
                        </h2>
                        <span className="mt-5 grid h-9 w-9 place-items-center rounded-full bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white dark:bg-slate-800 dark:text-primary-300">
                          <HiArrowRight />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          )}

          {!loading && totalPages > 1 && (
            <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
              {currentPage > 1 && (
                <button type="button" onClick={() => paginate(currentPage - 1)} className="btn-outline !px-4 !py-2">
                  {t("Prev")}
                </button>
              )}
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  type="button"
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                  className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition ${
                    currentPage === index + 1
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-white text-slate-700 shadow-soft hover:bg-primary-50 dark:bg-slate-800 dark:text-slate-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              {currentPage < totalPages && (
                <button type="button" onClick={() => paginate(currentPage + 1)} className="btn-outline !px-4 !py-2">
                  {t("Next")}
                </button>
              )}
            </nav>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
