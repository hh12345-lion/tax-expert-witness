import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Blog | Tax Expert Witness Insights for Solicitors",
  description:
    "Practical articles for solicitors on UK tax expert witness reports, instructions, tribunal evidence and reviewing specialist tax opinion.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${SITE_NAME} Blog`,
          url: `${SITE_URL}/blog`,
          inLanguage: "en-GB",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            image: post.image ? `${SITE_URL}${post.image}` : undefined,
          })),
        }}
      />
      <PageHero
        title="Blog"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <p className="mb-10 max-w-3xl text-body">
            Practitioner-facing articles on tax expert witness reports,
            instructions, and reviewing specialist tax evidence in UK
            proceedings.
          </p>

          {posts.length === 0 ? (
            <p className="text-body">Articles will appear here shortly.</p>
          ) : (
            <ul className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="overflow-hidden rounded-lg border border-border bg-white shadow-sm"
                >
                  {post.image ? (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block h-52 w-full"
                    >
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </Link>
                  ) : null}
                  <div className="p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      <time dateTime={post.updated || post.date}>
                        {new Date(post.updated || post.date).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </time>
                      <span className="mx-2 text-body/50">·</span>
                      <span className="normal-case tracking-normal text-body/70">
                        {post.readingTime}
                      </span>
                    </p>
                    <h2 className="mt-3 text-xl font-semibold text-heading">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-accent focus:outline-none focus-visible:underline"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-body leading-relaxed">
                      {post.description}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-accent hover:underline"
                    >
                      Read article
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
