export type PostFaq = { question: string; answer: string };

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  datePublished: string;
  dateModified: string;
  excerpt: string;
  body: PostBlock[];
  faqs?: PostFaq[];
  tags: string[];
};
