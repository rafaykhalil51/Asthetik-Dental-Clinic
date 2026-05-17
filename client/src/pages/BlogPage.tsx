import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Clock, ArrowRight, BookOpen, TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts, blogCategories } from "@/data/blogData";
import AmbientBackground from "@/components/AmbientBackground";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: "-80px" });

  const featured = blogPosts.filter((p) => p.featured);
  const filtered = blogPosts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#0C1B2E]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 0%, rgba(14,165,233,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 10% 100%, rgba(6,182,212,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
              <BookOpen size={12} className="text-sky-400" />
              Dental Insights & Education
            </div>
            <h1
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-5"
              style={{ letterSpacing: "-0.04em" }}
            >
              The{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #38BDF8, #0EA5E9, #7DD3FC)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Asthetik
              </span>
              <br />
              Journal
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Expert insights on dental health, cosmetic dentistry, technology, and patient care from DHA Karachi's premier dental studio.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 max-w-md"
          >
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-5 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white placeholder:text-white/30 text-sm outline-none focus:border-sky-400/50 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Articles ── */}
      {featured.length > 0 && activeCategory === "All" && searchQuery === "" && (
        <section className="relative py-20 overflow-hidden border-b border-[#E8E5DF]">
          <AmbientBackground variant="light" particles={false} />
          <div className="container">
            <div className="flex items-center gap-3 mb-10">
              <TrendingUp size={16} className="text-sky-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy">
                Featured Articles
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {featured.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/9] cursor-pointer shadow-xl shadow-navy/8">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(12,27,46,0.95) 0%, rgba(12,27,46,0.4) 50%, transparent 100%)",
                        }}
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 rounded-full bg-sky-500/90 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-3 mb-3 text-white/50 text-xs">
                          <Clock size={12} />
                          <span>{post.readTime} min read</span>
                          <span>·</span>
                          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                        </div>
                        <h2 className="text-white font-bold text-xl md:text-2xl leading-tight mb-2 group-hover:text-sky-300 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-white/55 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-2 mt-4 text-sky-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                          Read Article <ArrowRight size={12} />
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

      {/* ── Category Filter ── */}
      <div className="sticky top-[73px] z-40 bg-[#FAFAF8]/90 backdrop-blur-xl border-b border-[#E8E5DF]">
        <div className="container py-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 w-max">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#0C1B2E] text-white shadow-md"
                    : "bg-white border border-[#E8E5DF] text-navy/60 hover:text-navy hover:border-navy/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Article Grid ── */}
      <section className="relative py-20 overflow-hidden">
        <AmbientBackground variant="light" />
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <p className="text-navy/40 text-sm">
              <span className="font-bold text-navy">{filtered.length}</span> article{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-navy/30 text-lg">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <motion.div
              ref={gridRef}
              variants={container}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filtered.map((post) => (
                <motion.div key={post.slug} variants={item}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group cursor-pointer rounded-[2rem] bg-white border border-[#E8E5DF] overflow-hidden hover:border-sky-200 hover:shadow-xl hover:shadow-navy/6 transition-all duration-500 hover:-translate-y-1">
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-[#0C1B2E]/80 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3 text-navy/35 text-xs">
                          <Clock size={11} />
                          <span>{post.readTime} min read</span>
                          <span>·</span>
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <h3 className="text-navy font-bold text-lg leading-tight mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-navy/45 text-sm leading-relaxed line-clamp-2 mb-5">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sky-500 text-xs font-bold uppercase tracking-widest">
                          Read More <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-24 bg-[#0C1B2E] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(14,165,233,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10 text-center max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
              Stay Informed
            </div>
            <h2 className="text-white font-extrabold text-4xl mb-4" style={{ letterSpacing: "-0.03em" }}>
              Expert Dental Insights,<br />
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #38BDF8, #0EA5E9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                In Your Inbox.
              </span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-8">
              Join thousands of patients who trust Asthetik Dental for expert dental health guidance.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white placeholder:text-white/30 text-sm outline-none focus:border-sky-400/50 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-4 rounded-2xl bg-sky-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-sky-500/25 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
