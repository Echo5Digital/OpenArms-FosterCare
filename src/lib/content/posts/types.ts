export type PostFaq = { question: string; answer: string };

export type PostBlock =
  /** Paragraph text may use *italic* and **bold**. */
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  /** Inline photo from /public, shown full width of the article column. */
  | { type: "img"; src: string; alt: string }
  /** Comparison table with sorting, search and paging. The first column is shown bold as the row label. */
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  /** Shows the post's `faqs` here, under this heading, instead of at the end of the page. */
  | { type: "faqs"; title: string }
  /** Highlighted line pulled out of the text. */
  | { type: "quote"; text: string }
  /** Dark call-to-action box with a button. */
  | { type: "cta"; eyebrow: string; title: string; text: string; label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string;
  dateModified: string;
  excerpt: string;
  /** Path under /public. Optional: posts without one get a stock photo from posts/images.ts. */
  image?: string;
  body: PostBlock[];
  faqs?: PostFaq[];
  /** Heading above the FAQs after the article. Optional: defaults to "Common Questions Foster Parents Ask". */
  faqTitle?: string;
  tags: string[];
};
