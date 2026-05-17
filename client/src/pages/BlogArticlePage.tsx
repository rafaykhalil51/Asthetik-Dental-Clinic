import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Share2,
  ChevronRight,
  Quote,
  ChevronDown,
} from "lucide-react";
import { Link, useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogData";

export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: articleRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-navy mb-4">Article not found</p>
          <Link href="/blog">
            <button className="btn-primary">Back to Journal</button>
          </Link>
        </div>
      </div>
    );
  }

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderContent = () =>
    post.content.map((section, i) => {
      if (section.type === "heading") {
        return (
          <h2
            key={i}
            className="text-2xl md:text-3xl font-bold text-navy mt-12 mb-5"
            style={{ letterSpacing: "-0.02em" }}
          >
            {section.content}
          </h2>
        );
      }
      if (section.type === "paragraph") {
        return (
          <p key={i} className="text-navy/65 text-lg leading-relaxed mb-6">
            {section.content}
          </p>
        );
      }
      if (section.type === "quote") {
        return (
          <div
            key={i}
            className="relative my-10 pl-8 border-l-4 border-sky-400"
          >
            <Quote
              size={24}
              className="text-sky-300 mb-3"
              style={{ transform: "scaleX(-1)" }}
            />
            <p
              className="text-xl italic text-navy font-medium leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {section.content}
            </p>
          </div>
        );
      }
      if (section.type === "list") {
        return (
          <div key={i} className="my-8">
            <p className="text-navy font-semibold mb-4">{section.content}</p>
            <ul className="space-y-3">
              {section.items?.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <ChevronRight
                    size={16}
                    className="text-sky-500 flex-shrink-0 mt-1"
                  />
                  <span className="text-navy/65 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      if (section.type === "cta") {
        return (
          <div
            key={i}
            className="my-10 p-8 rounded-[2rem] text-center"
            style={{
              background:
                "linear-gradient(135deg, #0C1B2E 0%, #0C3460 60%, #0EA5E9 100%)",
            }}
          >
            <p className="text-white font-semibold text-lg mb-5">
              {section.content}
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full bg-white text-navy font-bold text-sm uppercase tracking-wider shadow-2xl"
              >
                Book Consultation
              </motion.button>
            </Link>
          </div>
        );
      }
      return null;
    });

  return (
    <div className="min-h-screen bg-[#FAFAF8]" ref={articleRef}>
      {/* Reading Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-sky-500 z-[200] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-0 bg-[#0C1B2E] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(14,165,233,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10 max-w-4xl mx-auto">
          {/* Back */}
          <Link href="/blog">
            <motion.button
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest mb-8"
            >
              <ArrowLeft size={14} />
              Back to Journal
            </motion.button>
          </Link>

          {/* Category + Meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="px-3 py-1.5 rounded-full bg-sky-500/90 text-white text-[10px] font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <div className="flex items-center gap-3 text-white/35 text-xs">
              <Clock size={12} />
              <span>{post.readTime} min read</span>
              <span>·</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/50 text-lg leading-relaxed mb-10 max-w-2xl"
          >
            {post.excerpt}
          </motion.p>

          {/* Author + Share */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between pb-10 border-b border-white/10"
          >
            <div className="flex items-center gap-4">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-white/20"
              />
              <div>
                <p className="text-white font-bold text-sm">{post.author}</p>
                <p className="text-white/40 text-xs">{post.authorRole}</p>
              </div>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white/50 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Share2 size={13} />
              {copied ? "Copied!" : "Share"}
            </button>
          </motion.div>
        </div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="container max-w-5xl mx-auto mt-10"
        >
          <div className="rounded-t-[3rem] overflow-hidden aspect-[21/9]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ── Article Body ── */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-16">
            {/* Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {renderContent()}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-[#E8E5DF] flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-[#F0EEE8] text-navy/50 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                {/* Author Card */}
                <div className="p-6 rounded-[1.5rem] bg-white border border-[#E8E5DF]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-navy/40 mb-4">
                    About the Author
                  </p>
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover object-top mb-3 border-2 border-[#E8E5DF]"
                  />
                  <p className="font-bold text-navy text-sm">{post.author}</p>
                  <p className="text-navy/40 text-xs mt-1">{post.authorRole}</p>
                  <p className="text-navy/50 text-xs leading-relaxed mt-3">
                    Clinical director of Asthetik Dental & Implant Centre,
                    DHA Karachi. Specialising in implantology and cosmetic
                    dentistry since 2014.
                  </p>
                </div>

                {/* CTA Card */}
                <div
                  className="p-6 rounded-[1.5rem] text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #0C1B2E 0%, #0C3460 100%)",
                  }}
                >
                  <p className="font-bold text-base mb-2">
                    Ready to get started?
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed mb-5">
                    Book a consultation with our expert team.
                  </p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      className="w-full py-3 rounded-xl bg-sky-500 text-white font-bold text-xs uppercase tracking-wider"
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {post.faq.length > 0 && (
        <section className="py-20 bg-white border-t border-[#E8E5DF]">
          <div className="container max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="eyebrow text-sky-500 mb-3">
                <span className="w-6 h-px bg-sky-500 inline-block" />
                Frequently Asked
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-navy"
                style={{ letterSpacing: "-0.03em" }}
              >
                Common Questions
              </h2>
            </div>
            <div className="space-y-4">
              {post.faq.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="rounded-2xl border border-[#E8E5DF] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-navy pr-4">
                      {f.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-navy/40 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-navy/55 text-sm leading-relaxed">
                        {f.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Articles ── */}
      {related.length > 0 && (
        <section className="py-20 bg-[#FAFAF8]">
          <div className="container">
            <div className="flex items-center justify-between mb-10">
              <h2
                className="text-2xl font-extrabold text-navy"
                style={{ letterSpacing: "-0.02em" }}
              >
                Related Articles
              </h2>
              <Link href="/blog">
                <button className="text-sky-500 text-xs font-bold uppercase tracking-widest hover:underline">
                  View All
                </button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${rel.slug}`}>
                    <div className="group cursor-pointer rounded-[1.5rem] bg-white border border-[#E8E5DF] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-400">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={rel.coverImage}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-sky-500">
                          {rel.category}
                        </span>
                        <h3 className="font-bold text-navy text-base mt-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
                          {rel.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-3 text-navy/35 text-xs">
                          <Clock size={11} />
                          {rel.readTime} min read
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Newsletter ── */}
      <section className="py-20 bg-[#0C1B2E]">
        <div className="container max-w-xl mx-auto text-center">
          <h2
            className="text-white font-extrabold text-3xl mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            Never Miss an Update
          </h2>
          <p className="text-white/40 text-sm mb-8">
            Join our community of patients who stay informed about their oral
            health.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-4 rounded-2xl bg-sky-500 text-white font-bold text-sm uppercase tracking-wider"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
