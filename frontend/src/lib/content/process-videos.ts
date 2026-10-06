export type ProcessVideo = {
  id: string;
  /** Short heading shown on the player and in the playlist. */
  title: string;
  /** One line under the heading: a role, a place or the series name. */
  subtitle: string;
  /** Small label above the heading, used to group the videos at a glance. */
  category: string;
};

export const processVideos: ProcessVideo[] = [
  { id: "siqCcDhiehw", category: "Meet the Team", title: "Amber Price", subtitle: "Parent Relations Specialist" },
  { id: "H6WmST2QNF4", category: "Meet the Team", title: "D'Fawn Downs, LPC", subtitle: "Corporate Compliance Officer" },
  { id: "YQwRNt9GtV8", category: "Meet the Team", title: "Jessena Varghese, LPC", subtitle: "Clinical Director" },
  { id: "fwr3rZ8f8lg", category: "Foster Story", title: "Young Family Chooses Foster Care", subtitle: "Tulsa, OK" },
  {
    id: "DRCTWsVKGY4",
    category: "Foster Story",
    title: "Foster Parent Gives Back to the Community",
    subtitle: "Open Arms Oklahoma",
  },
  {
    id: "ZUOC5HlyQws",
    category: "Expert Advice",
    title: "How To Help Your Child Navigate Trauma",
    subtitle: "Jamie James, LPC · President & Founder",
  },
  { id: "xglFSfLSgL4", category: "Foster Story", title: "Inspired to Foster", subtitle: "Open Arms Foster Care Oklahoma" },
  {
    id: "3kxAPLayAjU",
    category: "Our Agency",
    title: "Working at Open Arms",
    subtitle: "Oklahoma Foster Care & Counseling Agency",
  },
  { id: "z-xj1-bH3xg", category: "Meet the Team", title: "Brandon Martin", subtitle: "Chief Financial Officer" },
  { id: "qbLdlwN0NX4", category: "Meet the Team", title: "Stephanie Vaughn", subtitle: "Billing, HR & Placements" },
  { id: "fedjHM-zu00", category: "Foster Story", title: "The Impact of Foster Care", subtitle: "Open Arms Foster Care OK" },
];
