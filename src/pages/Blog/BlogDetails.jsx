import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaCalendarAlt, FaClock } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { client } from "../../contentful/client";
import { useLanguage } from "../../context/LanguageContext";

const formatDate = (dateString, locale) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
};

const formatTime = (dateString, locale) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleTimeString(locale, { hour: "numeric", minute: "numeric" });
};

const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="mb-4 mt-10 text-3xl font-extrabold md:text-4xl">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="mb-4 mt-10 text-2xl font-bold md:text-3xl">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="mb-3 mt-8 text-xl font-bold md:text-2xl">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="mb-2 mt-6 text-lg font-bold md:text-xl">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="mb-2 mt-6 text-lg font-semibold">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="mb-2 mt-4 font-semibold">{children}</h6>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="my-5 text-[1.05rem] leading-8">{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="my-5 list-disc space-y-2 pl-6 marker:text-primary-600">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="my-5 list-decimal space-y-2 pl-6 marker:font-bold marker:text-primary-600">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="pl-1 leading-7 [&>p]:my-0">{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="my-6 border-l-4 border-leaf bg-slate-50 py-2 pl-5 italic dark:bg-slate-900">{children}</blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        src={node.data.target.fields.file.url}
        alt={node.data.target.fields.title || "Image"}
        loading="lazy"
        className="my-8 w-full rounded-2xl shadow-soft"
      />
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-600 underline underline-offset-2 dark:text-primary-300">
        {children}
      </a>
    ),
  },
};

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const visibleBlogs = 3;
  const { t, isHi } = useLanguage();
  const locale = isHi ? "hi-IN" : undefined;

  useEffect(() => {
    setBlog(null);
    setNotFound(false);

    client
      .getEntries({ content_type: "blog", "fields.blogId": blogId })
      .then((response) => {
        if (response.items.length > 0) setBlog(response.items[0]);
        else setNotFound(true);
      })
      .catch((err) => {
        console.error("Error fetching blog details:", err);
        setNotFound(true);
      });

    client
      .getEntries({ content_type: "blog", order: "-fields.date", limit: 10 })
      .then((response) => setRecentBlogs(response.items))
      .catch((err) => console.error("Error fetching recent blogs:", err));
  }, [blogId]);

  if (notFound) {
    return (
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
        <p className="text-lg">{t("Blog not found")}</p>
        <Link to="/blog" className="btn-primary">{t("Our Blogs")} <HiArrowRight /></Link>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="loader" />
      </div>
    );
  }

  const { title, content, date, image } = blog.fields;
  const url = typeof window !== "undefined" ? window.location.href : "";

  const share = [
    { label: "WhatsApp", icon: <FaWhatsapp />, cls: "hover:bg-[#25D366]", href: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}` },
    { label: "Facebook", icon: <FaFacebook />, cls: "hover:bg-[#1877F2]", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { label: "LinkedIn", icon: <FaLinkedin />, cls: "hover:bg-[#0A66C2]", href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}` },
  ];

  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-900 to-primary-700">
        <div className="absolute -right-24 -top-24 h-72 w-72 animate-float-slow rounded-full bg-primary-500/30 blur-3xl" />
        <div className="container-x relative py-16 md:py-24">
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-300">
            <Link to="/" className="hover:text-white">{t("Home")}</Link>
            <span className="text-slate-500">/</span>
            <Link to="/blog" className="hover:text-white">{t("Blog")}</Link>
          </nav>
          <h1 className="max-w-4xl font-display text-3xl font-extrabold leading-tight !text-white sm:text-4xl md:text-5xl">{title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <span className="flex items-center gap-2"><FaCalendarAlt className="text-leaf-400" /> {formatDate(date, locale)}</span>
            <span className="flex items-center gap-2"><FaClock className="text-leaf-400" /> {formatTime(date, locale)}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <article className="lg:col-span-8">
            {image?.fields?.file?.url && (
              <img
                src={image.fields.file.url}
                alt={image.fields.title || "Blog Image"}
                className="mb-8 w-full rounded-3xl object-cover shadow-lift"
              />
            )}
            <div className="text-slate-700 dark:text-slate-300">{documentToReactComponents(content, richTextOptions)}</div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
              {share.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${s.label}`}
                  className={`grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-xl text-slate-700 transition hover:text-white dark:bg-slate-800 dark:text-slate-200 ${s.cls}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="card p-6 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold">{t("Recent Blogs")}</h2>
              <ul className="mt-5 divide-y divide-slate-100 dark:divide-slate-800">
                {recentBlogs.slice(0, visibleBlogs).map((recentBlog) => {
                  const { title: rTitle, date: rDate, blogId: rId } = recentBlog.fields;
                  const active = rId === blogId;
                  return (
                    <li key={recentBlog.sys.id} className="py-4 first:pt-0">
                      <Link
                        to={`/blogs/${rId}`}
                        className={`font-semibold leading-snug transition hover:text-primary-600 dark:hover:text-primary-300 ${active ? "text-primary-600 dark:text-primary-300" : "text-slate-900 dark:text-white"}`}
                      >
                        {rTitle}
                      </Link>
                      <p className="mt-1.5 text-xs text-slate-500">
                        {formatDate(rDate, locale)} - {formatTime(rDate, locale)}
                      </p>
                    </li>
                  );
                })}
              </ul>
              {visibleBlogs < recentBlogs.length && (
                <Link to="/blog" className="btn-primary mt-4 w-full">
                  {t("Show More")} <HiArrowRight />
                </Link>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
