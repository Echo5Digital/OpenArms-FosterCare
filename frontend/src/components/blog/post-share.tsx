const networks = [
  {
    label: "Facebook",
    href: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    viewBox: "0 0 512 512",
    path: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
  },
  {
    label: "X",
    href: (url: string, title: string) => `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    viewBox: "0 0 24 24",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    viewBox: "0 0 448 512",
    path: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
  },
];

/** "Social Share" row under an article: each icon opens that network's share dialog for this post. */
export function PostShare({ url, title }: { url: string; title: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="mt-12">
      <p className="font-sans text-lg font-semibold text-pine">Social Share:</p>
      <div className="mt-4 flex items-center gap-3">
        {networks.map((n) => (
          <a
            key={n.label}
            href={n.href(encodedUrl, encodedTitle)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${n.label}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-pine transition-colors hover:bg-pine hover:text-cream"
          >
            <svg aria-hidden viewBox={n.viewBox} className="h-4 w-4 fill-current">
              <path d={n.path} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
